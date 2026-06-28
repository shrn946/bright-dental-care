'use client';

import { useEffect, useState } from 'react';

interface DemotwoLoaderProps {
  bodyContent: string;
  bodyClass: string;
}

export default function DemotwoLoader({ bodyContent, bodyClass }: DemotwoLoaderProps) {
  const [hasMounted, setHasMounted] = useState(false);

  // Defer rendering until client-side mount completes to avoid SSR hydration mismatches
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    // Apply body classes for Elementor styles to target
    const body = document.body;
    const originalClasses = body.className;
    body.className = bodyClass;

    // Set up WordPress / Elementor / MetForm global config namespaces
    (window as any).elementskit = {
      resturl: 'https://kinforce.net/dentis/wp-json/elementskit/v1/',
    };
    (window as any).mf = {
      postType: "page",
      restURI: "https://kinforce.net/dentis/wp-json/metform/v1/forms/views/"
    };
    (window as any).elementorFrontendConfig = {
      environmentMode: { edit: false, wpPreview: false, isScriptDebug: false },
      i18n: {
        shareOnFacebook: "Share on Facebook",
        shareOnTwitter: "Share on Twitter",
        pinIt: "Pin it",
        download: "Download",
        downloadImage: "Download image",
        fullscreen: "Fullscreen",
        zoom: "Zoom",
        share: "Share",
        playVideo: "Play Video",
        previous: "Previous",
        next: "Next",
        close: "Close"
      },
      is_rtl: false,
      breakpoints: { xs: 0, sm: 480, md: 768, lg: 1025, xl: 1440, xxl: 1600 },
      responsive: {
        breakpoints: {
          mobile: { label: "Mobile Portrait", value: 767, default_value: 767, direction: "max", is_enabled: true },
          tablet: { label: "Tablet Portrait", value: 1024, default_value: 1024, direction: "max", is_enabled: true },
          tablet_extra: { label: "Tablet Landscape", value: 1200, default_value: 1200, direction: "max", is_enabled: true }
        },
        hasCustomBreakpoints: true
      },
      version: "3.27.5",
      urls: { assets: "/demotwo/wp-content/plugins/elementor/assets/" },
      swiperClass: "swiper",
      kit: {
        active_breakpoints: ["viewport_mobile", "viewport_tablet"],
        global_image_lightbox: "yes",
        lightbox_enable_counter: "yes",
        lightbox_enable_fullscreen: "yes"
      }
    };

    // Find and execute script tags sequentially
    const container = document.getElementById('demotwo-content');
    if (!container) return;

    // Find all script elements inside the page
    const scripts = Array.from(container.querySelectorAll('script'));
    const loadedScripts: HTMLScriptElement[] = [];

    const loadScriptInSequence = (index: number) => {
      if (index >= scripts.length) return;
      const script = scripts[index];
      const newScript = document.createElement('script');
      
      // Copy attributes
      Array.from(script.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });

      if (script.src) {
        let src = script.src;
        // Prefix relative script sources with /demotwo/
        if (!src.startsWith('http') && !src.startsWith('/')) {
          src = `/demotwo/${src}`;
        }
        newScript.src = src;
        newScript.async = false;
        newScript.onload = () => loadScriptInSequence(index + 1);
        newScript.onerror = () => loadScriptInSequence(index + 1);
        document.body.appendChild(newScript);
        loadedScripts.push(newScript);
      } else {
        newScript.textContent = script.textContent;
        document.body.appendChild(newScript);
        loadedScripts.push(newScript);
        loadScriptInSequence(index + 1);
      }
    };

    // Start script loader execution chain
    loadScriptInSequence(0);

    return () => {
      // Revert body classes when unmounting / navigating away
      body.className = originalClasses;
      // Clean up dynamically loaded scripts
      loadedScripts.forEach((s) => s.remove());
    };
  }, [hasMounted, bodyContent, bodyClass]);

  // SSR and initial client hydration shows a clean placeholder
  if (!hasMounted) {
    return (
      <div 
        id="demotwo-content" 
        style={{ minHeight: '100vh', background: '#ffffff' }} 
      />
    );
  }

  return (
    <div 
      id="demotwo-content"
      dangerouslySetInnerHTML={{ __html: bodyContent }}
    />
  );
}
