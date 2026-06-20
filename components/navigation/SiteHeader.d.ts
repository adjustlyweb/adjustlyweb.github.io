import * as React from 'react';

export interface HeaderLink { label: string; href: string; }

/**
 * Sticky marketing site header: logo, primary nav, phone, CTA, and a mobile menu.
 * Gains a hairline shadow + backdrop blur once scrolled.
 *
 * @startingPoint section="Navigation" subtitle="Sticky marketing header" viewport="1200x140"
 */
export interface SiteHeaderProps {
  logoSrc?: string;
  links?: HeaderLink[];
  /** Display phone; tel: link is derived. Pass "" to hide. */
  phone?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** href of the active nav item (gets an underline). */
  currentHref?: string;
}
export function SiteHeader(props: SiteHeaderProps): JSX.Element;
