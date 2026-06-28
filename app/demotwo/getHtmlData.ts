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

  // --- Normalization Pipeline ---
  // 1. Remove absolute domain prefixes
  html = html.replace(/https:\/\/kinforce\.net\/dentis\//g, '');
  
  // 2. Remove relative parent directories (../ or ../../)
  html = html.replace(/(?:\.\.\/)+wp-content/g, 'wp-content');
  html = html.replace(/(?:\.\.\/)+wp-includes/g, 'wp-includes');
  
  // 3. Remove existing /demotwo/ prefixes to avoid duplicates
  html = html.replaceAll('/demotwo/wp-content', 'wp-content');
  html = html.replaceAll('/demotwo/wp-includes', 'wp-includes');

  // 4. Prepend absolute /demotwo/ prefixes to all occurrences globally
  html = html.replaceAll('wp-content', '/demotwo/wp-content');
  html = html.replaceAll('wp-includes', '/demotwo/wp-includes');

  // 5. Replace relative page links inside anchors (e.g., href="about/" or href="about/index.html")
  const pagesList = ['about', 'contact', 'services', 'faq', 'pricing', 'gallery', 'doctors', 'appointment'];
  pagesList.forEach((pageName) => {
    // Matches href="about", href="about/", href="about/index.html", etc.
    const regex1 = new RegExp(`href=["']${pageName}\\/?(?:index\\.html)?["']`, 'g');
    html = html.replace(regex1, `href="/demotwo/${pageName}"`);
    
    // Matches href="../about", href="../about/", etc. (from subpages)
    const regex2 = new RegExp(`href=["']\\.\\.\\/${pageName}\\/?(?:index\\.html)?["']`, 'g');
    html = html.replace(regex2, `href="/demotwo/${pageName}"`);
  });

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
