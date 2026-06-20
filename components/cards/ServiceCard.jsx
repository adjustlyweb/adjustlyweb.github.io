import React from 'react';

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
  const s = document.createElement('style'); s.id = 'adj-scard-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

/** Service offering card: icon tile, serif title, description, optional link. */
export function ServiceCard({ icon = 'shield-check', title, children, href, linkLabel = 'Learn more' }) {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.lucide) window.lucide.createIcons();
  });
  return (
    <article className="adj-scard">
      <span className="adj-scard__icon"><i data-lucide={icon} aria-hidden="true"></i></span>
      <h3 className="adj-scard__title">{title}</h3>
      <p className="adj-scard__body">{children}</p>
      {href && (
        <div className="adj-scard__foot">
          <a className="adj-link" href={href}>
            <span>{linkLabel}</span><i data-lucide="arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      )}
    </article>
  );
}
