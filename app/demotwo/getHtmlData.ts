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

  // Regex to match and replace local relative asset links (wp-content, wp-includes)
  // Ensure we prefix them with /demotwo/ so Next.js static asset server serves them correctly
  html = html.replace(/(src|href|action)=["'](wp-content|wp-includes)([^"']*)["']/g, '$1="/demotwo/$2$3"');
  
  // Also handle url() calls inside inline stylesheet styles (e.g. background-image: url('wp-content/...'))
  html = html.replaceAll("url('wp-content/", "url('/demotwo/wp-content/");
  html = html.replaceAll("url(\"wp-content/", "url(\"/demotwo/wp-content/");
  html = html.replaceAll("url(wp-content/", "url(/demotwo/wp-content/");
  html = html.replaceAll("url('wp-includes/", "url('/demotwo/wp-includes/");
  html = html.replaceAll("url(\"wp-includes/", "url(\"/demotwo/wp-includes/");
  html = html.replaceAll("url(wp-includes/", "url(/demotwo/wp-includes/");

  // Replace crawled kinforce.net root absolute links with relative /demotwo links
  html = html.replace(/href=["']https:\/\/kinforce\.net\/dentis\/([^"']*)["']/g, 'href="/demotwo/$1"');
  
  // Replace direct relative page links inside anchors (e.g., href="about/" or href="about/index.html")
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
    let updatedLink = link;
    if (!link.includes('href="/') && !link.includes('href="http')) {
      updatedLink = link.replace(/href=['"]([^'"]+)['"]/, 'href="/demotwo/$1"');
    }
    return updatedLink;
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
