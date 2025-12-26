export function decodeSantaPin (code: string): string | null {
  const pin = [];
  let previousDigit = 0;

  const blocks = [...code.matchAll(/\[(.*?)\]/g)].map((match) => match[1]);

  for (const block of blocks) {
    if (block === '<') {
      pin.push(previousDigit);
      continue;
    }

    const [digitChar, ...operations] = block;
    let digit = Number(digitChar);

    for (const operation of operations) {
      if (operation === '+') {
        digit = (digit + 1) % 10;
      } else if (operation === '-') {
        digit = (digit - 1 + 10) % 10;
      }
    }

    pin.push(digit);
    previousDigit = digit;
  }

  return pin.length === 4 ? pin.join('') : null;
}
