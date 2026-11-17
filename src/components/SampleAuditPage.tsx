import React from 'react';
import { FileCheck2, MapPin, Smartphone, Users, BarChart3, ArrowUpRight, ArrowRight, Info } from 'lucide-react';
import analyticsImage from '@/src/assets/images/hospitality_analytics_tablet_1793612003100.jpg';
import { PageRoute, getRouteHref } from '../utils/routing';
import { trackAuditCtaClick } from '../utils/analytics';

interface SampleAuditPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const SampleAuditPage: React.FC<SampleAuditPageProps> = ({ onNavigate }) => {
  const auditPillars = [
    {
      number: '01',
      area: 'Local SEO & Google Business Profile',
      icon: MapPin,
      observation:
        'Primary category is set only to "Coffee Shop" while weekend brunch and catering keywords are missing from the business description and service attributes. Public holiday hours are not updated consistently.',
      recommendation:
        'Update primary and secondary Google Business categories ("Café", "Breakfast Restaurant"), add dietary and outdoor seating attributes, refresh seasonal photography, and align Name, Address, and Phone details across Australian directories.',
      measurement:
        'Track Google Business Profile direction requests, website clicks, and phone taps month-over-month.',
    },
    {
      number: '02',
      area: 'Website Usability & Mobile Menu Flow',
      icon: Smartphone,
      observation:
        'The current breakfast and lunch menus are uploaded as multi-megabyte PDF downloads that require pinch-zooming on mobile screens. The "Book a Table" button sits below the hero image on smartphones.',
      recommendation:
        'Convert menus into fast, accessible HTML pages with clear dietary tags (V, VG, GF), and place one unmistakable "Book a Table" or "Enquire" action near the top of mobile and desktop views.',
      measurement:
        'Measure mobile page load times alongside GA4 `menu_view` and `booking_click` events.',
    },
    {
      number: '03',
      area: 'Customer Retention & Repeat Visits',
      icon: Users,
      observation:
        'Regular weekday commuters and weekend brunch guests visit often, yet there is no opt-in pathway on the website or table QR cards to keep guests informed about seasonal menu launches or quiet-day specials.',
      recommendation:
        'Introduce a simple, permission-based email sign-up for seasonal menu previews and coffee bean subscriptions, paired with a polite post-visit feedback prompt.',
      measurement:
        'Monitor new subscriber opt-ins per month, email open rates, and referral visits tagged with UTM parameters.',
    },
    {
      number: '04',
      area: 'Marketing Analytics & GA4 Configuration',
      icon: BarChart3,
      observation:
        'Basic page views are recorded, but key hospitality interactions—such as clicks on the booking link, phone number, or enquiry form—are not configured as events or Key Events in Google Analytics 4.',
      recommendation:
        'Configure Google Tag Manager and GA4 custom event triggers for high-intent user actions and add consistent UTM links to Instagram bio links and QR codes.',
      measurement:
        'Review monthly conversion paths in GA4 to identify which channels lead to bookings and enquiries.',
    },
  ];

