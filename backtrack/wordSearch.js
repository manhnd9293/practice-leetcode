/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const noRow = board.length;
  const noCol = board[0].length;

  const isValid = (r,c) => {
    return 0 <= r && r < noRow && 0 <= c && c < noCol;
  }
  const seen = new Set();
  const backtrack = (i, row, col) => {
    // console.log(`backtrack i:${i}, r:${row}, c:${col}, boardValue: ${board[row][col]}`);
    if (i === word.length-1) {

      return true;
    }

    for (const dir of directions) {
      const [dr, dc] = dir;
      const nextRow = row + dr;
      const nextCol = col + dc;

      if (isValid(nextRow, nextCol) && !seen.has(`${nextRow}-${nextCol}`) && board[nextRow][nextCol] === word[i+1]) {
        seen.add(`${nextRow}-${nextCol}`);
        if(backtrack(i + 1, nextRow, nextCol)) {
          return true;
        };
        seen.delete(`${nextRow}-${nextCol}`);
      }
    }

    return false;
  }

  for(let i = 0; i < noRow; i++) {
    for(let j = 0; j < noCol; j++) {
      console.log({board: board[i][j], w0: word[0]});
      if (board[i][j] === word[0]) {
        seen.add(`${i}-${j}`);
        if (backtrack(0, i, j)) {
          return true;
        }
        seen.delete(`${i}-${j}`);
      }
    }
  }

  return false;
};

// const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
// const res  = exist(board, "ABCCED");
// console.log({res})