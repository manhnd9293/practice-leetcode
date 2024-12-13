/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
  const freqs = new Map();
  for (const n of arr) {
    freqs.set(n, (freqs.get(n) || 0) + 1);
  }

  const freqList = [];
  for (const value of freqs.values()) {
    freqList.push(value);
  }
  freqList.sort((a, b) => b -a);

  let totalRemove = 0;
  for (let i = 0; i < freqList.length; i++) {
    totalRemove += freqList[i];
    if (totalRemove >= Math.ceil(arr.length / 2)) {
      return i + 1;
    }
  }

  return freqList.length;
};