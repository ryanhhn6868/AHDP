import React, { useState, useEffect } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Info,
  AlertCircle,
} from 'lucide-react';
import { validateAuditForm, AuditRequestFormData } from '../utils/auditCalculator';
import { trackAuditFormDemoSubmit } from '../utils/analytics';

interface ContactSectionProps {
  preFillFocus?: string | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preFillFocus }) => {
  const [formData, setFormData] = useState<AuditRequestFormData>({
    venueName: '',
    contactName: '',
    email: '',
    phone: '',
    suburb: 'Adelaide CBD',
    venueType: 'Café / Specialty Coffee',
    primaryChallenge: 'Digital Marketing Audit',
    websiteOrInstagram: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preFillFocus) {
      setFormData((prev) => ({
        ...prev,
        primaryChallenge: preFillFocus,
      }));
    }
  }, [preFillFocus]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateAuditForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    trackAuditFormDemoSubmit(formData.venueType, formData.primaryChallenge);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setErrors({});
    setFormData({
      venueName: '',
      contactName: '',
      email: '',
      phone: '',
      suburb: 'Adelaide CBD',
      venueType: 'Café / Specialty Coffee',
      primaryChallenge: 'Digital Marketing Audit',
      websiteOrInstagram: '',
      notes: '',
    });
  };

  return (
    <section className="py-14 lg:py-20 bg-[#F7F4EC] border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#345C49] mb-3">
            Contact &amp; Enquiry
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0D1929] tracking-tight leading-[1.15] text-balance">
            Request a Digital Audit for Your Adelaide Venue.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#0D1929]/80 leading-relaxed">
            Get in touch with Adelaide Hospitality Digital Partners to discuss local SEO, restaurant customer retention, or a structured digital marketing audit for your café or restaurant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Details & Consultation Overview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFFFFF] rounded-xl border border-[#E8E4DA] p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="font-serif text-xl font-bold text-[#0D1929]">
                Contact Information
              </h2>

              <div className="space-y-4 text-sm text-[#0D1929]/85">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#345C49] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-[#0D1929] block">Location</span>
                    <span>Adelaide, South Australia 5000</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#345C49] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-[#0D1929] block">Email</span>
                    <span>hello@ahdp-adelaide.example</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#345C49] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-[#0D1929] block">Consultation Hours</span>
                    <span>Monday – Friday, 9:00am – 5:00pm ACST</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-[#E8E4DA] space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#345C49]">
                  What an Audit Covers
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#0D1929]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#345C49] font-bold" aria-hidden="true">·</span>
                    <span>Google Business Profile &amp; Adelaide local search review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#345C49] font-bold" aria-hidden="true">·</span>
                    <span>Mobile website clarity, menu usability &amp; booking paths</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#345C49] font-bold" aria-hidden="true">·</span>
                    <span>Guest retention touchpoints &amp; GA4 analytics readiness</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Honest Demonstration Notice */}
            <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E8E4DA] flex items-start gap-3 text-xs text-[#0D1929]/80 leading-relaxed">
              <Info className="w-4 h-4 text-[#345C49] shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                <strong>Assignment Demonstration Form:</strong> No external email server or backend database is connected to this static site. Submitting validates your inputs locally and shows a preview confirmation.
              </span>
            </div>
          </div>

          {/* Right Column: Simple Digital Audit Enquiry Form */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-xl border border-[#E8E4DA] p-6 sm:p-8 shadow-sm">
            {isSubmitted ? (
              <div className="py-6 space-y-5" role="status" aria-live="polite">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#EAF1ED] text-[#345C49] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#345C49] block">
                      Demonstration Preview
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-[#0D1929]">
                      Enquiry Validated (Demo Only)
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-[#0D1929]/80 leading-relaxed">
                  Thank you, <strong className="text-[#0D1929]">{formData.contactName}</strong>. Your enquiry details for <strong className="text-[#0D1929]">{formData.venueName}</strong> passed form validation. Because this is a static university prototype with no live mail server configured, no data has been transmitted or stored externally.
                </p>

                <div className="p-4 bg-[#F7F4EC] border border-[#E8E4DA] rounded-lg text-xs text-[#0D1929]/85 space-y-1.5 font-mono">
                  <div>VENUE: {formData.venueName}</div>
                  <div>CONTACT: {formData.contactName} ({formData.email})</div>
                  <div>SUBURB: {formData.suburb}</div>
                  <div>VENUE TYPE: {formData.venueType}</div>
                  <div>FOCUS AREA: {formData.primaryChallenge}</div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#0D1929] bg-[#F7F4EC] hover:bg-[#EFECE3] border border-[#E8E4DA] rounded-md transition-colors cursor-pointer"
                  >
                    Reset Demonstration Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="border-b border-[#E8E4DA] pb-3 mb-4">
                  <h2 className="font-serif text-xl font-bold text-[#0D1929]">
                    Digital Audit Enquiry Form (Demonstration)
                  </h2>
                  <p className="text-xs text-[#0D1929]/65 mt-1">
                    Fields marked with <span className="text-red-600">*</span> are required. Inputs are validated in your browser.
                  </p>
                </div>

                {/* Venue Name & Contact Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="venueName" className="block text-xs font-semibold text-[#0D1929] mb-1">
                      Venue Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="venueName"
                      name="venueName"
                      value={formData.venueName}
                      onChange={handleChange}
                      placeholder="e.g. Norwood Corner Café"
                      aria-invalid={Boolean(errors.venueName)}
                      aria-describedby={errors.venueName ? 'venueName-error' : undefined}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                        errors.venueName ? 'border-red-600 bg-red-50/30' : 'border-[#E8E4DA] bg-[#FAF8F5]'
                      } text-[#0D1929] focus:outline-none focus:ring-2 focus:ring-[#345C49]/50`}
                      required
                    />
                    {errors.venueName && (
                      <p id="venueName-error" className="text-xs text-red-700 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.venueName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contactName" className="block text-xs font-semibold text-[#0D1929] mb-1">
                      Your Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="e.g. Jordan Lee"
                      aria-invalid={Boolean(errors.contactName)}
                      aria-describedby={errors.contactName ? 'contactName-error' : undefined}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                        errors.contactName ? 'border-red-600 bg-red-50/30' : 'border-[#E8E4DA] bg-[#FAF8F5]'
                      } text-[#0D1929] focus:outline-none focus:ring-2 focus:ring-[#345C49]/50`}
                      required
                    />
                    {errors.contactName && (
                      <p id="contactName-error" className="text-xs text-red-700 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.contactName}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#0D1929] mb-1">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jordan@venue.example"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                        errors.email ? 'border-red-600 bg-red-50/30' : 'border-[#E8E4DA] bg-[#FAF8F5]'
                      } text-[#0D1929] focus:outline-none focus:ring-2 focus:ring-[#345C49]/50`}
                      required
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-red-700 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-[#0D1929] mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 0412 345 678"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                        errors.phone ? 'border-red-600 bg-red-50/30' : 'border-[#E8E4DA] bg-[#FAF8F5]'
                      } text-[#0D1929] focus:outline-none focus:ring-2 focus:ring-[#345C49]/50`}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="text-xs text-red-700 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Suburb & Venue Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="suburb" className="block text-xs font-semibold text-[#0D1929] mb-1">
                      Adelaide Suburb / Area <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="suburb"
                      name="suburb"
                      value={formData.suburb}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#E8E4DA] bg-[#FAF8F5] text-[#0D1929] focus:outline-none focus:ring-2 focus:ring-[#345C49]/50"
                    >
                      <option value="Adelaide CBD">Adelaide CBD</option>
                      <option value="North Adelaide">North Adelaide</option>
                      <option value="Norwood & Eastern Suburbs">Norwood &amp; Eastern Suburbs</option>
                      <option value="Unley & Goodwood">Unley &amp; Goodwood</option>
                      <option value="Glenelg & Coastal">Glenelg &amp; Coastal</option>
                      <option value="Adelaide Hills">Adelaide Hills</option>
                      <option value="Other Greater Adelaide Area">Other Greater Adelaide Area</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="venueType" className="block text-xs font-semibold text-[#0D1929] mb-1">
                      Venue Type <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="venueType"
                      name="venueType"
                      value={formData.venueType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#E8E4DA] bg-[#FAF8F5] text-[#0D1929] focus:outline-none focus:ring-2 focus:ring-[#345C49]/50"
                    >
                      <option value="Café / Specialty Coffee">Café / Specialty Coffee</option>
                      <option value="Casual or Fine Dining Restaurant">Casual or Fine Dining Restaurant</option>
                      <option value="Wine Bar / Bistro">Wine Bar / Bistro</option>
                      <option value="Bakery / Patisserie">Bakery / Patisserie</option>
                      <option value="Pub / Gastropub">Pub / Gastropub</option>
                    </select>
                  </div>
                </div>

                {/* Focus Area & Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="primaryChallenge" className="block text-xs font-semibold text-[#0D1929] mb-1">
                      Primary Focus Area <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="primaryChallenge"
                      name="primaryChallenge"
                      value={formData.primaryChallenge}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#E8E4DA] bg-[#FAF8F5] text-[#0D1929] focus:outline-none focus:ring-2 focus:ring-[#345C49]/50"
                    >
                      <option value="Digital Marketing Audits">Digital Marketing Audits</option>
                      <option value="Local SEO">Local SEO</option>
                      <option value="Customer Retention">Customer Retention</option>
                      <option value="Marketing Analytics">Marketing Analytics</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="websiteOrInstagram" className="block text-xs font-semibold text-[#0D1929] mb-1">
                      Website or Instagram Handle (Optional)
                    </label>
                    <input
                      type="text"
                      id="websiteOrInstagram"
                      name="websiteOrInstagram"
                      value={formData.websiteOrInstagram}
                      onChange={handleChange}
                      placeholder="e.g. @norwoodcorner"
                      className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#E8E4DA] bg-[#FAF8F5] text-[#0D1929] focus:outline-none focus:ring-2 focus:ring-[#345C49]/50"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className="block text-xs font-semibold text-[#0D1929] mb-1">
                    Brief Notes or Questions (Optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Share any goals or questions about your venue's online visibility, retention, or analytics..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#E8E4DA] bg-[#FAF8F5] text-[#0D1929] focus:outline-none focus:ring-2 focus:ring-[#345C49]/50"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#0D1929] hover:bg-[#182A44] rounded-md transition-colors shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#345C49] cursor-pointer"
                  >
                    <span>Preview Audit Enquiry Submission</span>
                    <ArrowRight className="w-4 h-4 text-[#84B39A]" aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
