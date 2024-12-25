/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(digits.length === 0) return [];
  const ans = [];
  const map = new Map();
  map.set(2, ['a','b','c']);
  map.set(3, ['d','e','f']);
  map.set(4, ['g','h','i']);
  map.set(5, ['j','k','l']);
  map.set(6, ['m','n','o']);
  map.set(7, ['p','q','r','s']);
  map.set(8, ['t','u','v']);
  map.set(9, ['w','x','y', 'z']);
  const backtrack = (cur, i) => {
    if(cur.length === digits.length) {
      ans.push(cur.join(''));
      return;
    }
    const digit = +digits[i];

    for (const c of map.get(digit)) {
      cur.push(c);
      backtrack(cur, i+1);
      cur.pop();
    }
  }
  backtrack([], 0);
  return ans;
};