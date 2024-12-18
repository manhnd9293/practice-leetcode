/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
  const checkSumResult = (divisor) => {
    let ans = 0;
    for (const n of nums) {
      ans += Math.ceil(n / divisor);
    }
    return ans <= threshold;
  }

  let left = 1;
  let right = Math.max(...nums);
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (checkSumResult(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};