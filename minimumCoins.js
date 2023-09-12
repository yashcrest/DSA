function minIgnoreNone(a, b) {
  if (a === null) return b;
  if (b === null) return a;
  return Math.min(a, b);
}

let memo = new Map();
function minimumCoins(m, coins) {
  if (memo.has(m)) {
    return memo.get(m);
  }
  let answer;
  if (m === 0) {
    answer = 0;
  } else {
    answer = null;
    for (let coin of coins) {
      let subProblem = m - coin;
      if (subProblem < 0) {
        continue;
      }
      answer = minIgnoreNone(answer, minimumCoins(subProblem, coins) + 1);
    }
  }
  memo.set(m, answer);
  return answer;
}

coins = [1, 4, 5];

console.log(minimumCoins(13, coins));
