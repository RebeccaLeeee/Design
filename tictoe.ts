
const makeMove = (
  position: number[][],
  player: number,
  cell: number[]
): number[][] => {
  const clone = [
    ...position.map(a => a.map(b => b)),
  ];
  clone[cell[0]][cell[1]] = player;
  return clone;
};

const emptyCells = (pos: number[][]): number[][] => {
  const cells = [];
  pos.forEach((row, x) => row.forEach((cell, y) => {
    if (cell === 0) cells.push([x, y]);
  }));
  return cells;
};

const N_ROWS = 3;
const N_COLS = 3;
const PLAYER_0 = 1;
const PLAYER_1 = 2;
const MATRIX_SIZE = N_ROWS * N_COLS;

export const judge = (position: number[][]): number => {
  if (winning(position, PLAYER_0)) return PLAYER_0;
  if (winning(position, PLAYER_1)) return PLAYER_1;
  if (!emptyCells(position).length) return 3;
  return 0;
};

const winning = (position: number[][] | any, player: number): boolean => {
  // check by row
  for (let i = 0; i < N_ROWS; i++) {
    const row = position[i];
    let found = true;
    for (let j = 0; j < N_COLS; j++) {
      if (row[j] !== player) found = false;
    }
    if (found) return true;
  }

  // check by column
  for (let i = 0; i < N_COLS; i++) {
    let found = true;
    for (let j = 0; j < N_ROWS; j++) {
      if (position[j][i] !== player) found = false;
    }
    if (found) return true;
  }

  // check by diagonal
  let found = true;
  for (let i = 0; i < N_ROWS; i++) {
    if (position[i][i] !== player) found = false;
  }
  if (found) return true;

  // check by reverse diagonal
  found = true;
  for (let i = 0; i < N_ROWS; i++) {
    if (position[i][N_COLS - (i + 1)] !== player) found = false;
  }
  return found;
};

function minimax(
  position: number[][] | any,
  depth: number,
  maximizingPlayer: boolean
): number {
  const judgeRes = judge(position);
  if (judgeRes !== 0) return judgeRes;

  if (maximizingPlayer) {
    let maxEval = -Infinity;
    emptyCells(position).forEach(cell => {
      const newMove = makeMove(position, PLAYER_0, cell);
      const eval = minimax(newMove, depth + 1, false);
      maxEval = Math.max(maxEval, eval);
    });
    return maxEval;
  } else {
    let minEval = Infinity;
    emptyCells(position).forEach(cell => {
      const newMove = makeMove(position, PLAYER_1, cell);
      const eval = minimax(newMove, depth + 1, true);
      minEval = Math.min(minEval, eval);
    });
    return minEval;
  }
}

export const bestMove = (position: number[][]): number[][] => {
  let maxEval = -Infinity;
  let bestMove = [0, 0];
  emptyCells(position).forEach(cell => {
    const newMove = makeMove(position, PLAYER_0, cell);
    const eval = minimax(newMove, 0, false);
    if (eval > maxEval) {
      maxEval = eval;
      bestMove = cell;
    }
  });
  return makeMove(position, PLAYER_0, bestMove);
};

Today I spent more than 4 hours making gravel rendering more physically plausible. Just like most of my so-called "physically correct" rendering experiments, this does look more organic, but not necessarily expressive. 

Browse `/r/proceduralgeneration` for inspiration perhaps? Usually they are more imaginative & expressive pic.twitter.com/0xbF79IZuu  \textright
