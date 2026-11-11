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
    { label: 'Partner Network', href: 'home-services-partners.html' },
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

  // ---- Form backend: Google Apps Script web app owned by adjustlyweb@gmail.com ----
  // Every form posts here; rows land in the "Adjustly Website Forms" Google Sheet.
  // The URL is public by design (it only accepts form submissions). Source: ../apps-script/Code.gs
  var FORMS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbz3RexJBnNaFnkrAODa8VTMk93kIJKZyjyaOTu57SGKXhssZiS3HFwxPHNjBQt8DGvK/exec';

  var DEFAULT_SUCCESS = 'Thank you — a licensed public adjuster will review your request and reach out. No cost, no obligation.';
  var MAX_UPLOAD_BYTES = 10 * 1024 * 1024;
  var MAX_IMAGE_EDGE = 1600;

  function newSid() {
    var raw = (window.crypto && crypto.randomUUID) ? crypto.randomUUID()
      : Date.now().toString(36) + '-' + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
    return raw.replace(/[^A-Za-z0-9-]/g, '').slice(0, 64);
  }

  function isHidden(el) { return !!el.closest('[hidden]'); }

  function labelFor(form, el) {
    if (el.getAttribute('data-label')) return el.getAttribute('data-label');
    if (el.id) {
      var l = form.querySelector('label[for="' + el.id.replace(/"/g, '') + '"]');
      if (l) return l.textContent.replace(/\*|\(optional\)/g, '').trim();
    }
    var fs = el.closest('fieldset');
    var lg = fs && fs.querySelector('legend');
    return lg ? lg.textContent.replace(/\*|\(optional\)/g, '').trim() : el.name;
  }

  // Collect visible, named fields in DOM order. Checkbox groups are joined; files are sent separately.
  function collectFields(form) {
    var order = [], map = {};
    Array.prototype.forEach.call(form.elements, function (el) {
      if (!el.name || el.disabled || el.type === 'file' || el.type === 'submit' || el.type === 'button') return;
      if (el.name === 'website' || el.name === 'ref' || isHidden(el)) return;
      if (!(el.name in map)) { map[el.name] = { key: el.name, label: labelFor(form, el), value: [] }; order.push(el.name); }
      var v;
      if (el.type === 'checkbox') { if (!el.checked) return; v = el.value === 'on' ? 'Yes' : el.value; }
      else if (el.type === 'radio') { if (!el.checked) return; v = el.value; }
      else v = el.value;
      if (String(v).trim()) map[el.name].value.push(String(v).trim());
    });
    return order.map(function (k) { return { key: k, label: map[k].label, value: map[k].value.join(', ') }; });
  }

  // Minimal required-field check (forms use noValidate so we control the message).
  function firstMissing(form) {
    var els = form.querySelectorAll('[required]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (isHidden(el) || el.disabled) continue;
      if (el.type === 'checkbox' && el.name) {
        var group = form.querySelectorAll('input[type="checkbox"][name="' + el.name + '"]');
        var any = Array.prototype.some.call(group, function (c) { return c.checked; });
        if (!any) return el;
      } else if (el.type === 'file' ? !el.files.length : !String(el.value || '').trim()) {
        return el;
      }
    }
    var email = form.querySelectorAll('input[type="email"]');
    for (var j = 0; j < email.length; j++) {
      var ev = String(email[j].value || '').trim();
      if (ev && !isHidden(email[j]) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ev)) return email[j];
    }
    return null;
  }

  function toDataUrl(blob) {
    return new Promise(function (resolve, reject) {
      var r = new FileReader();
      r.onload = function () { resolve(r.result); };
      r.onerror = reject;
      r.readAsDataURL(blob);
    });
  }

  // Shrink phone photos in the browser (~1600px JPEG) so uploads are fast on cell data.
  async function prepareFile(file) {
    var type = (file.type || '').toLowerCase();
    if (/^image\/(jpeg|png|webp)$/.test(type) && window.createImageBitmap) {
      try {
        var bmp = await createImageBitmap(file);
        var scale = Math.min(1, MAX_IMAGE_EDGE / Math.max(bmp.width, bmp.height));
        var c = document.createElement('canvas');
        c.width = Math.round(bmp.width * scale); c.height = Math.round(bmp.height * scale);
        c.getContext('2d').drawImage(bmp, 0, 0, c.width, c.height);
        var blob = await new Promise(function (res) { c.toBlob(res, 'image/jpeg', 0.85); });
        if (blob) return { blob: blob, mime: 'image/jpeg' };
      } catch (ignore) {}
    }
    if (!type && /\.(heic|heif)$/i.test(file.name)) type = 'image/heic';
    return { blob: file, mime: type };
  }

  async function postJson(payload) {
    var res = await fetch(FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' }, // no CORS preflight for Apps Script
      body: JSON.stringify(payload),
      redirect: 'follow'
    });
    return res.json();
  }

  /**
   * Shared submit handler for every form on the site.
   *   submitLead(e, subject, formKey, { success: 'message' })
   * formKey = review | risk | audit | partner | storm | advocate | lead
   */
  async function submitLead(e, subject, formKey, opts) {
    opts = opts || {};
    var form = e.target;
    if (form.dataset.sending === '1') return;
    var status = form.querySelector('.adj-lead-status');
    if (!status) {
      status = document.createElement('p');
      status.className = 'adj-lead-status';
      status.setAttribute('role', 'status');
      status.setAttribute('aria-live', 'polite');
      form.appendChild(status);
    }
    if (FORMS_ENDPOINT.charAt(0) === '[') {
      status.textContent = 'Staging preview — online submission isn’t live yet. Please email us and we’ll respond personally.';
      return;
    }
    var missing = firstMissing(form);
    if (missing) {
      status.textContent = 'Please complete: ' + labelFor(form, missing) + '.';
      try { missing.focus(); } catch (ignore) {}
      return;
    }

    var key = formKey || 'review';
    var sid = newSid();
    var btn = form.querySelector('[type="submit"]');
    form.dataset.sending = '1';
    if (btn) btn.disabled = true;
    var skipped = [];
    try {
      // 1) Upload files one at a time (keeps each request small and reliable on phones).
      var inputs = Array.prototype.filter.call(form.querySelectorAll('input[type="file"]'), function (i) { return !isHidden(i); });
      var files = [];
      inputs.forEach(function (inp) {
        Array.prototype.forEach.call(inp.files || [], function (f) { files.push({ file: f, kind: inp.getAttribute('data-kind') || 'file' }); });
      });
      if (files.length > 15) {
        status.textContent = 'Please attach 15 files or fewer — you can send the rest later.';
        return;
      }
      for (var i = 0; i < files.length; i++) {
        status.textContent = 'Uploading file ' + (i + 1) + ' of ' + files.length + '…';
        var prep = await prepareFile(files[i].file);
        if (prep.blob.size > MAX_UPLOAD_BYTES) { skipped.push(files[i].file.name + ' (over 10 MB)'); continue; }
        var dataUrl = await toDataUrl(prep.blob);
        var up = await postJson({
          action: 'upload', sid: sid, form: key, kind: files[i].kind,
          name: files[i].file.name, mime: prep.mime, data: String(dataUrl).split(',')[1] || ''
        });
        if (!up.ok) skipped.push(files[i].file.name + (up.error === 'file_type' ? ' (file type not accepted)' : ' (not uploaded)'));
      }

      // 2) Save the row.
      status.textContent = 'Sending…';
      var honey = form.querySelector('[name="website"]');
      var ref = form.querySelector('[name="ref"]');
      var refEntry = form.querySelector('[name="ref_entry"]');
      var refValue = (ref && ref.value) || (refEntry && refEntry.value) || '';
      var json = await postJson({
        action: 'submit', sid: sid, form: key, subject: subject || '',
        website: honey ? honey.value : '', ref: String(refValue).trim(),
        fields: collectFields(form)
      });
      if (json.ok) {
        var msg = (opts.success || DEFAULT_SUCCESS) + ' Reference: ' + json.id + '.';
        if (skipped.length) msg += ' These files were not attached — please email them to us: ' + skipped.join(', ') + '.';
        status.textContent = msg;
        form.reset();
        if (typeof opts.onSuccess === 'function') opts.onSuccess(json);
      } else {
        status.textContent = 'Something went wrong sending your request. Please try again, or email us directly.';
      }
    } catch (err) {
      status.textContent = 'Network error — please try again, or email us directly.';
    } finally {
      form.dataset.sending = '';
      if (btn) btn.disabled = false;
    }
  }

  return {
    NAV: NAV, LOGO_NAVY: LOGO_NAVY, LOGO_WHITE: LOGO_WHITE, MARK: MARK, MARK_WHITE: MARK_WHITE,
    PHONE: PHONE, EMAIL: EMAIL, CTA: CTA, LICENSE: LICENSE, FORMS_ENDPOINT: FORMS_ENDPOINT,
    submitLead: submitLead,
  };
})();
