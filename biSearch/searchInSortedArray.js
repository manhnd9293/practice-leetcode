/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }
  let pivot = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      pivot = i;
      break;
    }
  }


  function convertIndex(index) {
    return (index + pivot) % nums.length;
  }

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[convertIndex(mid)] === target) {
      return convertIndex(mid);
    } else if(nums[convertIndex(mid)] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};
