/* @ds-bundle: {"format":3,"namespace":"AdjustlyDesignSystem_e51731","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"TextLink","sourcePath":"components/actions/TextLink.jsx"},{"name":"ArticleCard","sourcePath":"components/cards/ArticleCard.jsx"},{"name":"BenefitCard","sourcePath":"components/cards/BenefitCard.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"SpecialtyCard","sourcePath":"components/cards/SpecialtyCard.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"DisclaimerCallout","sourcePath":"components/feedback/DisclaimerCallout.jsx"},{"name":"LicenseBadge","sourcePath":"components/feedback/LicenseBadge.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"LeadForm","sourcePath":"components/forms/LeadForm.jsx"},{"name":"FaqAccordion","sourcePath":"components/navigation/FaqAccordion.jsx"},{"name":"ProcessTracker","sourcePath":"components/navigation/ProcessTracker.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"TrustBar","sourcePath":"components/navigation/TrustBar.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"1263f43c6f12","components/actions/TextLink.jsx":"147e1d585924","components/cards/ArticleCard.jsx":"9ff40d2cb498","components/cards/BenefitCard.jsx":"7916153a871f","components/cards/ServiceCard.jsx":"3c96c09aa41b","components/cards/SpecialtyCard.jsx":"b1a850d147a0","components/feedback/Badge.jsx":"8eab5c0d3270","components/feedback/DisclaimerCallout.jsx":"25708e597ccd","components/feedback/LicenseBadge.jsx":"5f157fe64313","components/forms/Field.jsx":"c4620a791b3a","components/forms/LeadForm.jsx":"a9a593fdd146","components/navigation/FaqAccordion.jsx":"19f598d1b7a2","components/navigation/ProcessTracker.jsx":"c915879c8c39","components/navigation/SiteFooter.jsx":"6e1ad1e68e94","components/navigation/SiteHeader.jsx":"e8a9b6b6ece5","components/navigation/TrustBar.jsx":"69437edc684f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AdjustlyDesignSystem_e51731 = window.AdjustlyDesignSystem_e51731 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component CSS once (hover/focus/press states need real CSS). */
const CSS = `
.adj-btn {
  --_bg: var(--blue-500); --_fg: #fff; --_bd: transparent;
  font-family: var(--font-sans); font-weight: 600; line-height: 1;
  display: inline-flex; align-items: center; justify-content: center; gap: 0.55em;
  border: 1.5px solid var(--_bd); background: var(--_bg); color: var(--_fg);
  border-radius: var(--radius-sm); cursor: pointer; text-decoration: none;
  letter-spacing: 0.01em; white-space: nowrap;
  transition: background var(--dur-fast) var(--ease-out),
              color var(--dur-fast) var(--ease-out),
              border-color var(--dur-fast) var(--ease-out),
              transform var(--dur-fast) var(--ease-out);
}
.adj-btn svg { width: 1.15em; height: 1.15em; }
.adj-btn--md { font-size: var(--fs-base); padding: 0.78em 1.4em; }
.adj-btn--sm { font-size: var(--fs-sm); padding: 0.6em 1em; }
.adj-btn--lg { font-size: 1.0625rem; padding: 0.95em 1.7em; }
.adj-btn--full { width: 100%; }

.adj-btn--primary { --_bg: var(--blue-500); --_fg:#fff; }
.adj-btn--primary:hover { --_bg: var(--blue-600); }
.adj-btn--primary:active { --_bg: var(--navy-700); transform: translateY(1px); }

.adj-btn--secondary { --_bg: transparent; --_fg: var(--navy-700); --_bd: var(--navy-700); }
.adj-btn--secondary:hover { --_bg: var(--navy-700); --_fg:#fff; }
.adj-btn--secondary:active { --_bg: var(--navy-900); transform: translateY(1px); }

.adj-btn--text { --_bg: transparent; --_fg: var(--blue-500); --_bd: transparent; padding-inline: 0.25em; border-radius: var(--radius-xs); }
.adj-btn--text:hover { --_fg: var(--blue-600); text-decoration: underline; text-underline-offset: 3px; }

.adj-btn--inverse { --_bg:#fff; --_fg: var(--navy-700); }
.adj-btn--inverse:hover { --_bg: var(--ice-100); }

.adj-btn:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.adj-btn[aria-disabled="true"], .adj-btn:disabled {
  opacity: 0.45; pointer-events: none; cursor: not-allowed;
}
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-btn-css')) {
  const s = document.createElement('style');
  s.id = 'adj-btn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Adjustly button. Primary = Adjustly Blue fill (CTAs), secondary = navy outline,
 * text = quiet link-button. Renders an <a> when `href` is set, else a <button>.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  href,
  disabled = false,
  fullWidth = false,
  type = 'button',
  onClick,
  ...rest
}) {
  React.useEffect(() => {
    if (icon && typeof window !== 'undefined' && window.lucide) window.lucide.createIcons();
  }, [icon]);
  const className = ['adj-btn', `adj-btn--${variant}`, `adj-btn--${size}`, fullWidth ? 'adj-btn--full' : '', rest.className || ''].join(' ').trim();
  const iconEl = icon ? /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    "aria-hidden": "true"
  }) : null;
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconPosition === 'left' && iconEl, children && /*#__PURE__*/React.createElement("span", null, children), iconPosition === 'right' && iconEl);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: className,
      onClick: onClick
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: className,
    disabled: disabled,
    "aria-disabled": disabled || undefined,
    onClick: onClick
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.adj-link {
  font-family: var(--font-sans); font-weight: 600; color: var(--blue-500);
  text-decoration: none; display: inline-flex; align-items: center; gap: 0.4em;
  border-bottom: 1.5px solid transparent; padding-bottom: 1px;
  transition: color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out);
}
.adj-link svg { width: 1em; height: 1em; transition: transform var(--dur-fast) var(--ease-out); }
.adj-link:hover { color: var(--blue-600); border-bottom-color: currentColor; }
.adj-link:hover svg { transform: translateX(2px); }
.adj-link:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 3px; border-radius: var(--radius-xs); }
.adj-link--quiet { color: var(--navy-700); }
.adj-link--inverse { color: var(--sky-300); }
.adj-link--inverse:hover { color: #fff; }
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-link-css')) {
  const s = document.createElement('style');
  s.id = 'adj-link-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Inline text link with an optional trailing Lucide arrow that nudges on hover. */
function TextLink({
  children,
  href = '#',
  icon = 'arrow-right',
  variant = 'default',
  ...rest
}) {
  React.useEffect(() => {
    if (icon && typeof window !== 'undefined' && window.lucide) window.lucide.createIcons();
  }, [icon]);
  const cls = ['adj-link', variant !== 'default' ? `adj-link--${variant}` : '', rest.className || ''].join(' ').trim();
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", null, children), icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/cards/ArticleCard.jsx
try { (() => {
const CSS = `
.adj-acard {
  display: flex; flex-direction: column; background: var(--surface-card);
  border: var(--border-1); border-radius: var(--radius-md); overflow: hidden;
  text-decoration: none; color: inherit;
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.adj-acard:hover { border-color: var(--sky-300); box-shadow: var(--shadow-card-hover); }
.adj-acard:hover .adj-acard__title { color: var(--blue-600); }
.adj-acard:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.adj-acard__media {
  aspect-ratio: 16 / 10; background: var(--ice-100); position: relative; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
}
.adj-acard__media img { width: 100%; height: 100%; object-fit: cover; display: block; filter: saturate(0.92); }
.adj-acard__media .adj-acard__ph { width: 46%; opacity: 0.16; }
.adj-acard__body { padding: var(--space-5); display: flex; flex-direction: column; gap: var(--space-3); flex: 1; }
.adj-acard__eyebrow {
  font-family: var(--font-mono); font-size: var(--fs-xs); letter-spacing: var(--ls-eyebrow);
  text-transform: uppercase; color: var(--accent-strong); font-weight: 500;
}
.adj-acard__title { font-family: var(--font-display); font-size: var(--fs-h4); font-weight: 600;
  color: var(--text-brand); line-height: 1.22; margin: 0; font-variation-settings:"opsz" 44;
  transition: color var(--dur-fast) var(--ease-out); text-wrap: balance; }
.adj-acard__excerpt { color: var(--slate-600); font-size: var(--fs-sm); line-height: 1.55; margin: 0; flex: 1; }
.adj-acard__meta { font-family: var(--font-mono); font-size: var(--fs-xs); color: var(--slate-500);
  letter-spacing: 0.04em; display: flex; align-items: center; gap: var(--space-2); }
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-acard-css')) {
  const s = document.createElement('style');
  s.id = 'adj-acard-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Editorial article/guide card. Pass `image` (cool-toned photography URL).
 * When omitted, a low-contrast shield watermark stands in for real imagery.
 */
function ArticleCard({
  category = 'Guide',
  title,
  excerpt,
  readTime,
  image,
  markSrc,
  href = '#'
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "adj-acard",
    href: href
  }, /*#__PURE__*/React.createElement("div", {
    className: "adj-acard__media"
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: ""
  }) : markSrc ? /*#__PURE__*/React.createElement("img", {
    className: "adj-acard__ph",
    src: markSrc,
    alt: ""
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "adj-acard__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "adj-acard__eyebrow"
  }, category), /*#__PURE__*/React.createElement("h3", {
    className: "adj-acard__title"
  }, title), excerpt && /*#__PURE__*/React.createElement("p", {
    className: "adj-acard__excerpt"
  }, excerpt), readTime && /*#__PURE__*/React.createElement("span", {
    className: "adj-acard__meta"
  }, readTime)));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/BenefitCard.jsx
