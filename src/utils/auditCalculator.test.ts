import test from 'node:test';
import assert from 'node:assert/strict';
import { validateAuditForm, AuditRequestFormData } from './auditCalculator';
import { parseHashRoute, ROUTES } from './routing';
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

test('parseHashRoute: resolves all Part A/B routes and falls back to home', () => {
  assert.equal(parseHashRoute(''), 'home');
  assert.equal(parseHashRoute('#/'), 'home');
  assert.equal(parseHashRoute('#/about'), 'about');
  assert.equal(parseHashRoute('#/services'), 'services');
  assert.equal(parseHashRoute('#/sample-audit'), 'sample-audit');
  assert.equal(parseHashRoute('#/insights'), 'insights');
  assert.equal(parseHashRoute('#/contact'), 'contact');
  assert.equal(parseHashRoute('#/unknown-page'), 'home');
  assert.ok(ROUTES.services.title.includes('Services'));
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
