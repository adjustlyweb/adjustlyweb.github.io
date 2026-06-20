import React from 'react';

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
  const s = document.createElement('style'); s.id = 'adj-acard-css'; s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Editorial article/guide card. Pass `image` (cool-toned photography URL).
 * When omitted, a low-contrast shield watermark stands in for real imagery.
 */
export function ArticleCard({ category = 'Guide', title, excerpt, readTime, image, markSrc, href = '#' }) {
  return (
    <a className="adj-acard" href={href}>
      <div className="adj-acard__media">
        {image
          ? <img src={image} alt="" />
          : (markSrc ? <img className="adj-acard__ph" src={markSrc} alt="" /> : null)}
      </div>
      <div className="adj-acard__body">
        <span className="adj-acard__eyebrow">{category}</span>
        <h3 className="adj-acard__title">{title}</h3>
        {excerpt && <p className="adj-acard__excerpt">{excerpt}</p>}
        {readTime && <span className="adj-acard__meta">{readTime}</span>}
      </div>
    </a>
  );
}
