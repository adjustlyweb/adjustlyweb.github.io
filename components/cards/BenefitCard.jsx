import React from 'react';

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
  const s = document.createElement('style'); s.id = 'adj-bcard-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

/** Benefit/value card: a top hairline accent rule, an icon OR a step number, title, body. */
export function BenefitCard({ icon, number, title, children, inverse = false }) {
  React.useEffect(() => {
    if (icon && typeof window !== 'undefined' && window.lucide) window.lucide.createIcons();
  }, [icon]);
  return (
    <div className={`adj-bcard${inverse ? ' adj-bcard--inverse' : ''}`}>
      <div className="adj-bcard__top">
        {icon && <span className="adj-bcard__icon"><i data-lucide={icon} aria-hidden="true"></i></span>}
        {number && <span className="adj-bcard__num">{number}</span>}
      </div>
      <h3 className="adj-bcard__title">{title}</h3>
      <p className="adj-bcard__body">{children}</p>
    </div>
  );
}
