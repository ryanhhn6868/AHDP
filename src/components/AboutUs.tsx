import React from 'react';
import { ShieldCheck, Compass, BarChart2, ArrowUpRight, ArrowRight } from 'lucide-react';
import diningImage from '@/src/assets/images/adelaide_dining_atmosphere_1793612001176.jpg';
import analyticsImage from '@/src/assets/images/hospitality_analytics_tablet_1793612003100.jpg';
import exteriorImage from '@/src/assets/images/adelaide_cafe_exterior_1793612002051.jpg';
import { PageRoute, ROUTES } from '../utils/routing';
import { trackAuditCtaClick } from '../utils/analytics';

interface AboutUsProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onNavigate }) => {
  const approach = [
    {
      phase: '01. Audit',
      title: 'Diagnose Visibility, UX & Tracking',
      description:
        'Every engagement starts with an honest review of how diners actually experience your venue online—checking Google Business Profile accuracy, mobile menu readability, booking pathways, and Google Analytics 4 setup.',
      focusPoints: [
        'Local search and Adelaide suburb map presence',
        'Mobile menu speed and booking link clarity',
        'GA4 page-view and key action tracking readiness',
      ],
    },
    {
      phase: '02. Improve',
      title: 'Prioritise Practical Hospitality Fixes',
      description:
        'Rather than overwhelming venue owners with complex jargon, we focus on clear, manageable improvements across restaurant SEO in Adelaide, website usability, and customer retention workflows.',
      focusPoints: [
        'Clean Google Business Profile categories, hours, and photos',
        'Accessible HTML menus and direct booking calls-to-action',
        'Thoughtful email or SMS follow-ups for repeat local visits',
      ],
    },
    {
      phase: '03. Measure',
      title: 'Track Real Decisions Over Vanity Metrics',
      description:
        'We configure straightforward marketing analytics so operators can see which digital channels drive meaningful diner actions—such as table booking clicks, phone enquiries, and audit requests—rather than surface-level impressions.',
      focusPoints: [
        'Consistent event tracking across key CTAs and links',
        'Clear monthly performance summaries in plain language',
        'Ongoing adjustments based on seasonal Adelaide trade',
      ],
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* Page Introduction */}
      <section className="py-14 lg:py-20 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#345C49] mb-3">
              About Us · Adelaide Hospitality Digital Partners
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0D1929] tracking-tight leading-[1.15] text-balance">
              Practical Hospitality Marketing in Adelaide, Grounded in Clear Data.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#0D1929]/80 leading-relaxed">
              Adelaide Hospitality Digital Partners (AHDP) is a specialist digital marketing and marketing analytics consultancy dedicated to independent cafés, bakeries, wine bars, and restaurants across Greater Adelaide.
            </p>
          </div>

          {/* 2-Column Mission & Visual Bento */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-xl overflow-hidden border border-[#E8E4DA] shadow-sm bg-[#FFFFFF]">
                <img
                  src={diningImage}
                  alt="Adelaide bistro and wine bar dining room with warm ambient lighting"
                  className="w-full h-64 sm:h-72 object-cover"
                  loading="eager"
                />
                <div className="p-3 bg-[#F7F4EC] text-xs text-[#0D1929]/75 border-t border-[#E8E4DA]">
                  Supporting independent hospitality venues across Adelaide and South Australia.
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#E8E4DA] shadow-sm">
                <img
                  src={exteriorImage}
                  alt="Historic sandstone café storefront with outdoor seating in Adelaide"
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
              </div>

              <div className="rounded-xl overflow-hidden border border-[#E8E4DA] shadow-sm">
                <img
                  src={analyticsImage}
                  alt="Hospitality analytics dashboard displayed on tablet beside coffee cups"
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D1929] mb-3">
                  Our Mission
                </h2>
                <p className="text-sm sm:text-base text-[#0D1929]/80 leading-relaxed">
                  Our mission is straightforward: help independent Adelaide hospitality operators make smarter marketing decisions and build sustainable, repeat local business without unnecessary complexity or guesswork.
                </p>
                <p className="mt-3 text-sm sm:text-base text-[#0D1929]/80 leading-relaxed">
                  Generalist agencies often treat restaurants like online retail stores. We focus specifically on how local diners choose where to eat or grab morning coffee—combining café marketing Adelaide know-how with clear measurement.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-[#F7F4EC] border border-[#E8E4DA]">
                  <div className="p-2 rounded-md bg-[#FAF8F5] text-[#345C49] border border-[#E8E4DA] shrink-0">
                    <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#0D1929]">
                      Independent Owner Advocacy
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0D1929]/75 mt-1 leading-relaxed">
                      We prioritise direct customer relationships, transparent reporting, and venue-owned digital assets such as your own website, Google Business Profile, and analytics properties.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-[#F7F4EC] border border-[#E8E4DA]">
                  <div className="p-2 rounded-md bg-[#FAF8F5] text-[#345C49] border border-[#E8E4DA] shrink-0">
                    <Compass className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#0D1929]">
                      Local Adelaide Context
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0D1929]/75 mt-1 leading-relaxed">
                      From morning coffee trade in the CBD and Norwood to weekend bookings in Glenelg or the Adelaide Hills, recommendations reflect local seasonal rhythms and suburb competition.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-[#F7F4EC] border border-[#E8E4DA]">
                  <div className="p-2 rounded-md bg-[#FAF8F5] text-[#345C49] border border-[#E8E4DA] shrink-0">
                    <BarChart2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#0D1929]">
                      Clarity Before Complexity
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0D1929]/75 mt-1 leading-relaxed">
                      Every recommendation links directly to something a time-poor café or restaurant manager can understand, action, and verify in plain language.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit -> Improve -> Measure Approach */}
      <section className="py-16 lg:py-20 bg-[#F7F4EC] border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#345C49] mb-2">
              Our Methodology
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D1929] tracking-tight">
              The Audit → Improve → Measure Approach
            </h2>
            <p className="mt-3 text-base text-[#0D1929]/75 leading-relaxed">
              Smarter Marketing. Better Decisions. Sustainable Growth. Every project follows a clear three-stage cycle so hospitality operators always know what is being improved and why.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approach.map((item) => (
              <article
                key={item.phase}
                className="bg-[#FFFFFF] rounded-xl border border-[#E8E4DA] p-6 sm:p-7 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-sm font-bold text-[#345C49] mb-2">
                    {item.phase}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0D1929] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#0D1929]/75 leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E4DA]">
                  <ul className="space-y-2 text-xs text-[#0D1929]/80">
                    {item.focusPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="text-[#345C49] font-bold" aria-hidden="true">·</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Internal Links & CTA */}
          <div className="mt-12 bg-[#0D1929] text-[#FAF8F5] rounded-xl p-7 sm:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl space-y-2">
              <h2 className="font-serif text-2xl font-bold text-[#FAF8F5]">
                See how our approach works in practice.
              </h2>
              <p className="text-sm text-[#FAF8F5]/80">
                Inspect an illustrative Sample Audit for a local Adelaide café or request a digital audit for your own venue.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a
                href={ROUTES['sample-audit'].hash}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('sample-audit');
                }}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] border border-[#FAF8F5]/30 hover:bg-[#FAF8F5]/10 rounded-md transition-colors"
              >
                <span>View Sample Audit</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={ROUTES.contact.hash}
                onClick={(e) => {
                  e.preventDefault();
                  trackAuditCtaClick('about_page');
                  onNavigate('contact');
                }}
                data-cta="request-digital-audit"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#345C49] hover:bg-[#2E533F] rounded-md transition-colors"
              >
                <span>Request a Digital Audit</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
