/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
  const n = s.length;
  const parent = Array.from({length: n}, (_, index) => index);
  const rank = Array(n).fill(1);

  function find(x) {
    if (x === parent[x]) {
      return x;
    }
    parent[x] = find(parent[x]);
    return parent[x];
  }

  function union(x,y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX === rootY) {
      return;
    }
    if (rank[rootX] > rank[rootY]) {
      parent[rootY] = rootX;
    } else if (rank[rootX] < rank[rootY]) {
      parent[rootX] = rootY;
    } else {
      parent[rootY] = rootX;
      rank[rootX] += 1;
    }
  }

  for (const pair of pairs) {
    const [x, y] = pair;
    union(x, y);
  }

  const map = new Map();
  for (let i = 0; i < n; i++) {
    const root = find(i);
    const charList = map.get(root) || [];
    charList.push(s[i]);
    map.set(root, charList);
  }

  for (const charList of map.values()) {
    charList.sort();
  }

  let ans = Array(n);
  for (let i = 0; i < n; i++) {
    const root = find(i);
    const nextChar = map.get(root).shift();
    ans[i] = nextChar;
  }

  return ans.join();
};

