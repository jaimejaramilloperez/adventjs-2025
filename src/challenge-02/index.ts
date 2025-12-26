interface Gift {
  toy: string;
  quantity: number;
}

export function manufactureGifts (giftsToProduce: Gift[]): string[] {
  const production = [];

  for (const { toy, quantity } of giftsToProduce) {
    if (quantity > 0) production.push(...Array(quantity).fill(toy));
  }

  return production;
}
