/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
  const biSearch = (startIndex, target) => {
    let left = 0;
    let right = Math.min(startIndex, nums1.length - 1);
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums1[mid] <= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }

  let ans = 0;
  for (let j = 0; j < nums2.length; j++) {
    const minI = biSearch(j, nums2[j]);
    if (minI <= Math.min(j, nums1.length - 1)) {
      ans = Math.max(ans, j - minI);
    }
  }

  return ans;
};