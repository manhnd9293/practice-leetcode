/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  const n = board.length;
  const getRowAndCol = (value) => {
    const floorValue = value % n !== 0 ? Math.floor(value / n) : value / n - 1;
    const row = n - 1 - floorValue;
    const col = floorValue % 2 === 0 ? value - 1 - floorValue * n : floorValue * n + n - value;
    return [row, col];
  }

  const getNextValues = (value) => {
    const nextValues = [];
    for (let next = value + 1; next <= Math.min(value + 6, n * n); next++) {
      const [row, col] = getRowAndCol(next);
      if (board[row][col] !== -1) {
        nextValues.push(board[row][col]);
      } else {
        nextValues.push(next);
      }
    }
    return nextValues;

  }
  const seen = new Set();
  seen.add(1);
  let queue = [1];
  let steps = 0;

  while (queue.length > 0) {
    const nextQueue = [];
    steps++;
    while (queue.length > 0) {
      console.log({queue})
      const value = queue.shift();

      const nextValues = getNextValues(value);
      for (const nextValue of nextValues) {
        if (nextValue === n * n) {
          return steps;
        }
        if (!seen.has(nextValue)) {
          seen.add(nextValue);
          nextQueue.push(nextValue);
        }
      }
    }
    queue = nextQueue;
  }

  return -1;

};

const board = [[-1,7,-1],[-1,6,9],[-1,-1,2]];
const result = snakesAndLadders(board);
console.log({result})
