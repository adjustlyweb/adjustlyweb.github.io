import React from 'react';

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
  const s = document.createElement('style'); s.id = 'adj-licbadge-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * "License Verified" trust badge. Pass the real license number + jurisdiction.
 * Never display unless the license is genuinely verifiable.
 */
export function LicenseBadge({
  number = 'PA-1098842', state = 'Licensed Public Adjuster',
  inverse = false, compact = false,
}) {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.lucide) window.lucide.createIcons();
  });
  return (
    <span className={`adj-licbadge${inverse ? ' adj-licbadge--inverse' : ''}${compact ? ' adj-licbadge--compact' : ''}`}>
      <span className="adj-licbadge__mark"><i data-lucide="badge-check" aria-hidden="true"></i></span>
      <span className="adj-licbadge__text">
        <span className="adj-licbadge__lead">License verified</span>
        <span className="adj-licbadge__num">{state} · Lic #{number}</span>
      </span>
    </span>
  );
}
