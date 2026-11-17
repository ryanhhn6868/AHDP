import React, { useState } from 'react';
import { BookOpen, ArrowRight, ArrowUpRight, ChevronLeft } from 'lucide-react';
import exteriorImage from '@/src/assets/images/adelaide_cafe_exterior_1793612002051.jpg';
import diningImage from '@/src/assets/images/adelaide_dining_atmosphere_1793612001176.jpg';
import analyticsImage from '@/src/assets/images/hospitality_analytics_tablet_1793612003100.jpg';
import { PageRoute, getRouteHref } from '../utils/routing';
import { trackAuditCtaClick } from '../utils/analytics';

interface InsightsPageProps {
  onNavigate: (route: PageRoute) => void;
}

interface Article {
  id: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  takeaways: string[];
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate }) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const articles: Article[] = [
    {
      id: 'local-seo-adelaide-cafes',
      category: 'Local SEO',
      readTime: '4 min read',
      title: 'A Practical Local SEO Checklist for Independent Cafés in Adelaide',
      excerpt:
        'How accurate Google Business Profile categories, suburb keywords, and updated trading hours help nearby diners choose your café over chain competitors.',
      image: exteriorImage,
      imageAlt: 'Adelaide heritage sandstone café with outdoor tables and awning',
      paragraphs: [
        'For independent venues, café marketing in Adelaide often begins before a diner ever reaches your website. When someone searches for morning espresso in Norwood, brunch in Unley, or a quiet lunch spot in the CBD, Google Maps results frequently shape their shortlist within seconds.',
        'Strengthening restaurant SEO in Adelaide does not require complicated technical tricks. Start by ensuring your Google Business Profile lists accurate primary and secondary categories, clear outdoor seating or dietary attributes, and up-to-date public holiday hours.',
        'On your own website, write natural page headings and descriptions that reflect your cuisine, atmosphere, and Adelaide location. Consistent Name, Address, and Phone details across your website, Instagram bio, and Google listing build trust with both search engines and local diners.',
      ],
      takeaways: [
        'Keep weekday, weekend, and public holiday trading hours accurate in Google Business Profile.',
        'Include plain-text suburb and neighbourhood context naturally on your homepage and Contact page.',
        'Respond thoughtfully to genuine customer reviews to show active, attentive hospitality.',
      ],
    },
    {
      id: 'mobile-menu-ux-restaurant-marketing',
      category: 'Website UX',
      readTime: '3 min read',
      title: 'Why Slow PDF Menus Quietly Cost Adelaide Restaurants Mobile Bookings',
      excerpt:
        'Diners browsing on smartphones want fast answers on pricing, dietary options, and table availability—not heavy PDF downloads.',
      image: diningImage,
      imageAlt: 'Adelaide bistro dining room set for evening service',
      paragraphs: [
        'A common friction point in restaurant marketing in Adelaide is forcing smartphone visitors to download a large PDF file just to check lunch dishes or wine list prices. On mobile data or small screens, PDFs load slowly and require awkward pinching and zooming.',
        'Presenting menus as clean, responsive HTML web pages allows diners to scan dishes effortlessly, read dietary tags such as vegan or gluten-free options, and gives search engines readable text to understand what your kitchen offers.',
        'Pair your mobile menu with one clear call-to-action—such as "Book a Table" or "Request an Event Enquiry"—so interested diners can act immediately without hunting through nested navigation menus.',
      ],
      takeaways: [
        'Publish core breakfast, lunch, and dinner menus directly on web pages rather than PDFs alone.',
        'Highlight dietary labels and seasonal specials clearly for mobile scanners.',
        'Keep your booking or enquiry button visible and accessible from menu pages.',
      ],
    },
    {
      id: 'customer-retention-and-ga4-analytics',
      category: 'Retention & Analytics',
      readTime: '5 min read',
      title: 'Connecting Restaurant Customer Retention with Practical Marketing Analytics',
      excerpt:
        'Moving beyond social vanity metrics to track real booking clicks, repeat visit channels, and clear GA4 engagement signals.',
      image: analyticsImage,
      imageAlt: 'Hospitality analytics tablet on light oak desk next to flat white coffee',
      paragraphs: [
        'Many hospitality operators receive monthly reports filled with social media reach and post likes that have little connection to Tuesday night table covers. Effective marketing analytics should focus on actions that indicate genuine dining intent.',
        'By tracking Google Analytics 4 events such as page views, menu views, booking button clicks, and digital audit enquiries, a venue team can see which channels—whether local Google search, Instagram, or an email newsletter—actually guide guests toward visiting.',
        'Those insights naturally support restaurant customer retention. When you know which seasonal menu pages or wine-dinner announcements resonate most with subscribers, you can invite past guests back with relevant, welcome communications rather than generic discounts.',
      ],
      takeaways: [
        'Track meaningful user actions (CTA clicks, form enquiries, menu views) rather than impressions alone.',
        'Tag email newsletters and QR codes with consistent UTM parameters for clearer attribution.',
        'Use permission-based guest lists to share seasonal menu updates and quiet-night events.',
      ],
    },
  ];

  const activeArticle = articles.find((a) => a.id === selectedArticleId) || null;

  return (
    <div className="bg-[#FAF8F5]">
      <section className="py-14 lg:py-20 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeArticle ? (
            /* Full Article Reader View */
            <div className="max-w-3xl mx-auto">
              <button
                type="button"
                onClick={() => setSelectedArticleId(null)}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#345C49] hover:text-[#0D1929] mb-6 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                <span>Back to All Insights</span>
              </button>

              <article className="bg-[#FFFFFF] rounded-xl border border-[#E8E4DA] overflow-hidden shadow-sm">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.imageAlt}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="p-6 sm:p-10 space-y-6">
                  <div className="flex items-center gap-2 text-xs text-[#345C49] font-semibold uppercase tracking-wider">
                    <span>{activeArticle.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#0D1929]/60">{activeArticle.readTime}</span>
                  </div>

                  <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#0D1929] leading-tight text-balance">
                    {activeArticle.title}
                  </h1>

                  <div className="space-y-4 text-sm sm:text-base text-[#0D1929]/85 leading-relaxed">
                    {activeArticle.paragraphs.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-[#E8E4DA]">
                    <h2 className="font-serif text-xl font-bold text-[#0D1929] mb-3">
                      Practical Takeaways
                    </h2>
                    <ul className="space-y-2.5 text-sm text-[#0D1929]/80">
                      {activeArticle.takeaways.map((tip) => (
                        <li key={tip} className="flex items-start gap-2.5">
                          <span className="text-[#345C49] font-bold" aria-hidden="true">·</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-[#E8E4DA] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F7F4EC] p-5 rounded-lg">
                    <div className="text-xs sm:text-sm text-[#0D1929]/80">
                      Want us to review these areas on your venue’s website?
                    </div>
                    <a
                      href={getRouteHref('contact')}
                      onClick={(e) => {
                        e.preventDefault();
                        trackAuditCtaClick(`insight_${activeArticle.id}`);
                        onNavigate('contact');
                      }}
                      data-cta="request-digital-audit"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#0D1929] hover:bg-[#182A44] rounded-md transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>Request a Digital Audit</span>
                      <ArrowUpRight className="w-4 h-4 text-[#84B39A]" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ) : (
            /* Insights Index View */
            <>
              <div className="max-w-3xl mb-12">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#345C49] mb-3">
                  <BookOpen className="w-4 h-4" aria-hidden="true" />
                  <span>Insights &amp; Practical Guides</span>
                </div>
                <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0D1929] tracking-tight leading-[1.15] text-balance">
                  Hospitality Marketing &amp; Analytics Notes for Adelaide Venues.
                </h1>
                <p className="mt-4 text-base sm:text-lg text-[#0D1929]/80 leading-relaxed">
                  Short, plain-language guides on restaurant SEO in Adelaide, café marketing, customer retention, and making better decisions with Google Analytics 4.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <article
                    key={article.id}
                    className="bg-[#FFFFFF] rounded-xl border border-[#E8E4DA] overflow-hidden shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <img
                        src={article.image}
                        alt={article.imageAlt}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-2 text-xs text-[#345C49] font-semibold">
                          <span>{article.category}</span>
                          <span aria-hidden="true" className="text-[#0D1929]/40">·</span>
                          <span className="text-[#0D1929]/60 font-normal">{article.readTime}</span>
                        </div>
                        <h2 className="font-serif text-xl font-bold text-[#0D1929] leading-snug">
                          {article.title}
                        </h2>
                        <p className="text-sm text-[#0D1929]/75 leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-3 border-t border-[#E8E4DA]/60">
                      <button
                        type="button"
                        onClick={() => setSelectedArticleId(article.id)}
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0D1929] hover:text-[#345C49] transition-colors cursor-pointer"
                      >
                        <span>Read Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};
