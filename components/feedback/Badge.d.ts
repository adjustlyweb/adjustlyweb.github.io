import * as React from 'react';

/** Small mono status / category badge (pill). */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'neutral' | 'brand' | 'accent' | 'success' | 'warning' | 'danger' | 'outline';
  /** Optional leading Lucide icon. */
  icon?: string;
}
export function Badge(props: BadgeProps): JSX.Element;
