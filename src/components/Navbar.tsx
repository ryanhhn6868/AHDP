import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_ORDER, PageRoute, ROUTES, getRouteHref } from '../utils/routing';
import { trackAuditCtaClick } from '../utils/analytics';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: PageRoute) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(route);
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    trackAuditCtaClick('navbar');
    onNavigate('contact');
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 lg:gap-8 h-20">
          {/* Zone 1: Brand Wordmark */}
          <a
            href={getRouteHref('home')}
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center gap-3 font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#0D1929] whitespace-nowrap shrink-0 hover:text-[#345C49] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345C49] rounded-sm"
            aria-label="Adelaide Hospitality Digital Partners Home"
          >
            <span className="w-9 h-9 rounded-md bg-[#0D1929] text-[#FAF8F5] flex items-center justify-center font-display text-sm font-semibold tracking-wider">
              AH
            </span>
            <span className="tracking-tight">AHDP</span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#0D1929]/80" aria-label="Primary Navigation">
            {NAV_ORDER.map((routeKey) => {
              const routeInfo = ROUTES[routeKey];
              const isActive = currentRoute === routeKey;
              return (
                <a
                  key={routeKey}
                  href={getRouteHref(routeKey)}
                  onClick={(e) => handleLinkClick(e, routeKey)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`transition-colors whitespace-nowrap shrink-0 py-1.5 border-b-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#345C49] rounded-xs ${
                    isActive
                      ? 'text-[#0D1929] font-semibold border-[#345C49]'
                      : 'border-transparent hover:text-[#345C49] hover:border-[#345C49]/50'
                  }`}
                >
                  {routeInfo.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={getRouteHref('contact')}
              onClick={(e) => {
                e.preventDefault();
                handleCtaClick();
              }}
              data-cta="request-digital-audit"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#0D1929] hover:bg-[#182A44] rounded-md transition-colors shadow-sm whitespace-nowrap shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345C49]"
            >
              <span>Request a Digital Audit</span>
              <ArrowUpRight className="w-4 h-4 text-[#84B39A]" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md text-[#0D1929] hover:bg-[#EFECE3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#345C49] cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E8E4DA] bg-[#FAF8F5] px-4 pt-3 pb-6 shadow-lg">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {NAV_ORDER.map((routeKey) => {
              const routeInfo = ROUTES[routeKey];
              const isActive = currentRoute === routeKey;
              return (
                <a
                  key={routeKey}
                  href={getRouteHref(routeKey)}
                  onClick={(e) => handleLinkClick(e, routeKey)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-2.5 text-base font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-[#0D1929] text-[#FAF8F5]'
                      : 'text-[#0D1929] hover:bg-[#EFECE3]'
                  }`}
                >
                  {routeInfo.label}
                </a>
              );
            })}
            <div className="pt-3">
              <a
                href={getRouteHref('contact')}
                onClick={(e) => {
                  e.preventDefault();
                  handleCtaClick();
                }}
                data-cta="request-digital-audit"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#0D1929] hover:bg-[#182A44] rounded-md transition-colors shadow-sm"
              >
                <span>Request a Digital Audit</span>
                <ArrowUpRight className="w-4 h-4 text-[#84B39A]" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
