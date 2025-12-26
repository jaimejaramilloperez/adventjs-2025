export function elfBattle (elf1: string, elf2: string): number {
  let elf1Lives = 3;
  let elf2Lives = 3;

  const calculateDamage = (attackMove: string, defenseMove: string): number => {
    if (attackMove === 'A' && defenseMove !== 'B') return 1;
    if (attackMove === 'F') return 2;
    return 0;
  };

  const maxMoves = Math.min(elf1.length, elf2.length);

  for (let i = 0; i < maxMoves; i++) {
    const elf1Move = elf1[i];
    const elf2Move = elf2[i];

    elf2Lives -= calculateDamage(elf1Move, elf2Move);
    elf1Lives -= calculateDamage(elf2Move, elf1Move);

    if (elf1Lives <= 0 && elf2Lives <= 0) return 0;
    if (elf1Lives <= 0) return 2;
    if (elf2Lives <= 0) return 1;
  }

  if (elf1Lives > elf2Lives) return 1;
  if (elf1Lives < elf2Lives) return 2;
  return 0;
}
