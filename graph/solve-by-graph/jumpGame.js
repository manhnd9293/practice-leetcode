/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
  const targetIndex = new Set(arr.reduce((list, item, index) => {
    if (item === 0) {
      list.push(index);
    }
    return list;
  }, []));

  const validIndex = (i) => 0 <= i && i < arr.length;

  const seen = new Set();
  seen.add(start);
  let queue = [start];

  while (queue.length > 0) {
    const nextQueue = [];
    for (const index of queue) {
      for(const nextIndex of [index - arr[index], index + arr[index]].filter(i => validIndex(i))) {
        if (targetIndex.has(nextIndex)) {
          return true;
        } else if (!seen.has(nextIndex)) {
          seen.add(nextIndex);
          nextQueue.push(nextIndex);
        }
      }
    }
    queue = nextQueue;
  }

  return false;

};