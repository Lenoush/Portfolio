export const PAGE_COLORS = {
  zoidberg: "purple",
  travel: "green",
  battleship: "indigo",
  sparta: "pink",
  spaceVrGame: "orange",
} as const;

export type PageColorKey = keyof typeof PAGE_COLORS;
export type PageColorValue = typeof PAGE_COLORS[PageColorKey];
