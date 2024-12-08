/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
  const appears = new Set();
  const duplicateNums = new Set();
  for(const num of nums) {
    if(appears.has(num)) {
      duplicateNums.add(num);
    }
    appears.add(num);
  }
  const uniqueNums = nums.filter(n => !duplicateNums.has(n));
  let max = -1;
  for(const n of uniqueNums) {
    max = Math.max(max, n);
  }

  return max !== -1 ? max : -1;
};