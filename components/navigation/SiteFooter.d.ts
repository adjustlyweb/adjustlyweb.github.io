import * as React from 'react';

export interface FooterColumn { title: string; links: Array<[label: string, href: string]>; }

/**
 * Navy site footer using the WHITE logo lockup. Carries the verifiable license
 * badge plus the compliance disclaimer (owners-not-insurers, not legal advice,
 * no guaranteed outcomes, free=free).
 */
export interface SiteFooterProps {
  logoSrc?: string;
  tagline?: string;
  columns?: FooterColumn[];
  licenseNumber?: string;
  licenseState?: string;
  /** Override the default compliance disclaimer paragraph. */
  disclaimer?: React.ReactNode;
}
export function SiteFooter(props: SiteFooterProps): JSX.Element;
