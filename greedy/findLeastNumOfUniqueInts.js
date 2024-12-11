/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
  const freqs = new Map();
  for (const num of arr) {
    freqs.set(num, (freqs.get(num) || 0) + 1);
  }
  const sortFreqs = [...freqs.values()].sort((a, b) => b - a);
  let right= sortFreqs.length - 1;
  let remain = k;
  while (remain > 0 && right >= 0) {
    if (remain >= sortFreqs[right]) {
      remain -= sortFreqs[right];
      right--;
      sortFreqs.pop();
    } else {
      break;
    }
  }

  return sortFreqs.length;
};