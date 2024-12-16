/**
 * @param {result[]} nums
 * @param {result} k
 * @return {result}
 */
var maxSubarrayLength = function(nums, k) {
  const freqs = new Map();
  let left = 0;
  let max = 0;
  for (let right = 0; right < nums.length; right++) {
    console.log({right})


    const num = nums[right];
    let freq = (freqs.get(num) || 0) + 1;
    if (freq > k) {
      while (nums[left] !== num) {
        const leftChar = nums[left];
        freqs.set(leftChar, freqs.get(leftChar) - 1);
        left++;
      }
      left++;
      freqs.set(num, k);
    } else {
      freqs.set(num, freq);
      max = Math.max(max, right - left + 1);
    }
  }
  console.log({max})
  return max;
};

const nums = [3, 1, 1];
const k = 1;
let result = maxSubarrayLength(nums, k);
console.log({result})