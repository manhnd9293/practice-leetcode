/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
  const travelTime = (speed) => {
    let total = 0;
    for (let i = 0; i < dist.length; i++) {
      const travelTime = i < dist.length - 1 ? Math.ceil(dist[i] / speed) : dist[i] / speed;
      total += travelTime;
    }

    return total;
  }


  let left = 1;
  let right = 10 ** 7;

  if (hour < travelTime(right)) {
    return -1;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (travelTime(mid) <= hour) {
      right = mid - 1;
    } else  {
      left = mid + 1;
    }
  }

  return left;
};