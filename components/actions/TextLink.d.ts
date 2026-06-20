import * as React from 'react';

/**
 * Inline editorial text link with a trailing arrow that nudges right on hover.
 * Use for "Read more", "Learn how it works", and card footers.
 */
export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href?: string;
  /** Lucide icon name for the trailing glyph; pass "" to omit. Default "arrow-right". */
  icon?: string;
  /** `default` blue, `quiet` navy, `inverse` for navy backgrounds. */
  variant?: 'default' | 'quiet' | 'inverse';
}

export function TextLink(props: TextLinkProps): JSX.Element;
