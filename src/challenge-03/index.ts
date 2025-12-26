export function drawGift (size: number, symbol: string): string {
  if (size <= 1) return '';

  let gift = symbol.repeat(size) + '\n';

  if (size > 2) {
    for (let i = 2; i < size; i++) {
      gift += symbol + ' '.repeat(size - 2) + symbol + '\n';
    }
  }

  gift += symbol.repeat(size);

  return gift;
}
