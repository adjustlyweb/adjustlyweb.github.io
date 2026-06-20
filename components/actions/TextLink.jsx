import React from 'react';

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
  const s = document.createElement('style'); s.id = 'adj-link-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

/** Inline text link with an optional trailing Lucide arrow that nudges on hover. */
export function TextLink({ children, href = '#', icon = 'arrow-right', variant = 'default', ...rest }) {
  React.useEffect(() => {
    if (icon && typeof window !== 'undefined' && window.lucide) window.lucide.createIcons();
  }, [icon]);
  const cls = ['adj-link', variant !== 'default' ? `adj-link--${variant}` : '', rest.className || ''].join(' ').trim();
  return (
    <a href={href} className={cls} {...rest}>
      <span>{children}</span>
      {icon && <i data-lucide={icon} aria-hidden="true"></i>}
    </a>
  );
}
