/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  const freqData = word => {
    const freqs = new Map();
    for (const c of word) {
      freqs.set(c, (freqs.get(c) || 0) + 1);
    }

    const listFreqs = [];
    for (const key of freqs.keys()) {
      const value = freqs.get(key);
      listFreqs.push(value);
    }

    const sortStringFromChar = [...freqs.keys()].sort().join('');
    const sortStringFromFreq = listFreqs.sort((a, b) => a - b).join('');
    return {sortStringFromChar, sortStringFromFreq}

  }
  const {sortStringFromChar: sc1, sortStringFromFreq: sf1} = freqData(word1);
  const {sortStringFromChar: sc2, sortStringFromFreq: sf2} = freqData(word2);
  return sc1 === sc2 && sf1 === sf2;
};