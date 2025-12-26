interface Glove {
  hand: 'L' | 'R';
  color: string
}

export function matchGloves (gloves: Glove[]): string[] {
  const matches = [];
  const inventory = new Map<string, { L: number, R: number }>();

  for (const { hand, color } of gloves) {
    let counts = inventory.get(color);

    if (!counts) {
      counts = { L: 0, R: 0 };
      inventory.set(color, counts);
    }

    counts[hand]++;

    if (counts.L > 0 && counts.R > 0) {
      matches.push(color);
      counts.L--;
      counts.R--;
    }
  }

  return matches;
}
