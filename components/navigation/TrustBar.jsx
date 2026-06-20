import React from 'react';

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
  const s = document.createElement('style'); s.id = 'adj-trustbar-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

const DEFAULT_ITEMS = [
  { icon: 'shield-check', label: 'We represent owners, not insurers' },
  { icon: 'badge-check', label: 'Licensed public adjusters' },
  { icon: 'map-pin', label: 'Nationwide restoration network' },
  { icon: 'hand-coins', label: 'Free, no-obligation policy review' },
];

/** Horizontal trust-signal strip. Factual claims only — no invented stats. */
export function TrustBar({ items = DEFAULT_ITEMS, inverse = false, bordered = true, center = false, separators = true }) {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <div className={`adj-trustbar${inverse ? ' adj-trustbar--inverse' : ''}${bordered ? ' adj-trustbar--bordered' : ''}${center ? ' adj-trustbar--center' : ''}`}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          <span className="adj-trustbar__item"><i data-lucide={it.icon} aria-hidden="true"></i>{it.label}</span>
          {separators && i < items.length - 1 && <span className="adj-trustbar__sep" aria-hidden="true"></span>}
        </React.Fragment>
      ))}
    </div>
  );
}
