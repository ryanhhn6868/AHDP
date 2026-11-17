import React from 'react';
import { ClipboardCheck, MapPin, Users, BarChart3, Check, ArrowRight, ArrowUpRight } from 'lucide-react';
import { PageRoute, ROUTES } from '../utils/routing';
import { trackAuditCtaClick } from '../utils/analytics';

interface ServicesProps {
  onNavigate: (route: PageRoute) => void;
  onSelectServiceForAudit: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate, onSelectServiceForAudit }) => {
  const services = [
    {
      id: 'digital-marketing-audits',
      number: '01',
      title: 'Digital Marketing Audits',
      icon: ClipboardCheck,
      subtitle: 'Establish an objective baseline before spending time or budget on new campaigns.',
      description:
        'A structured review of your venue’s entire digital footprint. We evaluate how easily Adelaide diners can find your business, browse your menu on a mobile device, complete a table booking or enquiry, and how reliably your website measures those interactions.',
      deliverables: [
        'Local search and Google Business Profile completeness check',
        'Mobile website usability, page speed, and menu accessibility review',
        'Direct table booking and takeaway journey friction check',
        'Google Analytics 4 and conversion event readiness review',
      ],
      idealFor: 'Independent cafés and restaurants wanting clarity on where to focus first.',
    },
    {
      id: 'local-seo',
      number: '02',
      title: 'Local SEO',
      icon: MapPin,
      subtitle: 'Strengthen your visibility for restaurant SEO Adelaide and café marketing Adelaide searches.',
      description:
        'When local residents or visitors search for coffee, brunch, or dinner nearby, accurate and well-structured local signals help your venue stand out. We align your Google Business Profile, on-page suburb context, and structured hospitality schema without manipulative tactics.',
      deliverables: [
        'Google Business Profile category, attribute, and opening-hours alignment',
        'Natural on-page optimisation for Adelaide precinct and cuisine searches',
        'HTML-first digital menu structure to replace slow or unreadable PDFs',
        'Consistent Name, Address, and Phone (NAP) details across key directories',
      ],
      idealFor: 'Neighbourhood cafés, suburban bistros, and CBD dining venues seeking local foot traffic.',
    },
    {
      id: 'customer-retention',
      number: '03',
      title: 'Customer Retention',
      icon: Users,
      subtitle: 'Turn first-time diners into repeat local regulars through thoughtful post-visit communication.',
      description:
        'Encouraging an existing local guest to return is typically far more sustainable than constantly trying to reach first-time diners. We help independent venues build ethical, permission-based restaurant customer retention workflows that support midweek trade and seasonal menus.',
      deliverables: [
        'Simple guest opt-in pathways via Wi-Fi, bookings, or website sign-up',
        'Seasonal menu updates, wine dinner invitations, and event reminders',
        'Post-visit feedback prompts to learn from guests privately',
        'Australian Spam Act and privacy-conscious list management',
      ],
      idealFor: 'Cafés with regular commuters, neighbourhood wine bars, and full-service restaurants.',
    },
    {
      id: 'marketing-analytics',
      number: '04',
      title: 'Marketing Analytics',
      icon: BarChart3,
      subtitle: 'Measure meaningful hospitality actions in Google Analytics 4 instead of chasing vanity numbers.',
      description:
        'Marketing analytics should answer practical operator questions: Which pages do diners view before booking? Which campaign brought visitors to your menu? We set up clean GA4 event tracking and readable summaries tailored to hospitality decisions.',
      deliverables: [
        'Google Analytics 4 (GA4) and Google Tag Manager configuration review',
        'Event tracking for key CTAs such as booking clicks and audit enquiries',
        'Consistent UTM campaign tagging for social posts, QR menus, and newsletters',
        'Plain-English reporting focused on goals, trends, and next actions',
      ],
      idealFor: 'Venue owners and marketing coordinators seeking clearer visibility into digital performance.',
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* Page Header */}
      <section className="py-14 lg:py-20 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#345C49] mb-3">
              Our Services · Hospitality Marketing Adelaide
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0D1929] tracking-tight leading-[1.15] text-balance">
              Restaurant &amp; Café Marketing Services Built for Clarity.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#0D1929]/80 leading-relaxed">
              Every service is designed around the practical realities of independent Adelaide hospitality—helping you connect Digital Marketing Audits, Local SEO, Customer Retention, and Marketing Analytics into one coherent system.
            </p>
          </div>

          {/* 4 Core Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="bg-[#FFFFFF] rounded-xl border border-[#E8E4DA] p-6 sm:p-8 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#F7F4EC] border border-[#E8E4DA] text-[#345C49] flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#345C49]">
                          Service {service.number}
                        </span>
                      </div>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D1929] mb-2">
                      {service.title}
                    </h2>

                    <p className="text-sm font-semibold text-[#345C49] mb-4">
                      {service.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-[#0D1929]/80 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="pt-5 border-t border-[#E8E4DA]">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-[#0D1929]/65 mb-3">
                        Key Focus Areas
                      </h3>
                      <ul className="space-y-2.5">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-[#0D1929]/85">
                            <span className="p-0.5 rounded-full bg-[#EAF1ED] text-[#345C49] shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5" aria-hidden="true" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#E8E4DA] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F7F4EC] p-4 rounded-lg">
                    <div className="text-xs text-[#0D1929]/75">
                      <span className="font-semibold text-[#0D1929] block">Best suited for:</span>
                      <span>{service.idealFor}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        trackAuditCtaClick(`service_${service.id}`);
                        onSelectServiceForAudit(service.title);
                      }}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#345C49] hover:bg-[#2E533F] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>Enquire About This</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom Cross-Navigation Banner */}
          <div className="mt-14 bg-[#0D1929] text-[#FAF8F5] rounded-xl p-7 sm:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-[#84B39A]">
                Start With a Diagnostic
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5]">
                Not sure which service matters most for your venue right now?
              </h2>
              <p className="text-sm text-[#FAF8F5]/80">
                Review our Sample Audit to see what a typical assessment covers, or submit a Digital Audit enquiry.
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
                  trackAuditCtaClick('services_footer_band');
                  onNavigate('contact');
                }}
                data-cta="request-digital-audit"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#0D1929] bg-[#FAF8F5] hover:bg-[#EFECE3] rounded-md transition-colors"
              >
                <span>Request a Digital Audit</span>
                <ArrowUpRight className="w-4 h-4 text-[#345C49]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
