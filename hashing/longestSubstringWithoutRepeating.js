/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = new Map();
  let left = 0;
  let max = 0;
  for(let right = 0; right < s.length; right++) {
    if(map.has(s[right])) {
      while (s[left] !== s[right]) {
        map.delete(s[left]);
        left++;
      }
      left++;
    }
    map.set(s[right], right);
    max = Math.max(right - left + 1, max);
  }

  return max;
};