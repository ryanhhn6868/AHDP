import React from 'react';
import { ArrowUpRight, CheckCircle2, ArrowRight } from 'lucide-react';
import heroImage from '@/src/assets/images/hero_adelaide_hospitality_1793612001294.jpg';
import { PageRoute, getRouteHref } from '../utils/routing';
import { trackAuditCtaClick } from '../utils/analytics';

interface HeroProps {
  onNavigate: (route: PageRoute) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleRequestAudit = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackAuditCtaClick('hero');
    onNavigate('contact');
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kicker (Unboxed text, no pills) */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#345C49] mb-4">
          <span>Adelaide Hospitality Digital Partners</span>
          <span aria-hidden="true" className="text-[#345C49]/50">·</span>
          <span>South Australia</span>
        </div>

        {/* 2-Column Split: Value Proposition & Hospitality Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-sm sm:text-base font-semibold text-[#345C49] tracking-wide">
              Smarter Marketing. Better Decisions. Sustainable Growth.
            </p>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#0D1929] tracking-tight leading-[1.15] text-balance">
              Digital Marketing &amp; Analytics for Adelaide Cafés and Restaurants
            </h1>

            <p className="text-base sm:text-lg text-[#0D1929]/80 leading-relaxed max-w-2xl">
              Helping independent venues across Adelaide strengthen local search visibility, build lasting customer retention, and measure marketing ROI with clarity—so every marketing decision supports steady, sustainable trade.
            </p>

            {/* Key Value Pillars */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-[#0D1929]/80 font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#345C49] shrink-0" aria-hidden="true" />
                <span>Restaurant SEO &amp; Google Business Profile</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#345C49] shrink-0" aria-hidden="true" />
                <span>Customer Retention &amp; Repeat Visits</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#345C49] shrink-0" aria-hidden="true" />
                <span>Mobile Menu &amp; Direct Booking Clarity</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#345C49] shrink-0" aria-hidden="true" />
                <span>GA4 Analytics &amp; Marketing ROI Tracking</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href={getRouteHref('contact')}
                onClick={handleRequestAudit}
                data-cta="request-digital-audit"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#0D1929] hover:bg-[#182A44] rounded-md transition-colors shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345C49] group whitespace-nowrap shrink-0"
              >
                <span>Request a Digital Audit</span>
                <ArrowUpRight className="w-4 h-4 text-[#84B39A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </a>

              <a
                href={getRouteHref('services')}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('services');
                }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#345C49] hover:text-[#0D1929] py-2 border-b border-transparent hover:border-[#345C49] transition-colors whitespace-nowrap shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#345C49]"
              >
                <span>Explore our services</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            <p className="text-xs text-[#0D1929]/65 pt-1 max-w-xl">
              Start with a focused review of your Google Business Profile, website usability, and analytics setup—tailored for Adelaide hospitality teams.
            </p>
          </div>

          {/* Right Column: Hero Photograph & Operational Scope Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-[#E8E4DA] shadow-xl bg-[#F7F4EC]">
              <img
                src={heroImage}
                alt="Independent Adelaide café interior with stone walls, timber counter, and barista preparing coffee"
                className="w-full h-80 sm:h-96 object-cover"
                loading="eager"
              />
              <div className="p-5 bg-[#F7F4EC] border-t border-[#E8E4DA]">
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <span className="font-serif font-bold text-[#0D1929] text-base">
                    Adelaide Hospitality Focus
                  </span>
                  <span className="text-xs font-semibold text-[#345C49]">
                    Independent Sector
                  </span>
                </div>
                <p className="text-xs text-[#0D1929]/75 leading-relaxed">
                  Supporting independent cafés, bakeries, wine bars, and restaurants across Adelaide CBD, North Adelaide, Norwood, Glenelg, Unley, and the Adelaide Hills.
                </p>
                <div className="mt-4 pt-3 border-t border-[#E8E4DA] flex items-center justify-between text-xs text-[#0D1929]/65 font-mono">
                  <span>Audit · Improve · Measure</span>
                  <span>Adelaide, SA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