try { (() => {
const CSS = `
.adj-bcard {
  display: flex; flex-direction: column; gap: var(--space-3);
  padding: var(--space-5) 0; border-top: 2px solid var(--navy-700);
}
.adj-bcard__top { display: flex; align-items: center; gap: var(--space-3); }
.adj-bcard__icon { color: var(--blue-500); display: inline-flex; }
.adj-bcard__icon svg { width: 28px; height: 28px; }
.adj-bcard__num {
  font-family: var(--font-mono); font-size: var(--fs-sm); font-weight: 600;
  color: var(--slate-500); letter-spacing: 0.06em;
}
.adj-bcard__title { font-family: var(--font-display); font-size: var(--fs-h4); font-weight: 600;
  color: var(--text-brand); margin: 0; line-height: 1.2; font-variation-settings:"opsz" 40; }
.adj-bcard__body { color: var(--slate-600); margin: 0; font-size: var(--fs-base); line-height: 1.55; }
.adj-bcard--inverse { border-top-color: var(--sky-500); }
.adj-bcard--inverse .adj-bcard__title { color: #fff; }
.adj-bcard--inverse .adj-bcard__body { color: var(--text-on-inverse-muted); }
.adj-bcard--inverse .adj-bcard__icon { color: var(--sky-300); }
.adj-bcard--inverse .adj-bcard__num { color: var(--sky-300); }
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-bcard-css')) {
  const s = document.createElement('style');
  s.id = 'adj-bcard-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Benefit/value card: a top hairline accent rule, an icon OR a step number, title, body. */
function BenefitCard({
  icon,
  number,
  title,
  children,
  inverse = false
}) {
  React.useEffect(() => {
    if (icon && typeof window !== 'undefined' && window.lucide) window.lucide.createIcons();
  }, [icon]);
  return /*#__PURE__*/React.createElement("div", {
    className: `adj-bcard${inverse ? ' adj-bcard--inverse' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "adj-bcard__top"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "adj-bcard__icon"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    "aria-hidden": "true"
  })), number && /*#__PURE__*/React.createElement("span", {
    className: "adj-bcard__num"
  }, number)), /*#__PURE__*/React.createElement("h3", {
    className: "adj-bcard__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "adj-bcard__body"
  }, children));
}
Object.assign(__ds_scope, { BenefitCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/BenefitCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
const CSS = `
.adj-scard {
  display: flex; flex-direction: column; gap: var(--space-4);
  background: var(--surface-card); border: var(--border-1);
  border-radius: var(--radius-md); padding: var(--space-6);
  position: relative; isolation: isolate;
  transition: border-color var(--dur-base) var(--ease-out),
              box-shadow var(--dur-base) var(--ease-out),
              transform var(--dur-base) var(--ease-out);
}
.adj-scard::before {
  content: ""; position: absolute; inset: -1px -1px auto -1px; height: 2px;
  background: var(--sky-500); border-radius: var(--radius-md) var(--radius-md) 0 0;
  transform: scaleX(0); transform-origin: left; opacity: 0;
  transition: transform var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out);
}
.adj-scard:hover { border-color: var(--sky-300); box-shadow: var(--shadow-card-hover); }
.adj-scard:hover::before { transform: scaleX(1); opacity: 1; }
.adj-scard:focus-within { border-color: var(--sky-300); }
.adj-scard__icon {
  width: 52px; height: 52px; display: inline-flex; align-items: center; justify-content: center;
  border: 1.5px solid var(--navy-700); border-radius: var(--radius-sm); color: var(--navy-700);
  background: var(--ice-100);
}
.adj-scard__icon svg { width: 26px; height: 26px; }
.adj-scard__title { font-family: var(--font-display); font-size: var(--fs-h4); color: var(--text-brand);
  font-weight: 600; line-height: 1.2; margin: 0; font-variation-settings: "opsz" 48; }
.adj-scard__body { color: var(--slate-600); font-size: var(--fs-base); line-height: 1.55; margin: 0; flex: 1; }
.adj-scard__foot { margin-top: var(--space-2); }
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-scard-css')) {
  const s = document.createElement('style');
  s.id = 'adj-scard-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Service offering card: icon tile, serif title, description, optional link. */
function ServiceCard({
  icon = 'shield-check',
  title,
  children,
  href,
  linkLabel = 'Learn more'
}) {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("article", {
    className: "adj-scard"
  }, /*#__PURE__*/React.createElement("span", {
    className: "adj-scard__icon"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "adj-scard__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "adj-scard__body"
  }, children), href && /*#__PURE__*/React.createElement("div", {
    className: "adj-scard__foot"
  }, /*#__PURE__*/React.createElement("a", {
    className: "adj-link",
    href: href
  }, /*#__PURE__*/React.createElement("span", null, linkLabel), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    "aria-hidden": "true"
  }))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/SpecialtyCard.jsx
try { (() => {
const CSS = `
.adj-spec {
  display: flex; gap: var(--space-4); align-items: flex-start;
  background: var(--surface-card); border: var(--border-1); border-left: 3px solid var(--sky-500);
  border-radius: var(--radius-sm); padding: var(--space-5);
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.adj-spec:hover { box-shadow: var(--shadow-sm); border-left-color: var(--blue-500); }
.adj-spec__icon { color: var(--blue-500); flex: none; margin-top: 2px; }
.adj-spec__icon svg { width: 26px; height: 26px; }
.adj-spec__title { font-family: var(--font-sans); font-weight: 600; font-size: var(--fs-base);
  color: var(--text-brand); margin: 0 0 var(--space-1); letter-spacing: 0.005em; }
.adj-spec__body { color: var(--slate-600); font-size: var(--fs-sm); line-height: 1.5; margin: 0; }
.adj-spec__tag { display: inline-block; margin-top: var(--space-3);
  font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--slate-500); border: var(--border-1); border-radius: var(--radius-pill);
  padding: 3px 10px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-spec-css')) {
  const s = document.createElement('style');
  s.id = 'adj-spec-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Network-specialty card: a peril/specialty the restoration network covers. */
function SpecialtyCard({
  icon = 'shield-check',
  title,
  children,
  tag
}) {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "adj-spec"
  }, /*#__PURE__*/React.createElement("span", {
    className: "adj-spec__icon"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "adj-spec__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "adj-spec__body"
  }, children), tag && /*#__PURE__*/React.createElement("span", {
    className: "adj-spec__tag"
  }, tag)));
}
Object.assign(__ds_scope, { SpecialtyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/SpecialtyCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.adj-badge {
  display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-mono);
  font-size: var(--fs-xs); font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase;
  padding: 4px 10px; border-radius: var(--radius-pill); border: 1px solid transparent; line-height: 1.3;
}
.adj-badge svg { width: 13px; height: 13px; }
.adj-badge--neutral { background: var(--ice-100); color: var(--navy-700); border-color: var(--ice-200); }
.adj-badge--brand   { background: var(--navy-700); color: #fff; }
.adj-badge--accent  { background: transparent; color: var(--blue-600); border-color: var(--sky-300); }
.adj-badge--success { background: var(--success-100); color: var(--success-600); }
.adj-badge--warning { background: var(--warning-100); color: var(--warning-600); }
.adj-badge--danger  { background: var(--danger-100); color: var(--danger-600); }
.adj-badge--outline { background: transparent; color: var(--slate-600); border-color: var(--line-200); }
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-badge-css')) {
  const s = document.createElement('style');
  s.id = 'adj-badge-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Small status / category badge. Mono, uppercase, pill. */
function Badge({
  children,
  variant = 'neutral',
  icon,
  ...rest
}) {
  React.useEffect(() => {
    if (icon && typeof window !== 'undefined' && window.lucide) window.lucide.createIcons();
  }, [icon]);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `adj-badge adj-badge--${variant}`
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/DisclaimerCallout.jsx
try { (() => {
const CSS = `
.adj-disc {
  display: flex; gap: var(--space-3); align-items: flex-start;
  background: var(--surface-page); border: var(--border-1); border-left: 3px solid var(--slate-500);
  border-radius: var(--radius-sm); padding: var(--space-4) var(--space-5);
  font-size: var(--fs-sm); color: var(--slate-600); line-height: 1.55;
}
.adj-disc__icon { color: var(--slate-500); flex: none; margin-top: 1px; }
.adj-disc__icon svg { width: 18px; height: 18px; }
.adj-disc__title { font-family: var(--font-sans); font-weight: 600; color: var(--text-brand);
  font-size: var(--fs-sm); margin: 0 0 3px; }
.adj-disc p { margin: 0; }
.adj-disc a { color: var(--blue-500); }
.adj-disc--info { border-left-color: var(--blue-500); }
.adj-disc--info .adj-disc__icon { color: var(--blue-500); }
.adj-disc--warning { border-left-color: var(--warning-600); background: var(--warning-100); }
.adj-disc--warning .adj-disc__icon { color: var(--warning-600); }
.adj-disc--inverse { background: var(--navy-800); border-color: var(--border-on-inverse);
  border-left-color: var(--sky-500); color: var(--text-on-inverse-muted); }
.adj-disc--inverse .adj-disc__title { color: #fff; }
.adj-disc--inverse .adj-disc__icon { color: var(--sky-300); }
.adj-disc--inverse a { color: var(--sky-300); }
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-disc-css')) {
  const s = document.createElement('style');
  s.id = 'adj-disc-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const ICONS = {
  default: 'info',
  info: 'info',
  warning: 'alert-triangle',
  inverse: 'shield'
};

/**
 * Compliance disclaimer / fine-print callout. Use wherever claims advice appears:
 * "represents owners not insurers", "educational, not legal advice", "free, no obligation".
 */
function DisclaimerCallout({
  title,
  children,
  variant = 'default',
  icon
}) {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.lucide) window.lucide.createIcons();
  });
  const ic = icon || ICONS[variant] || 'info';
  return /*#__PURE__*/React.createElement("div", {
    className: `adj-disc adj-disc--${variant}`,
    role: "note"
  }, /*#__PURE__*/React.createElement("span", {
    className: "adj-disc__icon"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("p", {
    className: "adj-disc__title"
  }, title), /*#__PURE__*/React.createElement("p", null, children)));
}
Object.assign(__ds_scope, { DisclaimerCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/DisclaimerCallout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/LicenseBadge.jsx
try { (() => {
const CSS = `
.adj-licbadge {
  display: inline-flex; align-items: center; gap: var(--space-3);
  background: var(--success-100); border: 1px solid #BFE0CE; border-radius: var(--radius-sm);
  padding: 10px 14px; color: var(--success-600);
}
.adj-licbadge__mark { width: 30px; height: 30px; flex: none; display:flex; align-items:center; justify-content:center;
  background: var(--success-600); border-radius: 50%; color: #fff; }
.adj-licbadge__mark svg { width: 18px; height: 18px; }
.adj-licbadge__text { display:flex; flex-direction: column; line-height: 1.2; }
.adj-licbadge__lead { font-family: var(--font-sans); font-weight: 600; font-size: var(--fs-sm); color: var(--success-600); }
.adj-licbadge__num { font-family: var(--font-mono); font-size: var(--fs-xs); letter-spacing: 0.04em; color: var(--slate-600); }
.adj-licbadge--inverse { background: rgba(30,122,85,0.16); border-color: rgba(120,200,160,0.4); }
.adj-licbadge--inverse .adj-licbadge__lead { color: #9BE3C0; }
.adj-licbadge--inverse .adj-licbadge__num { color: var(--text-on-inverse-muted); }
.adj-licbadge--compact { padding: 6px 10px; }
.adj-licbadge--compact .adj-licbadge__mark { width: 22px; height: 22px; }
.adj-licbadge--compact .adj-licbadge__mark svg { width: 14px; height: 14px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-licbadge-css')) {
  const s = document.createElement('style');
  s.id = 'adj-licbadge-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * "License Verified" trust badge. Pass the real license number + jurisdiction.
 * Never display unless the license is genuinely verifiable.
 */
function LicenseBadge({
  number = 'PA-1098842',
  state = 'Licensed Public Adjuster',
  inverse = false,
  compact = false
}) {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("span", {
    className: `adj-licbadge${inverse ? ' adj-licbadge--inverse' : ''}${compact ? ' adj-licbadge--compact' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "adj-licbadge__mark"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "badge-check",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("span", {
    className: "adj-licbadge__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "adj-licbadge__lead"
  }, "License verified"), /*#__PURE__*/React.createElement("span", {
    className: "adj-licbadge__num"
  }, state, " \xB7 Lic #", number)));
}
Object.assign(__ds_scope, { LicenseBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/LicenseBadge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.adj-field { display: flex; flex-direction: column; gap: 6px; }
.adj-field__label { font-family: var(--font-sans); font-size: var(--fs-sm); font-weight: 600;
  color: var(--text-brand); letter-spacing: 0.005em; }
.adj-field__req { color: var(--blue-500); margin-left: 2px; }
.adj-field__opt { color: var(--slate-500); font-weight: 400; font-size: var(--fs-xs); margin-left: 4px; }
.adj-field__control {
  font-family: var(--font-sans); font-size: var(--fs-base); color: var(--text-primary);
  background: var(--white); border: 1px solid var(--slate-300); border-radius: var(--radius-sm);
  padding: 0.72em 0.85em; width: 100%; line-height: 1.4;
  transition: border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
}
textarea.adj-field__control { resize: vertical; min-height: 120px; }
select.adj-field__control { appearance: none; background-image:
  url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round'><path d='M4 6l4 4 4-4'/></svg>");
  background-repeat: no-repeat; background-position: right 0.85em center; padding-right: 2.4em; }
.adj-field__control::placeholder { color: var(--slate-500); }
.adj-field__control:hover { border-color: var(--slate-500); }
.adj-field__control:focus { outline: none; border-color: var(--blue-500); box-shadow: var(--focus-shadow); }
.adj-field--error .adj-field__control { border-color: var(--danger-600); }
.adj-field--error .adj-field__control:focus { box-shadow: 0 0 0 3px rgba(180,35,24,0.18); }
.adj-field__hint { font-size: var(--fs-xs); color: var(--slate-500); line-height: 1.45; }
.adj-field__error { font-size: var(--fs-xs); color: var(--danger-600); font-weight: 500; display:flex; gap:5px; align-items:center; }
.adj-field__error svg { width: 14px; height: 14px; }
.adj-field--inverse .adj-field__label { color: #fff; }
.adj-field--inverse .adj-field__control { background: rgba(255,255,255,0.06); border-color: var(--border-on-inverse); color: #fff; }
.adj-field--inverse .adj-field__control::placeholder { color: #8AA3BF; }
.adj-field--inverse .adj-field__hint { color: var(--text-on-inverse-muted); }
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-field-css')) {
  const s = document.createElement('style');
  s.id = 'adj-field-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _id = 0;
/** Labelled form field wrapping input / textarea / select, with hint + error. */
function Field({
  label,
  type = 'text',
  as = 'input',
  name,
  placeholder,
  value,
  defaultValue,
  onChange,
  required = false,
  optional = false,
  hint,
  error,
  options = [],
  children,
  inverse = false,
  autoComplete,
  ...rest
}) {
  React.useEffect(() => {
    if (error && typeof window !== 'undefined' && window.lucide) window.lucide.createIcons();
  }, [error]);
  const id = React.useMemo(() => name || `adj-f-${++_id}`, [name]);
  const cls = `adj-field${error ? ' adj-field--error' : ''}${inverse ? ' adj-field--inverse' : ''}`;
  const shared = {
    id,
    name,
    value,
    defaultValue,
    onChange,
    placeholder,
    'aria-invalid': !!error,
    'aria-describedby': error ? `${id}-err` : hint ? `${id}-hint` : undefined,
    className: 'adj-field__control',
    autoComplete,
    ...rest
  };
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "adj-field__label",
    htmlFor: id
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "adj-field__req",
    "aria-hidden": "true"
  }, "*"), optional && /*#__PURE__*/React.createElement("span", {
    className: "adj-field__opt"
  }, "(optional)")), as === 'textarea' ? /*#__PURE__*/React.createElement("textarea", _extends({}, shared, {
    required: required
  })) : as === 'select' ? /*#__PURE__*/React.createElement("select", _extends({}, shared, {
    required: required
  }), children || options.map(o => /*#__PURE__*/React.createElement("option", {
    key: typeof o === 'string' ? o : o.value,
    value: typeof o === 'string' ? o : o.value
  }, typeof o === 'string' ? o : o.label))) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, shared, {
    required: required
  })), hint && !error && /*#__PURE__*/React.createElement("span", {
    className: "adj-field__hint",
    id: `${id}-hint`
  }, hint), error && /*#__PURE__*/React.createElement("span", {
    className: "adj-field__error",
    id: `${id}-err`
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "alert-circle",
    "aria-hidden": "true"
  }), error));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/LeadForm.jsx
try { (() => {
const CSS = `
.adj-leadform {
  background: var(--surface-card); border: var(--border-1); border-radius: var(--radius-lg);
  padding: clamp(20px, 3vw, 36px); box-shadow: var(--shadow-md);
}
.adj-leadform--inverse { background: var(--navy-800); border-color: var(--border-on-inverse); box-shadow: none; }
.adj-leadform__eyebrow { font-family: var(--font-mono); font-size: var(--fs-xs); letter-spacing: var(--ls-eyebrow);
  text-transform: uppercase; color: var(--accent-strong); display:flex; align-items:center; gap:8px; margin-bottom: 10px; }
.adj-leadform--inverse .adj-leadform__eyebrow { color: var(--sky-300); }
.adj-leadform__title { font-family: var(--font-display); font-size: var(--fs-h3); font-weight: 600; color: var(--text-brand);
  margin: 0 0 6px; line-height: 1.15; }
.adj-leadform--inverse .adj-leadform__title { color: #fff; }
.adj-leadform__sub { color: var(--slate-600); margin: 0 0 var(--space-5); font-size: var(--fs-base); }
.adj-leadform--inverse .adj-leadform__sub { color: var(--text-on-inverse-muted); }
.adj-leadform__grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }
.adj-leadform__grid > .adj-field--full { grid-column: 1 / -1; }
.adj-leadform__actions { margin-top: var(--space-5); display: flex; flex-direction: column; gap: var(--space-3); }
.adj-leadform__note { font-size: var(--fs-xs); color: var(--slate-500); line-height: 1.5; }
.adj-leadform--inverse .adj-leadform__note { color: var(--text-on-inverse-muted); }
.adj-leadform__note a { color: var(--blue-500); }
.adj-leadform--inverse .adj-leadform__note a { color: var(--sky-300); }
@media (max-width: 560px){ .adj-leadform__grid { grid-template-columns: 1fr; } }
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-leadform-css')) {
  const s = document.createElement('style');
  s.id = 'adj-leadform-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Lead-capture module. Free policy review by default. Composes Field + Button.
 * Keep "free" genuinely free; include the privacy/no-obligation note.
 */
function LeadForm({
  eyebrow = 'Free policy review',
  title = 'See what your policy really owes you',
  subtitle = 'Send a few details and a licensed public adjuster will review your situation — free, with no obligation.',
  submitLabel = 'Request my free review',
  inverse = false,
  note,
  onSubmit
}) {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.lucide) window.lucide.createIcons();
  });
  const handle = e => {
    e.preventDefault();
    onSubmit && onSubmit(e);
  };
  return /*#__PURE__*/React.createElement("form", {
    className: `adj-leadform${inverse ? ' adj-leadform--inverse' : ''}`,
    onSubmit: handle,
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "adj-leadform__eyebrow"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shield-check",
    "aria-hidden": "true"
  }), eyebrow), /*#__PURE__*/React.createElement("h3", {
    className: "adj-leadform__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "adj-leadform__sub"
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    className: "adj-leadform__grid"
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Full name",
    name: "name",
    autoComplete: "name",
    required: true,
    inverse: inverse,
    placeholder: "Jordan Rivera"
  }), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Phone",
    name: "phone",
    type: "tel",
    autoComplete: "tel",
    required: true,
    inverse: inverse,
    placeholder: "(555) 010-2837"
  }), /*#__PURE__*/React.createElement("div", {
    className: "adj-field--full",
    style: {
      display: 'contents'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Email",
    name: "email",
    type: "email",
    autoComplete: "email",
    required: true,
    inverse: inverse,
    placeholder: "you@email.com"
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Type of damage",
    name: "peril",
    as: "select",
    required: true,
    inverse: inverse,
    options: ['Select one', 'Storm / hurricane', 'Water / flood', 'Fire / smoke', 'Roof / structural', 'Other']
  }), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "ZIP code",
    name: "zip",
    autoComplete: "postal-code",
    inverse: inverse,
    placeholder: "33101"
  }), /*#__PURE__*/React.createElement("div", {
    className: "adj-field--full",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Tell us what happened",
    name: "details",
    as: "textarea",
    optional: true,
    inverse: inverse,
    placeholder: "A storm took part of the roof last night and water is coming into the upstairs bedrooms\u2026",
    hint: "The more detail you share, the better we can prepare."
  }))), /*#__PURE__*/React.createElement("div", {
    className: "adj-leadform__actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: inverse ? 'inverse' : 'primary',
    size: "lg",
    fullWidth: true,
    icon: "arrow-right",
    iconPosition: "right"
  }, submitLabel), /*#__PURE__*/React.createElement("p", {
    className: "adj-leadform__note"
  }, note || /*#__PURE__*/React.createElement(React.Fragment, null, "Free and no obligation. By submitting you agree to our ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "privacy policy"), ". This is not legal advice."))));
}
Object.assign(__ds_scope, { LeadForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/LeadForm.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FaqAccordion.jsx
try { (() => {
const CSS = `
.adj-faq { border-top: var(--border-1); }
.adj-faq__item { border-bottom: var(--border-1); }
.adj-faq__btn { width: 100%; background: none; border: 0; cursor: pointer; text-align: left;
  display: flex; align-items: flex-start; justify-content: space-between; gap: var(--space-4);
  padding: var(--space-5) 0; font-family: var(--font-display); font-weight: 600; font-size: var(--fs-h4);
  color: var(--text-brand); line-height: 1.28; font-variation-settings:"opsz" 36; }
.adj-faq__btn:hover { color: var(--blue-600); }
.adj-faq__btn:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 3px; border-radius: var(--radius-xs); }
.adj-faq__icon { flex: none; width: 30px; height: 30px; border: 1px solid var(--line-200); border-radius: var(--radius-sm);
  display: flex; align-items: center; justify-content: center; color: var(--blue-500); margin-top: 3px;
  transition: transform var(--dur-base) var(--ease-out), background var(--dur-fast), border-color var(--dur-fast); }
.adj-faq__icon svg { width: 18px; height: 18px; }
.adj-faq__item--open .adj-faq__icon { transform: rotate(45deg); background: var(--ice-100); border-color: var(--sky-300); }
.adj-faq__panel { overflow: hidden; height: 0; transition: height var(--dur-base) var(--ease-out); }
.adj-faq__panel-inner { padding: 0 calc(30px + var(--space-4)) var(--space-5) 0; color: var(--slate-600);
  font-size: var(--fs-base); line-height: 1.62; max-width: 64ch; }
.adj-faq__panel-inner p { margin: 0 0 0.7em; }
.adj-faq__panel-inner p:last-child { margin-bottom: 0; }
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-faq-css')) {
  const s = document.createElement('style');
  s.id = 'adj-faq-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function FaqItem({
  q,
  a,
  open,
  onToggle,
  id
}) {
  const panelRef = React.useRef(null);
  const [h, setH] = React.useState(0);
  React.useEffect(() => {
    setH(open && panelRef.current ? panelRef.current.scrollHeight : 0);
  }, [open, a]);
  return /*#__PURE__*/React.createElement("div", {
    className: `adj-faq__item${open ? ' adj-faq__item--open' : ''}`
  }, /*#__PURE__*/React.createElement("button", {
    className: "adj-faq__btn",
    "aria-expanded": open,
    "aria-controls": `${id}-panel`,
    id: `${id}-btn`,
    onClick: onToggle
  }, /*#__PURE__*/React.createElement("span", null, q), /*#__PURE__*/React.createElement("span", {
    className: "adj-faq__icon"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plus",
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "adj-faq__panel",
    id: `${id}-panel`,
    role: "region",
    "aria-labelledby": `${id}-btn`,
    style: {
      height: h
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "adj-faq__panel-inner",
    ref: panelRef
  }, typeof a === 'string' ? /*#__PURE__*/React.createElement("p", null, a) : a)));
}

/** Accessible single-or-multi-open FAQ accordion. Keyboard + ARIA wired. */
function FaqAccordion({
  items = [],
  allowMultiple = false,
  defaultOpen = []
}) {
  const [openSet, setOpenSet] = React.useState(() => new Set(defaultOpen));
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const toggle = i => setOpenSet(prev => {
    const next = new Set(allowMultiple ? prev : []);
    if (prev.has(i)) next.delete(i);else next.add(i);
    return next;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "adj-faq"
  }, items.map((it, i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: i,
    id: `adj-faq-${i}`,
    q: it.q,
    a: it.a,
    open: openSet.has(i),
    onToggle: () => toggle(i)
  })));
}
Object.assign(__ds_scope, { FaqAccordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FaqAccordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ProcessTracker.jsx
try { (() => {
const CSS = `
.adj-track { display: grid; gap: var(--space-5); }
.adj-track--horizontal { grid-auto-flow: column; grid-auto-columns: 1fr; }
.adj-track__step { position: relative; display: flex; gap: var(--space-4); }
.adj-track--horizontal .adj-track__step { flex-direction: column; }
.adj-track__rail { flex: none; display: flex; flex-direction: column; align-items: center; }
.adj-track--horizontal .adj-track__rail { flex-direction: row; width: 100%; }
.adj-track__dot { width: 44px; height: 44px; flex: none; border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-family: var(--font-mono); font-weight: 600; font-size: var(--fs-sm);
  border: 1.5px solid var(--navy-700); color: var(--navy-700); background: #fff; z-index: 1; }
.adj-track__dot svg { width: 20px; height: 20px; }
.adj-track__line { flex: 1; background: var(--line-200); }
.adj-track--vertical .adj-track__line { width: 2px; min-height: 18px; margin: 4px 0; }
.adj-track--horizontal .adj-track__line { height: 2px; margin: 0 8px; align-self: center; }
.adj-track__step--done .adj-track__dot { background: var(--navy-700); color: #fff; }
.adj-track__step--active .adj-track__dot { border-color: var(--blue-500); color: var(--blue-500);
  box-shadow: 0 0 0 4px rgba(46,108,166,0.14); }
.adj-track__step--done .adj-track__line, .adj-track__step--active .adj-track__line { background: var(--blue-500); }
.adj-track__body { padding-bottom: var(--space-3); }
.adj-track--horizontal .adj-track__body { padding-bottom: 0; padding-top: var(--space-3); }
.adj-track__eyebrow { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--slate-500); margin-bottom: 4px; }
.adj-track__title { font-family: var(--font-display); font-weight: 600; font-size: var(--fs-h4); color: var(--text-brand);
  margin: 0 0 6px; line-height: 1.2; font-variation-settings:"opsz" 36; }
.adj-track__desc { color: var(--slate-600); font-size: var(--fs-sm); line-height: 1.55; margin: 0; max-width: 42ch; }
.adj-track--inverse .adj-track__dot { background: transparent; border-color: var(--sky-500); color: var(--sky-300); }
.adj-track--inverse .adj-track__step--done .adj-track__dot { background: var(--sky-500); color: var(--navy-900); }
.adj-track--inverse .adj-track__line { background: var(--border-on-inverse); }
.adj-track--inverse .adj-track__title { color: #fff; }
.adj-track--inverse .adj-track__desc { color: var(--text-on-inverse-muted); }
.adj-track--inverse .adj-track__eyebrow { color: var(--sky-300); }
@media (max-width: 760px){ .adj-track--horizontal { grid-auto-flow: row; grid-auto-columns: auto; }
  .adj-track--horizontal .adj-track__step { flex-direction: row; }
  .adj-track--horizontal .adj-track__rail { flex-direction: column; width: auto; }
  .adj-track--horizontal .adj-track__line { width: 2px; height: auto; min-height: 18px; margin: 4px 0; }
  .adj-track--horizontal .adj-track__body { padding-top: 0; padding-bottom: var(--space-3); } }
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-track-css')) {
  const s = document.createElement('style');
  s.id = 'adj-track-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Process / step tracker. Steps: {eyebrow,title,desc,icon}. `current` index marks active. */
function ProcessTracker({
  steps = [],
  current = 0,
  orientation = 'vertical',
  inverse = false
}) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    className: `adj-track adj-track--${orientation}${inverse ? ' adj-track--inverse' : ''}`
  }, steps.map((s, i) => {
    const state = i < current ? 'done' : i === current ? 'active' : 'todo';
    return /*#__PURE__*/React.createElement("div", {
      className: `adj-track__step adj-track__step--${state}`,
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "adj-track__rail"
    }, /*#__PURE__*/React.createElement("span", {
      className: "adj-track__dot"
    }, state === 'done' ? /*#__PURE__*/React.createElement("i", {
      "data-lucide": "check",
      "aria-hidden": "true"
    }) : s.icon ? /*#__PURE__*/React.createElement("i", {
      "data-lucide": s.icon,
      "aria-hidden": "true"
    }) : String(i + 1).padStart(2, '0')), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      className: "adj-track__line"
    })), /*#__PURE__*/React.createElement("div", {
      className: "adj-track__body"
    }, s.eyebrow && /*#__PURE__*/React.createElement("div", {
      className: "adj-track__eyebrow"
    }, s.eyebrow), /*#__PURE__*/React.createElement("h4", {
      className: "adj-track__title"
    }, s.title), s.desc && /*#__PURE__*/React.createElement("p", {
      className: "adj-track__desc"
    }, s.desc)));
  }));
}
Object.assign(__ds_scope, { ProcessTracker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ProcessTracker.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
const CSS = `
.adj-footer { background: var(--navy-900); color: var(--text-on-inverse-muted); }
.adj-footer__inner { max-width: var(--container-wide); margin-inline: auto; padding: var(--space-9) var(--gutter) var(--space-6); }
.adj-footer__top { display: grid; grid-template-columns: 1.6fr repeat(3, 1fr); gap: var(--space-7); }
.adj-footer__brand img { height: 40px; width: auto; display: block; margin-bottom: var(--space-4); }
.adj-footer__tag { color: var(--text-on-inverse-muted); max-width: 34ch; font-size: var(--fs-sm); line-height: 1.6; margin: 0 0 var(--space-5); }
.adj-footer__col h4 { font-family: var(--font-mono); font-size: var(--fs-xs); letter-spacing: var(--ls-eyebrow);
  text-transform: uppercase; color: var(--sky-300); font-weight: 500; margin: 0 0 var(--space-4); }
.adj-footer__col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: var(--space-3); }
.adj-footer__col a { color: #C7D6E6; text-decoration: none; font-size: var(--fs-sm);
  transition: color var(--dur-fast) var(--ease-out); }
.adj-footer__col a:hover { color: #fff; }
.adj-footer__rule { border: 0; border-top: 1px solid var(--border-on-inverse); margin: var(--space-7) 0 var(--space-5); }
.adj-footer__disc { font-size: var(--fs-xs); line-height: 1.7; color: #8AA3BF; max-width: 90ch; margin: 0 0 var(--space-5); }
.adj-footer__bottom { display: flex; flex-wrap: wrap; gap: var(--space-4); align-items: center; justify-content: space-between; }
.adj-footer__legal { display: flex; gap: var(--space-5); flex-wrap: wrap; }
.adj-footer__legal a { color: #8AA3BF; text-decoration: none; font-size: var(--fs-xs); }
.adj-footer__legal a:hover { color: #fff; }
.adj-footer__copy { font-size: var(--fs-xs); color: #6F88A4; font-family: var(--font-mono); letter-spacing: 0.03em; }
@media (max-width: 820px){ .adj-footer__top { grid-template-columns: 1fr 1fr; } .adj-footer__brand { grid-column: 1 / -1; } }
@media (max-width: 520px){ .adj-footer__top { grid-template-columns: 1fr; } }
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-footer-css')) {
  const s = document.createElement('style');
  s.id = 'adj-footer-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const DEFAULT_COLS = [{
  title: 'Company',
  links: [['How it works', '#'], ['Our network', '#'], ['About us', '#'], ['Careers', '#'], ['Contact', '#']]
}, {
  title: 'Services',
  links: [['Storm & hurricane', '#'], ['Water & flood', '#'], ['Fire & smoke', '#'], ['Roof & structural', '#']]
}, {
  title: 'Learn',
  links: [['Claim guides', '#'], ['Before a loss', '#'], ['Glossary', '#'], ['FAQ', '#']]
}];

/** Navy site footer using the white logo lockup, with a verifiable license badge + disclaimer. */
function SiteFooter({
  logoSrc = 'assets/logo/adjustly-logo-white.png',
  tagline = 'Licensed public adjusters and a nationwide restoration network who represent property owners — never insurance companies.',
  columns = DEFAULT_COLS,
  licenseNumber = 'PA-1098842',
  licenseState = 'Florida Public Adjuster',
  disclaimer
}) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const year = new Date().getFullYear();
  return /*#__PURE__*/React.createElement("footer", {
    className: "adj-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "adj-footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "adj-footer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "adj-footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Adjustly \u2014 Property Damage Advocacy Group"
  }), /*#__PURE__*/React.createElement("p", {
    className: "adj-footer__tag"
  }, tagline), /*#__PURE__*/React.createElement(__ds_scope.LicenseBadge, {
    inverse: true,
    number: licenseNumber,
    state: licenseState
  })), columns.map(c => /*#__PURE__*/React.createElement("div", {
    className: "adj-footer__col",
    key: c.title
  }, /*#__PURE__*/React.createElement("h4", null, c.title), /*#__PURE__*/React.createElement("ul", null, c.links.map(([label, href]) => /*#__PURE__*/React.createElement("li", {
    key: label
  }, /*#__PURE__*/React.createElement("a", {
    href: href
  }, label))))))), /*#__PURE__*/React.createElement("hr", {
    className: "adj-footer__rule"
  }), /*#__PURE__*/React.createElement("p", {
    className: "adj-footer__disc"
  }, disclaimer || `Adjustly Property Damage Advocacy Group represents property owners and policyholders only — never insurance companies. Public-adjusting services are provided by the licensed public adjuster named above; advocacy and experience are attributed to the licensed principal and our second-generation family of adjusters. Content on this site is educational and is not legal advice. We do not guarantee any claim outcome. Free services are provided at no cost and with no obligation.`), /*#__PURE__*/React.createElement("div", {
    className: "adj-footer__bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "adj-footer__legal"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Privacy policy"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Terms of use"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Licensing & disclosures"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Accessibility")), /*#__PURE__*/React.createElement("span", {
    className: "adj-footer__copy"
  }, "\xA9 ", year, " Adjustly PDAG"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
const CSS = `
.adj-header { position: sticky; top: 0; z-index: var(--z-header); background: rgba(255,255,255,0.92);
  border-bottom: var(--border-1); transition: box-shadow var(--dur-base) var(--ease-out), background var(--dur-base); }
@supports (backdrop-filter: blur(8px)) { .adj-header { backdrop-filter: saturate(1.1) blur(10px); } }
.adj-header--scrolled { box-shadow: var(--shadow-sm); }
.adj-header__bar { max-width: var(--container-wide); margin-inline: auto; padding: 0 var(--gutter);
  height: 74px; display: flex; align-items: center; gap: var(--space-6); }
.adj-header__logo { display: inline-flex; align-items: center; flex: none; }
.adj-header__logo img { height: 34px; width: auto; display: block; }
.adj-header__nav { display: flex; align-items: center; gap: var(--space-6); margin-left: var(--space-4); }
.adj-header__link { font-family: var(--font-sans); font-weight: 500; font-size: var(--fs-sm); color: var(--navy-700);
  text-decoration: none; padding: 6px 0; position: relative; letter-spacing: 0.005em; }
.adj-header__link::after { content:""; position:absolute; left:0; right:0; bottom:-2px; height:2px; background: var(--sky-500);
  transform: scaleX(0); transform-origin: left; transition: transform var(--dur-fast) var(--ease-out); }
.adj-header__link:hover { color: var(--blue-600); }
.adj-header__link:hover::after, .adj-header__link[aria-current="page"]::after { transform: scaleX(1); }
.adj-header__spacer { flex: 1; }
.adj-header__actions { display: flex; align-items: center; gap: var(--space-4); flex: none; }
.adj-header__phone { font-family: var(--font-mono); font-size: var(--fs-sm); font-weight: 500; color: var(--navy-700);
  text-decoration: none; display: inline-flex; align-items: center; gap: 6px; }
.adj-header__phone:hover { color: var(--blue-600); }
.adj-header__phone svg { width: 16px; height: 16px; }
.adj-header__burger { display: none; background: none; border: 1px solid var(--line-200); border-radius: var(--radius-sm);
  width: 42px; height: 42px; align-items: center; justify-content: center; color: var(--navy-700); cursor: pointer; }
.adj-header__burger svg { width: 22px; height: 22px; }
.adj-header__mobile { display: none; border-top: var(--border-1); background: #fff; padding: var(--space-4) var(--gutter) var(--space-6); }
.adj-header__mobile a { display: block; padding: 12px 0; font-weight: 500; color: var(--navy-700);
  text-decoration: none; border-bottom: var(--border-1); }
.adj-header__mobile .adj-btn { margin-top: var(--space-4); }
@media (max-width: 900px) {
  .adj-header__nav, .adj-header__phone, .adj-header__actions .adj-btn { display: none; }
  .adj-header__burger { display: inline-flex; }
  .adj-header__mobile--open { display: block; }
}
/* Dropdown nav (added for full-site IA) */
.adj-header__navitem { position: relative; display: inline-flex; align-items: center; }
.adj-header__navitem > .adj-header__link { display: inline-flex; align-items: center; gap: 4px; }
.adj-header__navitem > .adj-header__link svg { width: 14px; height: 14px; opacity: 0.65; transition: transform var(--dur-fast) var(--ease-out); }
.adj-header__navitem:hover > .adj-header__link svg, .adj-header__navitem:focus-within > .adj-header__link svg { transform: rotate(180deg); }
.adj-header__dropdown { position: absolute; top: calc(100% + 8px); left: 0; min-width: 256px; background: #fff;
  border: var(--border-1); border-radius: var(--radius-md); box-shadow: var(--shadow-lg); padding: var(--space-2);
  display: flex; flex-direction: column; gap: 2px; opacity: 0; visibility: hidden; transform: translateY(-6px);
  transition: opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), visibility var(--dur-fast); z-index: 20; }
.adj-header__navitem:hover .adj-header__dropdown, .adj-header__navitem:focus-within .adj-header__dropdown { opacity: 1; visibility: visible; transform: translateY(0); }
.adj-header__dropitem { display: block; padding: 10px 12px; border-radius: var(--radius-sm); font-size: var(--fs-sm);
  font-weight: 500; color: var(--navy-700); text-decoration: none; white-space: nowrap; transition: background var(--dur-fast), color var(--dur-fast); }
.adj-header__dropitem:hover { background: var(--surface-tint); color: var(--blue-600); }
.adj-header__mgroup { border-bottom: var(--border-1); }
.adj-header__mgroup > a:first-child { font-weight: 700; color: var(--navy-900) !important; }
.adj-header__mgroup .adj-header__mchild { border-bottom: 0 !important; padding: 8px 0 8px 16px !important; color: var(--slate-600) !important; font-weight: 500; }
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-header-css')) {
  const s = document.createElement('style');
  s.id = 'adj-header-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const DEFAULT_LINKS = [{
  label: 'How it works',
  href: '#how'
}, {
  label: 'Services',
  href: '#services'
}, {
  label: 'Learn',
  href: '#learn'
}, {
  label: 'Our network',
  href: '#network'
}, {
  label: 'About',
  href: '#about'
}];

/** Sticky marketing header: logo, nav, phone, primary CTA, mobile menu. */
function SiteHeader({
  logoSrc = 'assets/logo/adjustly-logo-navy.png',
  links = DEFAULT_LINKS,
  phone = '(800) 555-0142',
  ctaLabel = 'Free policy review',
  ctaHref = '#start',
  currentHref
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    if (window.lucide) window.lucide.createIcons();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [open]);
  return /*#__PURE__*/React.createElement("header", {
    className: `adj-header${scrolled ? ' adj-header--scrolled' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "adj-header__bar"
  }, /*#__PURE__*/React.createElement("a", {
    className: "adj-header__logo",
    href: "#top",
    "aria-label": "Adjustly home"
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Adjustly"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "adj-header__nav",
    "aria-label": "Primary"
  }, links.map(l => l.children ? /*#__PURE__*/React.createElement("div", {
    key: l.label,
    className: "adj-header__navitem"
  }, /*#__PURE__*/React.createElement("a", {
    className: "adj-header__link",
    href: l.href
  }, l.label, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "adj-header__dropdown"
  }, l.children.map(c => /*#__PURE__*/React.createElement("a", {
    key: c.href,
    className: "adj-header__dropitem",
    href: c.href
  }, c.label)))) : /*#__PURE__*/React.createElement("a", {
    key: l.href,
    className: "adj-header__link",
    href: l.href,
    "aria-current": currentHref === l.href ? 'page' : undefined
  }, l.label))), /*#__PURE__*/React.createElement("span", {
    className: "adj-header__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "adj-header__actions"
  }, phone && /*#__PURE__*/React.createElement("a", {
    className: "adj-header__phone",
    href: `tel:${phone.replace(/[^\d]/g, '')}`
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone",
    "aria-hidden": "true"
  }), phone), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    href: ctaHref,
    icon: "arrow-right",
    iconPosition: "right"
  }, ctaLabel), /*#__PURE__*/React.createElement("button", {
    className: "adj-header__burger",
    "aria-label": "Menu",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": open ? 'x' : 'menu',
    "aria-hidden": "true"
  })))), /*#__PURE__*/React.createElement("div", {
    className: `adj-header__mobile${open ? ' adj-header__mobile--open' : ''}`
  }, links.map(l => l.children ? /*#__PURE__*/React.createElement("div", {
    key: l.label,
    className: "adj-header__mgroup"
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    onClick: () => setOpen(false)
  }, l.label), l.children.map(c => /*#__PURE__*/React.createElement("a", {
    key: c.href,
    className: "adj-header__mchild",
    href: c.href,
    onClick: () => setOpen(false)
  }, c.label))) : /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    onClick: () => setOpen(false)
  }, l.label)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "md",
    fullWidth: true,
    href: ctaHref
  }, ctaLabel)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TrustBar.jsx
try { (() => {
const CSS = `
.adj-trustbar { display: flex; flex-wrap: wrap; align-items: center; gap: var(--space-6);
  padding: var(--space-4) 0; }
.adj-trustbar--bordered { border-block: var(--border-1); }
.adj-trustbar--center { justify-content: center; }
.adj-trustbar__item { display: inline-flex; align-items: center; gap: var(--space-2);
  font-family: var(--font-sans); font-weight: 500; font-size: var(--fs-sm); color: var(--navy-700); }
.adj-trustbar__item svg { width: 19px; height: 19px; color: var(--blue-500); flex: none; }
.adj-trustbar__sep { width: 1px; height: 20px; background: var(--line-200); }
.adj-trustbar--inverse .adj-trustbar__item { color: #DDE8F3; }
.adj-trustbar--inverse .adj-trustbar__item svg { color: var(--sky-400, var(--sky-500)); }
.adj-trustbar--inverse .adj-trustbar__sep { background: var(--border-on-inverse); }
@media (max-width: 640px){ .adj-trustbar { gap: var(--space-4); } .adj-trustbar__sep { display: none; } }
`;
if (typeof document !== 'undefined' && !document.getElementById('adj-trustbar-css')) {
  const s = document.createElement('style');
  s.id = 'adj-trustbar-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const DEFAULT_ITEMS = [{
  icon: 'shield-check',
  label: 'We represent owners, not insurers'
}, {
  icon: 'badge-check',
  label: 'Licensed public adjusters'
}, {
  icon: 'map-pin',
  label: 'Nationwide restoration network'
}, {
  icon: 'hand-coins',
  label: 'Free, no-obligation policy review'
}];

/** Horizontal trust-signal strip. Factual claims only — no invented stats. */
function TrustBar({
  items = DEFAULT_ITEMS,
  inverse = false,
  bordered = true,
  center = false,
  separators = true
}) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    className: `adj-trustbar${inverse ? ' adj-trustbar--inverse' : ''}${bordered ? ' adj-trustbar--bordered' : ''}${center ? ' adj-trustbar--center' : ''}`
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "adj-trustbar__item"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon,
    "aria-hidden": "true"
  }), it.label), separators && i < items.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: "adj-trustbar__sep",
    "aria-hidden": "true"
  }))));
}
Object.assign(__ds_scope, { TrustBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TrustBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.BenefitCard = __ds_scope.BenefitCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.SpecialtyCard = __ds_scope.SpecialtyCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.DisclaimerCallout = __ds_scope.DisclaimerCallout;

__ds_ns.LicenseBadge = __ds_scope.LicenseBadge;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.LeadForm = __ds_scope.LeadForm;

__ds_ns.FaqAccordion = __ds_scope.FaqAccordion;

__ds_ns.ProcessTracker = __ds_scope.ProcessTracker;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.TrustBar = __ds_scope.TrustBar;

})();
