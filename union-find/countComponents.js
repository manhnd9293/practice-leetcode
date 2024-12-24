/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
  const parent = Array.from({length: n}, (_, index) => index);
  const rank = Array(n).fill(1);

  function find(x) {
    if (x === parent[x]) {
      return x;
    }
    parent[x] = find(parent[x]);
    return parent[x];
  }

  let ans = n;
  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX === rootY) {
      return;
    }
    ans--;
    if (rank[rootX] > rank[rootY]) {
      parent[rootY] = rootX;
    } else if (rank[rootX] < rank[rootY]) {
      parent[rootX] = rootY;
    } else {
      parent[rootY] = rootX;
      rank[rootX] += 1;
    }
  }

  for (let edge of edges) {
    const [x, y] = edge;
    union(x, y);
  }

  return ans;
};