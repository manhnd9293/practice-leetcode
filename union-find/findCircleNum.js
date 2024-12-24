/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  const n = isConnected.length;
  const root = Array.from({length: n}, (_, index) => index);
  const rank = Array(n).fill(1);

  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);

    if (rank[rootX] > rank[rootY]) {
      root[rootY] = rootX;
    } else if (rank[rootX] < rank[rootY]) {
      root[rootX] = rootY;
    } else {
      root[rootY] = rootX;
      rank[rootX] += 1;
    }
  }

  function find(x) {
    if (x === root[x]) {
      return x;
    }
    root[x] = find(root[x]);
    return root[x];
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && isConnected[i][j] === 1) {
        union(i, j);
      }
    }
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (root[i] === i) {
      ans++;
    }
  }

  return ans;
};