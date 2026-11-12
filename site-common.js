/* ============================================================
   Adjustly — shared site config + helpers (loaded on every page).
   Exposes window.ADJUSTLY so nav/IA, brand assets, CTA, license,
   and the lead-form handler live in ONE place.
   ============================================================ */
/* ---- Lead credit: special links like /cullen or ?ref=cullen ----
   Runs immediately on every page. Stores up to 5 link visits (code + time + landing path, nothing personal)
   in this browser for 180 days. The backend gives credit to the FIRST active code; no code = Website - Direct.
   ?ref_check=1 shows what this browser is credited to. ?ref_reset=1 clears it (test site only). */
window.ADJUSTLY_REF = (function () {
  var KEY = 'adj_ref_v1', DAYS = 180, MAX = 5, CODE_RE = /^[a-z0-9][a-z0-9-]{1,39}$/;
  var isTest = /\.github\.io$/.test(location.hostname) || location.hostname === 'localhost' || location.hostname === '127.0.0.1';

  function readCookie() {
    var m = document.cookie.match(/(?:^|;\s*)adj_ref_v1=([^;]*)/);
    return m ? decodeURIComponent(m[1]) : '';
  }
  function parse(raw) { try { var v = JSON.parse(raw || '[]'); return Array.isArray(v) ? v : []; } catch (e) { return []; } }
  function fresh(list) {
    var now = Date.now();
    return list.filter(function (v) {
      var t = Date.parse(v && v.t);
      return v && CODE_RE.test(String(v.c || '')) && !isNaN(t) && now - t < DAYS * 86400000;
    }).slice(0, MAX);
  }
  function read() {
    var raw = '';
    try { raw = localStorage.getItem(KEY) || ''; } catch (e) {}
    if (!raw) { try { raw = sessionStorage.getItem(KEY) || ''; } catch (e) {} }
    if (!raw) raw = readCookie();
    return fresh(parse(raw));
  }
  function write(list) {
    var raw = JSON.stringify(list);
    try { localStorage.setItem(KEY, raw); } catch (e) {}
    try { sessionStorage.setItem(KEY, raw); } catch (e) {}
    try {
      var first = list.length ? Date.parse(list[0].t) : Date.now();
      var left = Math.max(0, Math.floor((first + DAYS * 86400000 - Date.now()) / 1000));
      document.cookie = KEY + '=' + encodeURIComponent(raw) + '; max-age=' + left + '; path=/; SameSite=Lax' +
        (location.protocol === 'https:' ? '; Secure' : '');
    } catch (e) {}
  }
  function clear() {
    try { localStorage.removeItem(KEY); } catch (e) {}
    try { sessionStorage.removeItem(KEY); } catch (e) {}
    try { document.cookie = KEY + '=; max-age=0; path=/'; } catch (e) {}
  }
  function strip(names) {
    try {
      var u = new URL(location.href);
      names.forEach(function (n) { u.searchParams.delete(n); });
      history.replaceState(history.state, '', u.pathname + (u.search ? u.search : '') + u.hash);
    } catch (e) {}
  }

  // Capture (synchronously, before the page renders).
  try {
    var qs = new URLSearchParams(location.search);
    var onLeadPage = /lead-intake(\.html)?$/.test(location.pathname); // advocate's own page: never store
    if (qs.get('ref_reset') === '1') {
      if (isTest) clear();
      strip(['ref_reset', 'ref']); // never store a new code on the same visit as a reset
    } else if (!onLeadPage) {
      var code = String(qs.get('ref') || '').trim().toLowerCase();
      if (code && CODE_RE.test(code)) {
        var list = read();
        if (!list.some(function (v) { return v.c === code; }) && list.length < MAX) {
          list.push({ c: code, t: new Date().toISOString(), p: location.pathname });
          write(list);
        }
        strip(['ref']);
      }
    }
  } catch (e) {}

  // ?ref_check=1 : small banner showing this browser's credit (for testing).
  try {
    if (new URLSearchParams(location.search).get('ref_check') === '1') {
      document.addEventListener('DOMContentLoaded', function () {
        var l = read(), b = document.createElement('div');
        var fmt = function (ms) { return new Date(ms).toLocaleDateString(); };
        b.textContent = l.length
          ? 'Link credit in this browser: "' + l[0].c + '" since ' + fmt(Date.parse(l[0].t)) + ' (until ' +
            fmt(Date.parse(l[0].t) + DAYS * 86400000) + ')' + (l.length > 1 ? ' — later links: ' + l.slice(1).map(function (v) { return v.c; }).join(', ') : '')
          : 'No link credit in this browser — forms here count as Website - Direct.';
        b.style.cssText = 'position:fixed;left:12px;bottom:12px;z-index:99999;background:#0B2545;color:#fff;padding:10px 14px;border-radius:8px;font:14px/1.4 Arial,sans-serif;max-width:92vw;box-shadow:0 4px 16px rgba(0,0,0,.25)';
        document.body.appendChild(b);
      });
    }
  } catch (e) {}

  return { visits: read, clear: clear };
})();

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
        attr: key === 'lead' ? null : { visits: window.ADJUSTLY_REF ? window.ADJUSTLY_REF.visits() : [], page: location.pathname },
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
