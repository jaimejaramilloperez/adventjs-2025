export function findUnsafeGifts (warehouse: string[]): number {
  let unsafeGiftCount = 0;

  const rowLimit = warehouse.length - 1;
  const colLimit = warehouse[0].length - 1;

  const isOutOfBounds = (row: number, col: number) => {
    return row < 0 || row > rowLimit || col < 0 || col > colLimit;
  };

  const hasAdjacentCamera = (row: number, col: number): boolean => {
    const directions = [
      [-1, 0], // up
      [1, 0],  // down
      [0, -1], // left
      [0, 1]   // right
    ];

    return directions.some(([rowDelta, colDelta]) => {
      const newRow = row + rowDelta;
      const newCol = col + colDelta;
      return !isOutOfBounds(newRow, newCol) && warehouse[newRow][newCol] === '#';
    });
  };

  for (let i = 0; i < warehouse.length; i++) {
    for (let j = 0; j < warehouse[i].length; j++) {
      if (warehouse[i][j] === '*' && !hasAdjacentCamera(i, j)) {
        unsafeGiftCount++;
      }
    }
  }

  return unsafeGiftCount;
}
