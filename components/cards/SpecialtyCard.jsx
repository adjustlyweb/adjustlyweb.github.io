import React from 'react';

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
  const s = document.createElement('style'); s.id = 'adj-spec-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

/** Network-specialty card: a peril/specialty the restoration network covers. */
export function SpecialtyCard({ icon = 'shield-check', title, children, tag }) {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.lucide) window.lucide.createIcons();
  });
  return (
    <div className="adj-spec">
      <span className="adj-spec__icon"><i data-lucide={icon} aria-hidden="true"></i></span>
      <div>
        <h4 className="adj-spec__title">{title}</h4>
        <p className="adj-spec__body">{children}</p>
        {tag && <span className="adj-spec__tag">{tag}</span>}
      </div>
    </div>
  );
}
