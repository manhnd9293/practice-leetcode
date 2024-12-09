/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
  const bankSet = new Set(bank);
  const genChar = ['A', 'C', 'G', 'T'];

  const getMutations = (gene) => {
    const ans = [];
    let geneCharList = gene.split('');
    for (let i=0; i < geneCharList.length; i++) {
      for(const alt of genChar) {
        if(alt !== geneCharList[i]) {
          let cloneList = structuredClone(geneCharList);
          cloneList[i] = alt;
          let mutation = cloneList.join('');
          if (bankSet.has(mutation)) {
            ans.push(mutation);
          }
        }
      }
    }

    return ans;
  }

  let queue = [startGene];
  const seen = new Set(startGene);
  let steps = 0;

  while (queue.length > 0) {
    steps++;
    const nextQueue = [];
    for (const gene of queue) {
      for (const mutation of getMutations(gene)) {
        if (mutation === endGene) {
          return steps;
        }
        if (!seen.has(mutation)) {
          seen.add(mutation);
          nextQueue.push(mutation);
        }
      }
    }
    queue = nextQueue;
  }

  return -1;
};