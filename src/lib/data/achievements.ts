export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel?: string;
}

export const ACHIEVEMENTS_STATS: StatItem[] = [
  { id: "programs", value: 20, suffix: "+", label: "Professional Programs" },
  { id: "students", value: 5000, suffix: "+", label: "Happy Students Trained" },
  { id: "coaches", value: 100, suffix: "+", label: "Expert Certified Coaches" },
  { id: "events", value: 50, suffix: "+", label: "Annual Events & Stages" },
];

export const HIGHLIGHT_BADGES = [
  { title: "International Competitions", desc: "Winners across regional & global arenas" },
  { title: "World Record Events", desc: "Official adjudications and mega stage records" },
];
