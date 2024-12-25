/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const n = graph.length;
  const ans = [];
  const backtrack = (cur, i) => {
    if (i === n - 1) {
      ans.push([...cur]);
    }
    for (const v of graph[i]) {
      cur.push(v);
      backtrack(cur, v);
      cur.pop();
    }
  }
  backtrack([0], 0);
  return ans;
};