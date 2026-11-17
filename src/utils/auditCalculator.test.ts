import test from 'node:test';
import assert from 'node:assert/strict';
import { validateAuditForm, AuditRequestFormData } from './auditCalculator';
import { parsePathnameRoute, getRouteHref, normalizeBasePath, ROUTES } from './routing';
import { trackPageView, trackAuditCtaClick } from './analytics';

test('validateAuditForm: returns errors on empty required fields', () => {
  const emptyForm: AuditRequestFormData = {
    venueName: '',
    contactName: '',
    email: '',
    phone: '',
    suburb: '',
    venueType: '',
    primaryChallenge: '',
  };

  const validation = validateAuditForm(emptyForm);
  assert.equal(validation.isValid, false);
  assert.equal(typeof validation.errors.venueName, 'string');
  assert.equal(typeof validation.errors.contactName, 'string');
  assert.equal(typeof validation.errors.email, 'string');
  assert.equal(typeof validation.errors.suburb, 'string');
});

test('validateAuditForm: validates optional phone format when provided', () => {
  const invalidPhoneForm: AuditRequestFormData = {
    venueName: 'Norwood Corner Espresso',
    contactName: 'Alex Tan',
    email: 'alex@norwoodcorner.example',
    phone: '123',
    suburb: 'Norwood',
    venueType: 'Café / Specialty Coffee',
    primaryChallenge: 'Local SEO & Google Business Profile',
  };

  const validation = validateAuditForm(invalidPhoneForm);
  assert.equal(validation.isValid, false);
  assert.equal(typeof validation.errors.phone, 'string');
});

test('validateAuditForm: approves valid Adelaide venue enquiry', () => {
  const validForm: AuditRequestFormData = {
    venueName: 'The Norwood Botanical',
    contactName: 'Sarah Jenkins',
    email: 'sarah@norwoodbotanical.example',
    phone: '0412 345 678',
    suburb: 'Norwood',
    venueType: 'Wine Bar / Bistro',
    primaryChallenge: 'Customer Retention & Repeat Visits',
    websiteOrInstagram: '@norwoodbotanical',
  };

  const validation = validateAuditForm(validForm);
  assert.equal(validation.isValid, true);
  assert.equal(Object.keys(validation.errors).length, 0);
});

test('parsePathnameRoute: resolves root and GitHub Pages subfolder paths cleanly', () => {
  assert.equal(normalizeBasePath(undefined), '/');
  assert.equal(normalizeBasePath('./'), '/');
  assert.equal(normalizeBasePath('/ahdp'), '/ahdp/');
  assert.equal(normalizeBasePath('/ahdp/'), '/ahdp/');

  // Root hosting
  assert.equal(parsePathnameRoute('/', '/'), 'home');
  assert.equal(parsePathnameRoute('/about', '/'), 'about');
  assert.equal(parsePathnameRoute('/about/', '/'), 'about');
  assert.equal(parsePathnameRoute('/services', '/'), 'services');
  assert.equal(parsePathnameRoute('/sample-audit', '/'), 'sample-audit');
  assert.equal(parsePathnameRoute('/insights', '/'), 'insights');
  assert.equal(parsePathnameRoute('/contact', '/'), 'contact');
  assert.equal(parsePathnameRoute('/unknown-page', '/'), 'home');

  // GitHub Pages subfolder hosting (/ahdp/)
  assert.equal(parsePathnameRoute('/ahdp', '/ahdp/'), 'home');
  assert.equal(parsePathnameRoute('/ahdp/', '/ahdp/'), 'home');
  assert.equal(parsePathnameRoute('/ahdp/services', '/ahdp/'), 'services');
  assert.equal(parsePathnameRoute('/ahdp/services/', '/ahdp/'), 'services');
  assert.equal(parsePathnameRoute('/ahdp/sample-audit/', '/ahdp/'), 'sample-audit');
  assert.equal(parsePathnameRoute('/ahdp/unknown', '/ahdp/'), 'home');

  // Skip-link fragment must never change the resolved route
  assert.equal(parsePathnameRoute('/services', '/', '#main-content'), 'services');
  assert.equal(parsePathnameRoute('/ahdp/contact/', '/ahdp/', '#main-content'), 'contact');

  // Legacy #/ hashes still resolve when on root
  assert.equal(parsePathnameRoute('/ahdp/', '/ahdp/', '#/insights'), 'insights');

  assert.ok(ROUTES.services.title.includes('Services'));
});

test('getRouteHref: builds clean URLs for both root and subfolder bases', () => {
  assert.equal(getRouteHref('home', '/'), '/');
  assert.equal(getRouteHref('about', '/'), '/about');
  assert.equal(getRouteHref('sample-audit', '/'), '/sample-audit');

  assert.equal(getRouteHref('home', '/ahdp/'), '/ahdp/');
  assert.equal(getRouteHref('services', '/ahdp/'), '/ahdp/services');
  assert.equal(getRouteHref('contact', '/ahdp/'), '/ahdp/contact');
});

test('analytics helpers: return structured payloads safely in non-DOM environment', () => {
  const pv = trackPageView('AHDP Home', '/');
  assert.equal(pv.page_title, 'AHDP Home');
  assert.equal(pv.page_path, '/');

  const cta = trackAuditCtaClick('hero');
  assert.equal(cta.cta_label, 'Request a Digital Audit');
  assert.equal(cta.cta_location, 'hero');
  assert.equal(cta.destination_path, '/contact');
});
