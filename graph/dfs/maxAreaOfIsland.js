/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const noRow = grid.length;
  const noCol = grid[0].length;

  const validCell = (i,j) => {
    return (0 <= i && i < noRow) && (0 <= j && j < noCol) && grid[i][j] === 1;
  }

  const toHash = (i, j) => {
    return `${i}-${j}`;
  }

  const seen = new Set();
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const dfs = (i, j) => {
    seen.add(toHash(i,j));
    let area = 1;
    for (const dir of directions) {
      const [dRow, dCol] = dir;
      const nextRow = i + dRow;
      const nextCol = j + dCol;
      if (validCell(nextRow, nextCol) && !seen.has(toHash(nextRow, nextCol))) {
        area += dfs(nextRow, nextCol);
      }
    }

    return area;
  }

  let maxArea = 0;
  for (let i = 0; i < noRow; i++) {
    for (let j = 0; j < noCol; j++) {
      if (validCell(i, j) && !seen.has(toHash(i,j))) {
        const area = dfs(i, j);
        maxArea = Math.max(area, maxArea);
      }
    }
  }

  return maxArea;
};