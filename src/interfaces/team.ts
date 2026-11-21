export const TEAMS = ['blue', 'red', 'green', 'orange', 'purple'] as const;

export type Team = (typeof TEAMS)[number];

export interface TeamConfiguration {
  id: Team;
  name: string;
  enabled: boolean;
}

export const DEFAULT_TEAMS: TeamConfiguration[] = [
  { id: 'blue', name: 'Blue', enabled: true },
  { id: 'red', name: 'Red', enabled: true },
  { id: 'green', name: 'Green', enabled: true },
  { id: 'orange', name: 'Orange', enabled: true },
  { id: 'purple', name: 'Purple', enabled: true }
];

export const TEAM_COLORS: Record<Team, string> = {
  blue: '#2d6cdf',
  red: '#b91c1c',
  green: '#15803d',
  orange: '#c2410c',
  purple: '#7e22ce'
};
