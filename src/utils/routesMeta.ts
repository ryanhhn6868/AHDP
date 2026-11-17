export type PageRoute =
  | 'home'
  | 'about'
  | 'services'
  | 'sample-audit'
  | 'insights'
  | 'contact';

export interface RouteMetadata {
  id: PageRoute;
  label: string;
  path: string;
  title: string;
  description: string;
}

export const ROUTES: Record<PageRoute, RouteMetadata> = {
  home: {
    id: 'home',
    label: 'Home',
    path: '/',
    title: 'Hospitality Marketing Adelaide | AHDP',
    description:
      'Digital marketing and analytics for independent Adelaide cafés and restaurants—improving local search visibility, customer retention, and marketing ROI.',
  },
  about: {
    id: 'about',
    label: 'About Us',
    path: '/about',
    title: 'About Us | Adelaide Hospitality Digital Partners',
    description:
      'Learn about AHDP’s mission supporting independent cafés and restaurants with hospitality marketing in Adelaide through our Audit, Improve, Measure approach.',
  },
  services: {
    id: 'services',
    label: 'Services',
    path: '/services',
    title: 'Services | Restaurant & Café Marketing Adelaide | AHDP',
    description:
      'Explore AHDP services: Digital Marketing Audits, restaurant SEO Adelaide, restaurant customer retention, and GA4 marketing analytics for local venues.',
  },
  'sample-audit': {
    id: 'sample-audit',
    label: 'Sample Audit',
    path: '/sample-audit',
    title: 'Sample Digital Audit | Hospitality Marketing Adelaide | AHDP',
    description:
      'View an illustrative sample digital marketing audit for an independent Adelaide café covering local SEO, mobile usability, customer retention and analytics.',
  },
  insights: {
    id: 'insights',
    label: 'Insights',
    path: '/insights',
    title: 'Hospitality Marketing Insights | Adelaide Cafés & Restaurants | AHDP',
    description:
      'Practical articles on restaurant marketing Adelaide, café marketing Adelaide, restaurant SEO, customer retention and marketing analytics.',
  },
  contact: {
    id: 'contact',
    label: 'Contact',
    path: '/contact',
    title: 'Contact & Request a Digital Audit | AHDP Adelaide',
    description:
      'Contact Adelaide Hospitality Digital Partners or submit a demonstration Digital Audit enquiry for your independent Adelaide café or restaurant.',
  },
};

export const NAV_ORDER: PageRoute[] = [
  'home',
  'about',
  'services',
  'sample-audit',
  'insights',
  'contact',
];
