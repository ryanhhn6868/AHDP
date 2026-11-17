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

export function trackPageView(pageTitle: string, virtualPath: string): PageViewPayload {
  const pageLocation =
    typeof window !== 'undefined' ? window.location.href : `https://ahdp.local${virtualPath}`;

  const payload: PageViewPayload = {
    page_title: pageTitle,
    page_path: virtualPath,
    page_location: pageLocation,
  };

  pushToDataLayer({
    event: 'page_view',
    ...payload,
  });

  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', payload);
  }

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

  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'request_digital_audit_click', payload);
  }

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

  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'audit_enquiry_submit_demo', payload);
  }
}
