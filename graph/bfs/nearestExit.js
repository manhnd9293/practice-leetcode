/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
  const noRow = maze.length;
  const noCol = maze[0].length;


  const isValid = (i,j) => {
    let checkValidResult = (0 <= i && i < noRow) && (0 <= j && j < noCol) && String(maze[i][j]) === '.';
    // console.log({checkValidResult, i, j})
    return checkValidResult;
  }

  const isExit = (i,j) => {
    let valid = isValid(i,j);
    let isNotEntrance = i !== entrance[0] || j !== entrance[1];
    let isAtBorder = (i === 0 || j === 0 || i === noRow - 1 || j === noCol - 1) && String(maze[i][j]) === ".";
    let result = valid && isNotEntrance && isAtBorder;
    // console.log(`Check is Exit i: ${i} - j: ${j} => result: ${result}. Detail: isValid: ${valid}, isNotEntrance: ${isNotEntrance}, isAtBorder: ${isAtBorder}`);
    return result
  }

  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];


  const toHash = (i, j) => {
    return `${i}-${j}`;
  }

  let queue = [entrance];
  const seen = new Set();
  seen.add(toHash(entrance[0], entrance[1]));
  let step = 0;
  while (queue.length > 0) {
    const nextQueue = [];
    step++;
    while (queue.length > 0) {
      const [i, j] = queue.shift();
      for (const dir of directions) {
        const [dRow, dCol] = dir;
        const nextRow = i + dRow;
        const nextCol = j + dCol;

        if(isValid(nextRow, nextCol) && !seen.has(toHash(nextRow, nextCol))) {
          if (isExit(nextRow, nextCol)) {
            return step;
          }
          seen.add(toHash(nextRow, nextCol));
          nextQueue.push([nextRow, nextCol]);
        }
      }
    }
    queue = nextQueue;
  }

  return -1;
};

const maze = [
  ["+",".","+","+","+","+","+"],
  ["+",".","+",".",".",".","+"],
  ["+",".","+",".","+",".","+"],
  ["+",".",".",".",".",".","+"],
  ["+","+","+","+",".","+","."]]


const entrance = [0,1];
let ans = nearestExit(maze, entrance);
console.log({ans})
