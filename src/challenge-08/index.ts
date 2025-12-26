export function findUniqueToy (toy: string): string {
  const charCounts = new Map<string, { count: number; char: string }>();

  for (const char of toy) {
    const normalizedChar = char.toLowerCase();
    let entry = charCounts.get(normalizedChar);

    if (!entry) {
      entry = { count: 0, char };
      charCounts.set(normalizedChar, entry);
    }

    entry.count++;
  }

  for (const { count, char } of charCounts.values()) {
    if (count === 1) return char;
  }

  return '';
}
