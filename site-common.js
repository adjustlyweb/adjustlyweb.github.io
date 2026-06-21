/* ============================================================
   Adjustly — shared site config + helpers (loaded on every page).
   Exposes window.ADJUSTLY so nav/IA, brand assets, CTA, license,
   and the lead-form handler live in ONE place.
   ============================================================ */
window.ADJUSTLY = (function () {
  var L = './assets/logo/';

  // ---- Information architecture (CLAUDE.md §5). Dropdowns supported by SiteHeader. ----
  var NAV = [
    { label: 'Home', href: 'index.html' },
    { label: 'Free Property Protection', href: 'risk-assessment.html', children: [
      { label: 'Free Property Risk Assessment', href: 'risk-assessment.html' },
      { label: 'Free Claim Settlement Audit', href: 'settlement-audit.html' },
    ] },
    { label: 'Services', href: 'services.html', children: [
      { label: 'Public Adjusting', href: 'services-public-adjusting.html' },
      { label: 'Damage Appraisal', href: 'services-damage-appraisal.html' },
      { label: 'Umpire Services', href: 'services-umpire.html' },
      { label: 'Property Damage Consultation', href: 'services-consultation.html' },
      { label: 'Claim Review', href: 'services-claim-review.html' },
      { label: 'Commercial Claims', href: 'services-commercial.html' },
    ] },
    { label: 'Who We Serve', href: 'who-we-serve.html', children: [
      { label: 'Residential', href: 'residential.html' },
      { label: 'Commercial', href: 'commercial.html' },
    ] },
    { label: 'Education Center', href: 'education.html' },
    { label: 'About', href: 'about.html' },
    { label: 'FAQ', href: 'faq.html' },
    { label: 'Contact', href: 'contact.html' },
  ];

  // ---- Brand assets ----
  var LOGO_NAVY = L + 'adjustly-logo-navy.png';
  var LOGO_WHITE = L + 'adjustly-logo-white.png';
  var MARK = L + 'adjustly-mark.png';
  var MARK_WHITE = L + 'adjustly-mark-white.png';

  // ---- Placeholders ([BRACKETS] = confirm before public, CLAUDE.md §14) ----
  var PHONE = '[PHONE]';
  var EMAIL = '[EMAIL]';
  var CTA = { label: 'Get a Free Claim Review', href: 'contact.html#start' };

  // ---- License (REAL, verifiable — Don Martin Jr., CLAUDE.md §1.5) ----
  var LICENSE = {
    number: '1289230',
    label: 'Pennsylvania Public Adjuster',
    // PA Insurance Department public license lookup ("Find Insurance Professional").
    verifyUrl: 'https://www.insurance.pa.gov',
  };

  // ---- Web3Forms (PUBLIC client-side key — safe in HTML, not a secret) ----
  var WEB3FORMS_KEY = '[WEB3FORMS_KEY]';

  // Shared lead-form submit handler. All input treated as untrusted; Web3Forms sanitizes server-side.
  async function submitLead(e, subject) {
    var form = e.target;
    var status = form.querySelector('.adj-lead-status');
    if (!status) {
      status = document.createElement('p');
      status.className = 'adj-lead-status';
      status.setAttribute('role', 'status');
      status.setAttribute('aria-live', 'polite');
      form.appendChild(status);
    }
    // Staging guard: until a real key is set, don't hit the API — show a clear notice.
    if (WEB3FORMS_KEY.charAt(0) === '[') {
      status.textContent = 'Staging preview — online submission isn’t live yet. To reach a licensed public adjuster now, please email us and we’ll respond personally.';
      return;
    }
    status.textContent = 'Sending…';
    var data = new FormData(form);
    data.append('access_key', WEB3FORMS_KEY);
    data.append('subject', subject || 'New Adjustly lead');
    data.append('from_name', 'Adjustly Website');
    try {
      var res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      var json = await res.json();
      if (json.success) {
        status.textContent = 'Thank you — a licensed public adjuster will review your request and reach out. No cost, no obligation.';
        form.reset();
      } else {
        status.textContent = 'Something went wrong sending your request. Please try again, or email us directly.';
      }
    } catch (err) {
      status.textContent = 'Network error — please try again, or email us directly.';
    }
  }

  return {
    NAV: NAV, LOGO_NAVY: LOGO_NAVY, LOGO_WHITE: LOGO_WHITE, MARK: MARK, MARK_WHITE: MARK_WHITE,
    PHONE: PHONE, EMAIL: EMAIL, CTA: CTA, LICENSE: LICENSE, WEB3FORMS_KEY: WEB3FORMS_KEY,
    submitLead: submitLead,
  };
})();
