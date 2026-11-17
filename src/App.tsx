import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { SampleAuditPage } from './components/SampleAuditPage';
import { InsightsPage } from './components/InsightsPage';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PageRoute, ROUTES, parseHashRoute, getRouteHash } from './utils/routing';
import { trackPageView } from './utils/analytics';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() =>
    typeof window !== 'undefined' ? parseHashRoute(window.location.hash) : 'home'
  );
  const [preFillFocus, setPreFillFocus] = useState<string | null>(null);

  const navigateTo = useCallback((route: PageRoute) => {
    const targetHash = getRouteHash(route);
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    } else {
      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Listen to browser back/forward and manual hash edits / direct refreshes
  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = parseHashRoute(window.location.hash);
      setCurrentRoute(nextRoute);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update SEO document title, meta description, and trigger GA4/GTM page_view on route change
  useEffect(() => {
    const meta = ROUTES[currentRoute];
    document.title = meta.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', meta.description);
    }

    trackPageView(meta.title, meta.virtualPath);
  }, [currentRoute]);

  const handleSelectServiceForAudit = (serviceName: string) => {
    setPreFillFocus(serviceName);
    navigateTo('contact');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0D1929] flex flex-col font-sans selection:bg-[#345C49]/20">
      {/* Keyboard Skip Link for Accessibility */}
      <a
        href="#main-content"
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
