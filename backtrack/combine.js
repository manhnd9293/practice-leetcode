/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const ans = [];
  const backtrack = (cur, i) => {
    if (cur.length === k) {
      ans.push([...cur]);
      return;
    }
    for(let j = i + 1; j <= n; j++) {
      cur.push(j);
      backtrack(cur, j);
      cur.pop();
    }
  }

  backtrack([], 0);
  return ans;
};
