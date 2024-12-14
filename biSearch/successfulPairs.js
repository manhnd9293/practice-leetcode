/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  const biSearch = (arr, target) => {
    let left = 0;
    let right = arr.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] >= target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }

  const sortPortions = potions.sort((a, b) => a - b);
  const ans = [];
  for (const spell of spells) {
    const target = success / spell;
    const position = biSearch(sortPortions, target);
    ans.push(potions.length - position);
  }

  return ans;
};