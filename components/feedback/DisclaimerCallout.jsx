import React from 'react';

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
  const s = document.createElement('style'); s.id = 'adj-disc-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

const ICONS = { default: 'info', info: 'info', warning: 'alert-triangle', inverse: 'shield' };

/**
 * Compliance disclaimer / fine-print callout. Use wherever claims advice appears:
 * "represents owners not insurers", "educational, not legal advice", "free, no obligation".
 */
export function DisclaimerCallout({ title, children, variant = 'default', icon }) {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.lucide) window.lucide.createIcons();
  });
  const ic = icon || ICONS[variant] || 'info';
  return (
    <div className={`adj-disc adj-disc--${variant}`} role="note">
      <span className="adj-disc__icon"><i data-lucide={ic} aria-hidden="true"></i></span>
      <div>
        {title && <p className="adj-disc__title">{title}</p>}
        <p>{children}</p>
      </div>
    </div>
  );
}
