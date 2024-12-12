/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
  const sortBoxTypes = boxTypes.sort((a, b) => b[1] - a[1]);
  let cur = 0;
  let remain = truckSize;
  let totalUnit = 0;
  while (remain > 0 && cur < sortBoxTypes.length) {
    const [noBox, noUnit] = sortBoxTypes[cur];
    const increaseBox = Math.min(remain, noBox);
    totalUnit += increaseBox * noUnit;
    remain -= increaseBox;
    if (remain > 0) {
      cur++;
    }
  }

  return totalUnit;
};