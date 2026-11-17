import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { SampleAuditPage } from './components/SampleAuditPage';
import { InsightsPage } from './components/InsightsPage';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import {
  PageRoute,
  parsePathnameRoute,
  getRouteHref,
  applyRouteMetadata,
} from './utils/routing';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() =>
    typeof window !== 'undefined'
      ? parsePathnameRoute(window.location.pathname, undefined, window.location.hash)
      : 'home'
  );
  const [preFillFocus, setPreFillFocus] = useState<string | null>(null);

  const navigateTo = useCallback(
    (route: PageRoute) => {
      const targetHref = getRouteHref(route);
      const currentPathNormalized = window.location.pathname.replace(/\/+$/, '') || '/';
      const targetPathNormalized = targetHref.replace(/\/+$/, '') || '/';

      // Update <title> and meta description synchronously BEFORE pushState so GTM's
      // History Change trigger reads the destination page's metadata immediately.
      applyRouteMetadata(route);

      if (currentPathNormalized !== targetPathNormalized) {
        window.history.pushState(null, '', targetHref);
      }

      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    []
  );

  // Sync metadata on initial load and upgrade legacy #/ URLs if present
  useEffect(() => {
    const initialRoute = parsePathnameRoute(
      window.location.pathname,
      undefined,
      window.location.hash
    );
    applyRouteMetadata(initialRoute);

    if (window.location.hash.startsWith('#/')) {
      window.history.replaceState(null, '', getRouteHref(initialRoute));
    }
  }, []);

  // Listen to browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const nextRoute = parsePathnameRoute(
        window.location.pathname,
        undefined,
        window.location.hash
      );
      applyRouteMetadata(nextRoute);
      setCurrentRoute(nextRoute);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSkipToMain = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mainEl = document.getElementById('main-content');
    if (mainEl) {
      mainEl.focus({ preventScroll: true });
      mainEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForAudit = (serviceName: string) => {
    setPreFillFocus(serviceName);
    navigateTo('contact');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0D1929] flex flex-col font-sans selection:bg-[#345C49]/20">
      {/* Keyboard Skip Link for Accessibility */}
      <a
        href="#main-content"
        onClick={handleSkipToMain}
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[#0D1929] focus:text-[#FAF8F5] focus:rounded-md focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar currentRoute={currentRoute} onNavigate={navigateTo} />

      <main id="main-content" className="flex-1" tabIndex={-1}>
        {currentRoute === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentRoute === 'about' && <AboutUs onNavigate={navigateTo} />}
        {currentRoute === 'services' && (
          <Services
            onNavigate={navigateTo}
            onSelectServiceForAudit={handleSelectServiceForAudit}
          />
        )}
        {currentRoute === 'sample-audit' && <SampleAuditPage onNavigate={navigateTo} />}
        {currentRoute === 'insights' && <InsightsPage onNavigate={navigateTo} />}
        {currentRoute === 'contact' && <ContactSection preFillFocus={preFillFocus} />}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
