import React from 'react';

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
  const s = document.createElement('style'); s.id = 'adj-btn-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Adjustly button. Primary = Adjustly Blue fill (CTAs), secondary = navy outline,
 * text = quiet link-button. Renders an <a> when `href` is set, else a <button>.
 */
export function Button({
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

  const className = [
    'adj-btn',
    `adj-btn--${variant}`,
    `adj-btn--${size}`,
    fullWidth ? 'adj-btn--full' : '',
    rest.className || '',
  ].join(' ').trim();

  const iconEl = icon ? <i data-lucide={icon} aria-hidden="true"></i> : null;
  const content = (
    <>
      {iconPosition === 'left' && iconEl}
      {children && <span>{children}</span>}
      {iconPosition === 'right' && iconEl}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={className} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      onClick={onClick}
      {...rest}
    >
      {content}
    </button>
  );
}
