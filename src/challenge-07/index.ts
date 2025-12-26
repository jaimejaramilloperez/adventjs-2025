export function drawTree (height: number, ornament: string, frequency: number): string {
  const lines = [];
  let position = 0;

  for (let i = 0; i < height; i++) {
    const numberOfChars = (i * 2) + 1;
    const leadingSpaces = height - i - 1;

    let line = ''.padStart(leadingSpaces, ' ');

    for (let j = 0; j < numberOfChars; j++) {
      position++;

      if (position % frequency === 0) {
        line += ornament;
      } else {
        line += '*';
      }
    }

    lines.push(line);
  }

  lines.push('#'.padStart(height));

  return lines.join('\n');
}
