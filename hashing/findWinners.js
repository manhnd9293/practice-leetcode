/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
  const map = new Map()
  for(const match of matches) {
    const [winner, loser] = match;
    const winnerStats = map.get(winner) || {win: 0, lose: 0};
    winnerStats.win += 1;
    map.set(winner, winnerStats);
    const loserStats = map.get(loser) || {win: 0, lose: 0};
    loserStats.lose += 1;
    map.set(loser, loserStats)
  }
  const allWins = [];
  const loseOne = [];
  for(const key of map.keys()) {
    if(map.get(key).lose === 0) {
      allWins.push(key);
    }
    if(map.get(key).lose === 1) {
      loseOne.push(key);
    }
  }

  return [allWins.sort((a,b)=> a-b), loseOne.sort((a,b)=> a-b)];

};

findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]);

console.log([1,10,2].sort((a,b) => a-b))