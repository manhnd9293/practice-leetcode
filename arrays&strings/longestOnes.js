var longestOnes = function(nums, k) {
  let left = 0;
  let countZeros = 0;
  let ans = -1;
  let cur = 0;

  for(let right = 0; right < nums.length; right++) {
    countZeros += nums[right] === 0 ? 1 : 0;
    cur++;
    if(countZeros > k) {
      while (countZeros > k) {
        countZeros -= (nums[left] === 0 ? 1 : 0);
        left++;
        cur--;
      }
    }
    ans = Math.max(ans, cur);
  }

  return ans;
};