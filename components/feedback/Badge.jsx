import React from 'react';

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
  const s = document.createElement('style'); s.id = 'adj-badge-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

/** Small status / category badge. Mono, uppercase, pill. */
export function Badge({ children, variant = 'neutral', icon, ...rest }) {
  React.useEffect(() => {
    if (icon && typeof window !== 'undefined' && window.lucide) window.lucide.createIcons();
  }, [icon]);
  return (
    <span className={`adj-badge adj-badge--${variant}`} {...rest}>
      {icon && <i data-lucide={icon} aria-hidden="true"></i>}
      {children}
    </span>
  );
}
