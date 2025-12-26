export function maxDepth (letter: string): number {
  const brackets = {
    open: 0,
    close: 0,
  };

  let maxDepth = 0;
  let currentDepth = 0;

  for (const char of letter) {
    if (char === '[') {
      brackets.open++;
      currentDepth++;
    } else if (char === ']') {
      brackets.close++;
      maxDepth = Math.max(maxDepth, currentDepth);
      currentDepth--;
    }
  }

  return brackets.open !== brackets.close || maxDepth <= 0 ? -1 : maxDepth;
}
