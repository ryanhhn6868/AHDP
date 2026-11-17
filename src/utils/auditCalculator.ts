export interface AuditRequestFormData {
  venueName: string;
  contactName: string;
  email: string;
  phone: string;
  suburb: string;
  venueType: string;
  primaryChallenge: string;
  websiteOrInstagram?: string;
  notes?: string;
}

export function validateAuditForm(data: AuditRequestFormData): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!data.venueName.trim()) {
    errors.venueName = 'Venue name is required';
  }

  if (!data.contactName.trim()) {
    errors.contactName = 'Your name is required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = 'Email address is required';
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address';
  }

  // Phone is optional, but if entered it must have at least 8 digits
  if (data.phone.trim() && data.phone.replace(/[^0-9]/g, '').length < 8) {
    errors.phone = 'Please enter a valid phone number (at least 8 digits) or leave blank';
  }

  if (!data.suburb.trim()) {
    errors.suburb = 'Adelaide suburb / precinct is required';
  }

  if (!data.venueType) {
    errors.venueType = 'Please select your venue type';
  }

  if (!data.primaryChallenge) {
    errors.primaryChallenge = 'Please select a focus area';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
