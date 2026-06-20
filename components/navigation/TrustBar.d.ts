import * as React from 'react';

export interface TrustItem { icon: string; label: string; }

/**
 * Horizontal trust-signal strip (icon + short factual claim, separated by hairlines).
 * Use under a hero or above the footer. Factual statements only — no invented stats.
 */
export interface TrustBarProps {
  items?: TrustItem[];
  inverse?: boolean;
  bordered?: boolean;
  center?: boolean;
  separators?: boolean;
}
export function TrustBar(props: TrustBarProps): JSX.Element;
