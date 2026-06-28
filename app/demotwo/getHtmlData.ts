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
  // 1. Remove absolute crawled domain prefixes
  html = html.replace(/https:\/\/kinforce\.net\/dentis\//g, '');
  
  // 2. Map static index.html or relative index.html home links to the Next.js /demotwo base path
  html = html.replace(/href=["'](?:\.\.\/)*index\.html["']/g, 'href="/demotwo"');

  // 3. Map wp-content to /demotwo/assets (handles relative parent folders e.g. ../wp-content)
  html = html.replace(/(?:\.\.\/)*wp-content/g, '/demotwo/assets');
  
  // 4. Map wp-includes to /demotwo/includes (handles relative parent folders e.g. ../wp-includes)
  html = html.replace(/(?:\.\.\/)*wp-includes/g, '/demotwo/includes');

  // Extract meta title
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : 'Dentis';

  // Extract body content and classes
  const bodyMatch = html.match(/<body class="([^"]+)"[^>]*>([\s\S]*)<\/body>/i);
  const bodyClass = bodyMatch ? bodyMatch[1] : '';
  const bodyContent = bodyMatch ? bodyMatch[2] : html;

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

  return {
    bodyContent,
    bodyClass,
    title,
    stylesheets,
    inlineStyles,
  };
}
