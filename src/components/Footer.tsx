import React from 'react';
import { ArrowUp } from 'lucide-react';
import { NAV_ORDER, PageRoute, ROUTES, getRouteHref } from '../utils/routing';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08101C] text-[#FAF8F5] border-t border-[#162032] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FAF8F5]/10">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded bg-[#FAF8F5] text-[#08101C] flex items-center justify-center font-display text-xs font-bold tracking-wider">
                AH
              </span>
              <span className="font-serif text-xl font-bold tracking-tight text-[#FAF8F5]">
                Adelaide Hospitality Digital Partners
              </span>
            </div>

            <p className="text-xs font-semibold text-[#84B39A] tracking-wider uppercase">
              Smarter Marketing. Better Decisions. Sustainable Growth.
            </p>

            <p className="text-xs text-[#FAF8F5]/75 max-w-sm leading-relaxed">
              Independent hospitality marketing Adelaide consultancy supporting local cafés, bistros, and restaurants with local SEO, customer retention, and practical marketing analytics.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#84B39A]">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/80">
              {NAV_ORDER.map((routeKey) => {
                const routeInfo = ROUTES[routeKey];
                return (
                  <li key={routeKey}>
                    <a
                      href={getRouteHref(routeKey)}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(routeKey);
                      }}
                      className="hover:text-[#FAF8F5] underline-offset-4 hover:underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#84B39A] rounded-xs"
                    >
                      {routeInfo.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Adelaide Office & Service Footprint */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#84B39A]">
              Adelaide Practice
            </div>
            <div className="space-y-1.5 text-xs text-[#FAF8F5]/80">
              <p className="font-semibold text-[#FAF8F5]">Adelaide Hospitality Digital Partners (AHDP)</p>
              <p>Adelaide, South Australia 5000</p>
              <p>Enquiries: hello@ahdp-adelaide.example</p>
              <p>Consultations: Mon – Fri, 9:00am – 5:00pm ACST</p>
            </div>
            <div className="pt-2 text-[11px] text-[#FAF8F5]/60 leading-relaxed">
              Focused on independent venues across Adelaide CBD, North Adelaide, Norwood, Unley, Glenelg, and the Adelaide Hills.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/60">
          <div>
            &copy; {new Date().getFullYear()} Adelaide Hospitality Digital Partners (AHDP). Educational assignment concept.
          </div>

          <div className="flex items-center gap-6">
            <span>Adelaide, South Australia</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#FAF8F5]/80 hover:text-[#FAF8F5] transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#84B39A] rounded-xs"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
