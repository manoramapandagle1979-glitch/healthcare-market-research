'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

const SKIP_PATTERNS = [/^\/reports\/[^/]+$/, /^\/blogs\/[^/]+$/, /^\/press-releases\/[^/]+$/];

export function HubSpotLoader() {
  const pathname = usePathname();
  if (SKIP_PATTERNS.some(p => p.test(pathname))) return null;
  return (
    <Script
      id="hs-script-loader"
      strategy="lazyOnload"
      src="//js.hs-scripts.com/22449271.js"
    />
  );
}
