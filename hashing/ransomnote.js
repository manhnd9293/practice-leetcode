/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const freq = new Map();
  for(const c of magazine) {
    const count = freq.get(c) || 0;
    freq.set(c, count + 1);
  }
  for(const c of ransomNote) {
    if(!freq.get(c) || freq.get(c) === 0)  return false;
    freq.set(c, freq.get(c) -1);
  }

  return true;
};