/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
  const adj = new Map();
  const seen = new Set();
  const restrictedSet = new Set(restricted);

  for (const edge of edges) {
    const [source, dest] = edge;
    adj.set(source, (adj.get(source) || []).concat(dest));
    adj.set(dest, (adj.get(dest) || []).concat(source));
  }

  const dfs = (node) => {
    seen.add(node);
    let count = 1;
    for (const neighbor of adj.get(node)) {
      if (!seen.has(neighbor) && !restrictedSet.has(neighbor)) {
        count += dfs(neighbor);
      }
    }

    return count
  }

  return dfs(0);
};