declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | unknown[]>;
    gtag?: (...args: unknown[]) => void;
  }
}

export interface PageViewPayload {
  page_title: string;
  page_path: string;
  page_location: string;
}

export interface AuditCtaPayload {
  cta_label: string;
  cta_location: string;
  destination_path: string;
}

function pushToDataLayer(payload: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/**
 *Note: Initial page_view and History API route changes are handled automatically
 *by GTM container GTM-KD88TR26 (gtm.js on load + gtm.historyChange-v2 on pushState/popstate).
 *Only call this helper manually if an explicit standalone dataLayer event is needed.
 */
export function trackPageView(pageTitle: string, pagePath: string): PageViewPayload {
  const pageLocation =
    typeof window !== 'undefined' ? window.location.href : `https://ahdp.local${pagePath}`;

  const payload: PageViewPayload = {
    page_title: pageTitle,
    page_path: pagePath,
    page_location: pageLocation,
  };

  pushToDataLayer({
    event: 'page_view',
    ...payload,
  });

  return payload;
}

export function trackAuditCtaClick(ctaLocation: string): AuditCtaPayload {
  const payload: AuditCtaPayload = {
    cta_label: 'Request a Digital Audit',
    cta_location: ctaLocation,
    destination_path: '/contact',
  };

  pushToDataLayer({
    event: 'request_digital_audit_click',
    ...payload,
  });

  return payload;
}

export function trackAuditFormDemoSubmit(venueType: string, strategicFocus: string): void {
  const payload = {
    venue_type: venueType,
    strategic_focus: strategicFocus,
    submission_mode: 'demonstration',
  };

  pushToDataLayer({
    event: 'audit_enquiry_submit_demo',
    ...payload,
  });
}
