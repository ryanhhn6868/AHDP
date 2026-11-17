import { ROUTES, NAV_ORDER, type PageRoute, type RouteMetadata } from './routesMeta';

export { ROUTES, NAV_ORDER };
export type { PageRoute, RouteMetadata };

export function normalizeBasePath(base?: string): string {
  if (!base || base === '.' || base === './' || base === '/') {
    return '/';
  }
  const trimmed = base.replace(/^\/+|\/+$/g, '');
  return trimmed ? `/${trimmed}/` : '/';
}

export function getBaseUrl(): string {
  const viteMeta = import.meta as ImportMeta & { env?: { BASE_URL?: string } };
  return normalizeBasePath(viteMeta.env?.BASE_URL);
}

export function getRouteHref(route: PageRoute, baseUrl: string = getBaseUrl()): string {
  const normalizedBase = normalizeBasePath(baseUrl);
  const routePath = ROUTES[route].path;
  if (routePath === '/') {
    return normalizedBase;
  }
  return `${normalizedBase}${routePath.replace(/^\/+/, '')}`;
}

function normalizeRouteSegment(segment: string): PageRoute {
  const cleaned = segment.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (!cleaned || cleaned === 'home' || cleaned === 'index.html') {
    return 'home';
  }
  if (cleaned === 'about' || cleaned === 'about-us') {
    return 'about';
  }
  if (cleaned === 'services') {
    return 'services';
  }
  if (cleaned === 'sample-audit' || cleaned === 'audit') {
    return 'sample-audit';
  }
  if (cleaned === 'insights') {
    return 'insights';
  }
  if (cleaned === 'contact') {
    return 'contact';
  }
  return 'home';
}

export function parsePathnameRoute(
  pathname: string,
  baseUrl: string = getBaseUrl(),
  hash: string = ''
): PageRoute {
  const normalizedBase = normalizeBasePath(baseUrl);
  const cleanPath = (pathname.split(/[?#]/)[0] || '/').replace(/\/+/g, '/');

  let relativePath = cleanPath;
  if (normalizedBase !== '/') {
    const baseWithoutTrailingSlash = normalizedBase.slice(0, -1);
    if (cleanPath === baseWithoutTrailingSlash || cleanPath === normalizedBase) {
      relativePath = '';
    } else if (cleanPath.startsWith(normalizedBase)) {
      relativePath = cleanPath.slice(normalizedBase.length);
    }
  }

  const trimmedRelative = relativePath.replace(/^\/+|\/+$/g, '');
  if (!trimmedRelative && hash && hash.startsWith('#/')) {
    return normalizeRouteSegment(hash.slice(2));
  }

  return normalizeRouteSegment(trimmedRelative);
}

export function applyRouteMetadata(route: PageRoute): void {
  if (typeof document === 'undefined') return;
  const meta = ROUTES[route];
  document.title = meta.title;

  const selectors: Array<[string, string]> = [
    ['meta[name="description"]', meta.description],
    ['meta[property="og:title"]', meta.title],
    ['meta[property="og:description"]', meta.description],
    ['meta[name="twitter:title"]', meta.title],
    ['meta[name="twitter:description"]', meta.description],
  ];

  for (const [selector, content] of selectors) {
    const el = document.querySelector(selector);
    if (el) {
      el.setAttribute('content', content);
    }
  }
}