  const roadmapPhases = [
    {
      phase: 'Phase 1 · Weeks 1–2',
      title: 'Foundation & Measurement Fixes',
      tasks: [
        'Verify GA4 page-view and key CTA event tracking via Tag Assistant',
        'Update Google Business Profile hours, categories, and dietary attributes',
        'Ensure primary navigation and contact details are clear on mobile',
      ],
    },
    {
      phase: 'Phase 2 · Weeks 3–6',
      title: 'Local SEO & Website Experience',
      tasks: [
        'Replace downloadable PDF menus with accessible HTML menu sections',
        'Add natural Adelaide suburb and precinct relevance to key landing copy',
        'Standardise UTM tracking across social bios and printed QR touchpoints',
      ],
    },
    {
      phase: 'Phase 3 · Weeks 7–12',
      title: 'Customer Retention & Review Cycle',
      tasks: [
        'Launch permission-based email sign-up for seasonal dining updates',
        'Establish a consistent, polite response workflow for guest reviews',
        'Evaluate 90-day GA4 trends to guide the next quarter’s priorities',
      ],
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      <section className="py-14 lg:py-20 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-semibold tracking-widest uppercase text-[#345C49]">
                Sample Deliverable · Illustrative Example
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0D1929] tracking-tight leading-[1.15] text-balance">
                Sample Digital Marketing Audit: Independent Adelaide Café.
              </h1>
              <p className="text-base sm:text-lg text-[#0D1929]/80 leading-relaxed">
                To demonstrate what a hospitality marketing audit in Adelaide looks like in practice, this illustrative example outlines how AHDP applies the <strong>Audit → Improve → Measure</strong> framework to an independent neighbourhood café.
              </p>

              <div className="p-4 rounded-lg bg-[#F7F4EC] border border-[#E8E4DA] flex items-start gap-3 text-xs sm:text-sm text-[#0D1929]/80">
                <Info className="w-4 h-4 text-[#345C49] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong>Illustrative Scenario:</strong> The profile below is a fictional example created for educational demonstration. No client results or performance claims are implied.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-[#E8E4DA] shadow-md bg-[#FFFFFF]">
                <img
                  src={analyticsImage}
                  alt="Digital analytics overview on tablet beside flat white coffee on wooden table"
                  className="w-full h-64 object-cover"
                  loading="eager"
                />
                <div className="p-5 bg-[#F7F4EC] border-t border-[#E8E4DA] space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#345C49] uppercase">
                    <span>Example Venue Profile</span>
                    <span>Norwood, SA</span>
                  </div>
                  <div className="font-serif text-lg font-bold text-[#0D1929]">
                    “Eastern Suburbs Neighbourhood Café” (Sample)
                  </div>
                  <p className="text-xs text-[#0D1929]/75">
                    60-seat daytime café offering specialty coffee, all-day brunch, and weekend takeaway in inner-east Adelaide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Area Diagnostic Breakdown */}
          <div className="mb-14">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D1929] mb-6">
              Four-Area Audit Findings &amp; Measurement Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {auditPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article
                    key={pillar.number}
                    className="bg-[#FFFFFF] rounded-xl border border-[#E8E4DA] p-6 shadow-sm space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-md bg-[#F7F4EC] border border-[#E8E4DA] text-[#345C49] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-[#345C49] font-semibold">
                          Area {pillar.number}
                        </div>
                        <h3 className="font-serif text-xl font-bold text-[#0D1929]">
                          {pillar.area}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm text-[#0D1929]/80">
                      <div className="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#E8E4DA]">
                        <div className="text-xs font-mono uppercase tracking-wider text-[#0D1929]/60 mb-1">
                          1. Audit Observation
                        </div>
                        <p className="leading-relaxed">{pillar.observation}</p>
                      </div>

                      <div className="p-3.5 rounded-lg bg-[#F7F4EC] border border-[#E8E4DA]">
                        <div className="text-xs font-mono uppercase tracking-wider text-[#345C49] mb-1">
                          2. Priority Improvement
                        </div>
                        <p className="leading-relaxed">{pillar.recommendation}</p>
                      </div>

                      <div className="p-3.5 rounded-lg bg-[#FFFFFF] border border-[#E8E4DA]">
                        <div className="text-xs font-mono uppercase tracking-wider text-[#0D1929]/60 mb-1">
                          3. How We Measure
                        </div>
                        <p className="leading-relaxed">{pillar.measurement}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* 90-Day Roadmap */}
          <div className="mb-14">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D1929] mb-6">
              Illustrative 90-Day Implementation Sequence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roadmapPhases.map((phase) => (
                <div
                  key={phase.phase}
                  className="bg-[#FFFFFF] rounded-xl border border-[#E8E4DA] p-6 shadow-sm"
                >
                  <div className="text-xs font-mono uppercase tracking-wider text-[#345C49] mb-2">
                    {phase.phase}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0D1929] mb-4">
                    {phase.title}
                  </h3>
                  <ul className="space-y-2.5 text-sm text-[#0D1929]/80">
                    {phase.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2">
                        <FileCheck2 className="w-4 h-4 text-[#345C49] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Band */}
          <div className="bg-[#0D1929] text-[#FAF8F5] rounded-xl p-7 sm:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5]">
                Want a structured audit tailored to your Adelaide venue?
              </h2>
              <p className="text-sm text-[#FAF8F5]/80">
                Submit your venue details via our Contact page or explore our full range of café and restaurant marketing services.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a
                href={getRouteHref('services')}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('services');
                }}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] border border-[#FAF8F5]/30 hover:bg-[#FAF8F5]/10 rounded-md transition-colors"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={getRouteHref('contact')}
                onClick={(e) => {
                  e.preventDefault();
                  trackAuditCtaClick('sample_audit_page');
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
