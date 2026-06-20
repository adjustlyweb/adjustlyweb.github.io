import * as React from 'react';

export interface TrackStep {
  eyebrow?: string;
  title: React.ReactNode;
  desc?: React.ReactNode;
  /** Lucide icon for the dot when not done. Falls back to the step number. */
  icon?: string;
}

/**
 * Process / step tracker for the claim journey (Protect · Prepare · Recover, or
 * documented claim steps). Steps before `current` show done (check), `current`
 * is active, the rest are upcoming.
 *
 * @startingPoint section="Navigation" subtitle="Process / step tracker" viewport="760x320"
 */
export interface ProcessTrackerProps {
  steps: TrackStep[];
  current?: number;
  orientation?: 'vertical' | 'horizontal';
  inverse?: boolean;
}
export function ProcessTracker(props: ProcessTrackerProps): JSX.Element;
