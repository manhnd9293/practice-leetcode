/**
 * @param {number[]} weight
 * @return {number}
 */
var maxNumberOfApples = function(weight) {
  const sortWeights = weight.sort((a,b) => a -b);
  let totalWeight = 0;
  for (let i = 0; i < sortWeights.length; i++) {
    if (totalWeight + sortWeights[i] > 5000) {
      return i;
    }
    totalWeight += sortWeights[i];
  }

  return weight.length;
};