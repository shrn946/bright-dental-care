import fs from 'fs';
import path from 'path';

export interface HtmlData {
  bodyContent: string;
  bodyClass: string;
  title: string;
  stylesheets: string[];
  inlineStyles: string[];
}

export function getHtmlData(slugs: string[]): HtmlData | null {
  let relativePath = '';
  if (!slugs || slugs.length === 0) {
    relativePath = 'index.html';
  } else {
    relativePath = path.join(...slugs, 'index.html');
  }

  const filePath = path.join(process.cwd(), 'dentis', relativePath);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  // --- Rebranding and Path Translation Pipeline ---
  // 1. Remove absolute crawled domain prefixes (both escaped \/ and unescaped / formats)
  html = html.replace(/https?:?(\\?\/){2}kinforce\.net\\?\/dentis\\?\//g, '');
  
  // 2. Map static index.html or relative index.html home links (potentially with hash or query) to the Next.js /demotwo base path
  html = html.replace(/href=["'](?:\.\.\/)*index\.html(?:#([^"']*))?["']/g, (match, hash) => {
    return `href="/demotwo${hash ? '#' + hash : ''}"`;
  });

  // Map any links to subpage index.html files (potentially with hash or query) to /demotwo/subpage
  html = html.replace(/href=["'](?:\.\.\/)*([^"':#\?]+)\/index\.html(?:#([^"']*))?["']/g, (match, subPath, hash) => {
    return `href="/demotwo/${subPath}${hash ? '#' + hash : ''}"`;
  });

  // 3. Map wp-content to /demotwo/assets (handles relative parent folders e.g. ../wp-content)
  html = html.replace(/(?:\.\.\/)*wp-content/g, '/demotwo/assets');
  
  // 4. Map wp-includes to /demotwo/includes (handles relative parent folders e.g. ../wp-includes)
  html = html.replace(/(?:\.\.\/)*wp-includes/g, '/demotwo/includes');

  // Extract meta title
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : 'Smile Care';

  // Extract body content and classes
  const bodyMatch = html.match(/<body class="([^"]+)"[^>]*>([\s\S]*)<\/body>/i);
  const bodyClass = bodyMatch ? bodyMatch[1] : '';
  let bodyContent = bodyMatch ? bodyMatch[2] : html;

  // Inline style injection to guarantee background slider displays
  bodyContent = bodyContent.replace(
    /class="([^"]*elementor-element-6208b830[^"]*)"/g,
    'class="$1" style="background-image: url(\'/demotwo/assets/uploads/2024/05/dental-slider-img.jpg\') !important; background-size: cover !important; background-position: center center !important; background-repeat: no-repeat !important;"'
  );

  // Extract all stylesheets (<link rel='stylesheet'>) from head
  const stylesheetMatches = html.match(/<link rel=['"]stylesheet['"][^>]*>/g) || [];
  const stylesheets = stylesheetMatches.map((link) => {
    return link;
  });

  // Extract all inline stylesheets (<style>) from head
  const inlineStylesMatches = html.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || [];
  const inlineStyles = inlineStylesMatches.map((style) => {
    return style;
  });

  // Add strong stylesheet fallback targeting elementor-element-6208b830
  inlineStyles.push(`<style>
    .elementor-element-6208b830,
    .elementor-element-6208b830 > .elementor-motion-effects-container > .elementor-motion-effects-layer {
      background-image: url("/demotwo/assets/uploads/2024/05/dental-slider-img.jpg") !important;
      background-size: cover !important;
      background-position: center center !important;
      background-repeat: no-repeat !important;
    }
  </style>`);

  return {
    bodyContent,
    bodyClass,
    title,
    stylesheets,
    inlineStyles,
  };
}
