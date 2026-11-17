import React from 'react';
import {
  MapPin,
  Users,
  BarChart3,
  ArrowRight,
  ArrowUpRight,
  FileSearch,
  BookOpen,
} from 'lucide-react';
import { Hero } from './Hero';
import { PageRoute, ROUTES } from '../utils/routing';
import { trackAuditCtaClick } from '../utils/analytics';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const focusTopics = [
    {
      number: '01',
      label: 'Local Search Visibility',
      title: 'Restaurant SEO & Google Business Profile Optimisation',
      icon: MapPin,
      summary:
        'When local diners search for coffee, lunch, or dinner nearby, clear search signals help your venue stand out. We align your Google Business Profile, suburb-relevant restaurant SEO, and mobile-friendly menus so Adelaide customers can find opening hours, directions, and booking links effortlessly.',
      points: [
        'Accurate Google Business Profile categories, hours, and attributes',
        'Readable web menus and suburb relevance for Adelaide diners',
        'Consistent venue details across maps and local directories',
      ],
    },
    {
      number: '02',
      label: 'Customer Retention',
      title: 'Building Repeat Guest Visits & Direct Relationships',
      icon: Users,
      summary:
        'Encouraging existing guests to return helps smooth out quiet midweek services without relying exclusively on new foot traffic. We help cafés and restaurants create simple, permission-based retention touchpoints that keep your seasonal menus and events top of mind.',
      points: [
        'Simple guest sign-ups via bookings, websites, and table cards',
        'Seasonal menu previews and midweek dining invitations',
        'Polite post-visit feedback pathways for continuous improvement',
      ],
    },
    {
      number: '03',
      label: 'Marketing Performance Measurement',
      title: 'Practical Analytics & Marketing ROI Clarity',
      icon: BarChart3,
      summary:
        'Effective marketing relies on measuring actions that genuinely matter to your venue—not vanity social impressions. Using structured Google Analytics 4 tracking, we connect website visits, menu views, and enquiry clicks so owners can assess marketing ROI and refine priorities with confidence.',
      points: [
        'Clear Google Analytics 4 event tracking on bookings and enquiries',
        'Consistent UTM tagging for social profiles, QR codes, and emails',
        'Plain-English reporting focused on trends and next actions',
      ],
    },
  ];

  const approachSteps = [
    {
      step: '01. Audit',
      description:
        'Review your Google Business Profile, mobile website speed, menu clarity, and analytics configuration to uncover high-impact gaps.',
    },
    {
      step: '02. Improve',
      description:
        'Prioritise realistic updates across restaurant SEO, website user experience, and customer retention workflows tailored to your team.',
    },
    {
      step: '03. Measure',
      description:
        'Monitor meaningful guest actions in GA4—such as menu views, booking clicks, and audit enquiries—to evaluate marketing ROI over time.',
    },
  ];

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, location: string) => {
    e.preventDefault();
    trackAuditCtaClick(location);
    onNavigate('contact');
  };

  return (
    <>
      <Hero onNavigate={onNavigate} />

      {/* Three Customer-Focused Topics */}
      <section className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold tracking-widest uppercase text-[#345C49] mb-2">
                Three Core Priorities
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D1929] tracking-tight text-balance">
                Helping Adelaide Venues Improve Visibility, Retention, and Marketing ROI.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#0D1929]/75 leading-relaxed">
                Our consultancy focuses on three practical pillars designed around how independent cafés and restaurants attract local diners, welcome them back, and evaluate marketing performance.
              </p>
            </div>
            <a
              href={ROUTES.services.hash}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('services');
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#345C49] hover:text-[#0D1929] transition-colors whitespace-nowrap shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#345C49] rounded-xs"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {focusTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <article
                  key={topic.number}
                  className="bg-[#FFFFFF] rounded-xl border border-[#E8E4DA] p-6 sm:p-7 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#345C49]">
                        {topic.number} · {topic.label}
                      </span>
                      <div className="w-9 h-9 rounded-md bg-[#F7F4EC] border border-[#E8E4DA] text-[#345C49] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0D1929] mb-3 leading-snug">
                      {topic.title}
                    </h3>

                    <p className="text-sm text-[#0D1929]/80 leading-relaxed mb-5">
                      {topic.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8E4DA] space-y-4">
                    <ul className="space-y-2 text-xs text-[#0D1929]/80">
                      {topic.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="text-[#345C49] font-bold" aria-hidden="true">·</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={ROUTES.services.hash}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('services');
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D1929] hover:text-[#345C49] transition-colors pt-1"
                    >
                      <span>Explore service details</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach Overview: Audit -> Improve -> Measure */}
      <section className="py-16 lg:py-20 bg-[#F7F4EC] border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold tracking-widest uppercase text-[#345C49] mb-2">
                How We Work
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D1929] tracking-tight">
                Our Audit → Improve → Measure Approach
              </h2>
            </div>
            <a
              href={ROUTES.about.hash}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('about');
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#345C49] hover:text-[#0D1929] transition-colors whitespace-nowrap shrink-0"
            >
              <span>About AHDP</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approachSteps.map((item) => (
              <div
                key={item.step}
                className="bg-[#FFFFFF] rounded-xl border border-[#E8E4DA] p-6 shadow-sm"
              >
                <h3 className="font-serif text-xl font-bold text-[#0D1929] mb-2">
                  {item.step}
                </h3>
                <p className="text-sm text-[#0D1929]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Audit & Insights Preview + Primary CTA */}
      <section className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FFFFFF] rounded-xl border border-[#E8E4DA] p-7 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#345C49] mb-3">
                  <FileSearch className="w-4 h-4" aria-hidden="true" />
                  <span>Example Deliverable</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#0D1929] mb-3">
                  Explore a Sample Digital Marketing Audit
                </h2>
                <p className="text-sm text-[#0D1929]/75 leading-relaxed mb-6">
                  See how AHDP reviews a local Adelaide venue across Google Business Profile visibility, mobile menu accessibility, customer retention touchpoints, and Google Analytics 4 event tracking.
                </p>
              </div>
              <div>
                <a
                  href={ROUTES['sample-audit'].hash}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('sample-audit');
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#345C49] hover:text-[#0D1929] transition-colors"
                >
                  <span>View Sample Audit</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-xl border border-[#E8E4DA] p-7 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#345C49] mb-3">
                  <BookOpen className="w-4 h-4" aria-hidden="true" />
                  <span>Practical Guides</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#0D1929] mb-3">
                  Hospitality Marketing &amp; Analytics Insights
                </h2>
                <p className="text-sm text-[#0D1929]/75 leading-relaxed mb-6">
                  Read concise guides covering café marketing in Adelaide, restaurant SEO checklists, mobile menu UX, and measuring customer retention and marketing ROI.
                </p>
              </div>
              <div>
                <a
                  href={ROUTES.insights.hash}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('insights');
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#345C49] hover:text-[#0D1929] transition-colors"
                >
                  <span>Read Insights</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Closing Primary CTA Strip */}
          <div className="mt-12 bg-[#0D1929] text-[#FAF8F5] rounded-xl p-7 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-[#84B39A]">
                Start With Clarity
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5]">
                Ready to review your café or restaurant’s digital performance?
              </h2>
              <p className="text-sm text-[#FAF8F5]/80">
                Request a Digital Audit to evaluate your venue’s local search visibility, customer retention workflows, and marketing performance measurement.
              </p>
            </div>
            <a
              href={ROUTES.contact.hash}
              onClick={(e) => handleCtaClick(e, 'home_footer_band')}
              data-cta="request-digital-audit"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-[#0D1929] bg-[#FAF8F5] hover:bg-[#EFECE3] rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>Request a Digital Audit</span>
              <ArrowUpRight className="w-4 h-4 text-[#345C49]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
