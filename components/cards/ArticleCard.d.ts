import * as React from 'react';

/**
 * Editorial article / education card. Cool-toned 16:10 photography on top,
 * uppercase category eyebrow, serif headline, excerpt, mono read-time meta.
 * Without `image`, a faint shield watermark (`markSrc`) stands in for real art.
 */
export interface ArticleCardProps {
  /** Uppercase category eyebrow, e.g. "Guide", "Storm season". */
  category?: string;
  title: React.ReactNode;
  excerpt?: string;
  /** Mono meta line, e.g. "6 min read". */
  readTime?: string;
  /** Cool-toned photography URL. */
  image?: string;
  /** Fallback shield-mark watermark URL when no image is supplied. */
  markSrc?: string;
  href?: string;
}
export function ArticleCard(props: ArticleCardProps): JSX.Element;
