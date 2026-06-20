import * as React from 'react';

/**
 * "License Verified" trust badge — green check, "License verified", jurisdiction
 * and license number in mono. Only render for a genuinely verifiable license.
 */
export interface LicenseBadgeProps {
  /** Real public-adjuster license number. */
  number?: string;
  /** Jurisdiction / role line, e.g. "Florida Public Adjuster". */
  state?: string;
  inverse?: boolean;
  compact?: boolean;
}
export function LicenseBadge(props: LicenseBadgeProps): JSX.Element;
