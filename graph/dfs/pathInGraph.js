/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  const seen = new Set();
  const adjList = new Map();

  for(const edge of edges) {
    const [source, destination] = edge;
    const sourceList = adjList.get(source) || [];
    const destList = adjList.get(destination) || [];
    sourceList.push(destination);
    destList.push(source);
    adjList.set(source, sourceList);
    adjList.set(destination, destList);
  }

  const dfs = (sourceNode) => {
    if(sourceNode === destination) return true;
    seen.add(sourceNode);
    for (const dest of adjList.get(sourceNode)) {
      if (!seen.has(dest)) {
        let result = dfs(dest);
        if(result) return true;
      }
    }
    return false;
  }

  return dfs(source);
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
  const seen = new Set();
  const adj = new Map();

  for (const edge of edges) {
    const [s, d] = edge;
    adj.set(s, (adj.get(s) || []).concat(d));
    adj.set(d, (adj.get(d) || []).concat(s));
  }

  const dfs = (node) => {
    seen.add(node);
    for (const v of adj.get(node)) {
      if(!seen.has(v)) {
        dfs(v);
      }
    }
  }

  let ans = 0;
  for (const v of adj.keys()) {
    if (!seen.has(v)) {
      ans++;
      dfs(v)
    }
  }

  return ans;
};