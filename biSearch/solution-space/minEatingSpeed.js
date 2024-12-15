/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  const eatTime = (k) => {
    let ans = 0;
    for (const n of piles) {
      ans += Math.ceil(n / k);
    }

    return ans;
  }

  let left = 1;
  let right = Math.max(...piles);
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (eatTime(mid) <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};