/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
  if(bombs.length < 2) {
    return bombs.length;
  }
  const adj = new Map();
  for(let i = 0; i < bombs.length-1; i++) {
    for(let j = i+1; j < bombs.length; j++ ) {
      const [xi, yi, ri] = bombs[i];
      const [xj, yj, rj] = bombs[j];

      const distance = Math.sqrt((xi - xj) ** 2 + (yi - yj) ** 2);
      const adjListFirst = adj.get(i) || [];
      const adjListSecond = adj.get(j) || [];
      if (distance <= ri) {
        adjListFirst.push(j);
      }
      if(distance <= rj) {
        adjListSecond.push(i);
      }

      adj.set(i, adjListFirst);
      adj.set(j, adjListSecond);
    }
  }

  const bfs = (node) => {
    const seen = new Set();
    seen.add(node);
    let queue = [node];

    while (queue.length > 0) {
      const nextQueue = [];
      for (const node of queue) {
        for (const neighbor of adj.get(node)) {
          if (!seen.has(neighbor)) {
            seen.add(neighbor);
            nextQueue.push(neighbor);
          }

        }
      }
      queue = nextQueue;
    }

    return seen.size;
  }

  let ans = 0;
  for (let i = 0; i < bombs.length; i++) {
    const detonates = bfs(i);
    ans = Math.max(detonates, ans);
  }

  return ans;
};