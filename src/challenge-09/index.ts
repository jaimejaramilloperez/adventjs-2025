type Board = string;
type Moves = string;
type Result = 'fail' | 'crash' | 'success';

export function moveReno (board: Board, moves: Moves): Result {
  let reindeerRow = 0;
  let reindeerCol = 0;

  const rows = board.split('\n').slice(1, -1);

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].length; j++) {
      if (rows[i][j] === '@') {
        reindeerRow = i;
        reindeerCol = j;
        break;
      }
    }
  }

  const rowLimit = rows.length - 1;
  const colLimit = rows[0].length - 1;

  const MOVES_ACTIONS: Record<string, number[]> = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };

  const isOutOfBounds = (row: number, col: number) => {
    return row < 0 || row > rowLimit || col < 0 || col > colLimit;
  };

  for (const move of moves) {
    const movesDelta = MOVES_ACTIONS[move];
    if (!movesDelta) continue;

    const [rowDelta, colDelta] = movesDelta;
    reindeerRow += rowDelta;
    reindeerCol += colDelta;

    if (isOutOfBounds(reindeerRow, reindeerCol)) return 'crash';

    const currentCell = rows[reindeerRow][reindeerCol];

    if (currentCell === '*') return 'success';
    if (currentCell === '#') return 'crash';
  }

  return 'fail';
}
