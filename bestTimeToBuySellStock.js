class Solution {
  /**
   * @param {number} prices
   * @return {number}
   */
  maxProfit(prices) {
    let lp = 0;
    let rp = lp + 1;
    let maxProfit = 0;
    while (rp < prices.length) {
      if (prices[lp] < prices[rp]) {
        let profit = prices[rp] - prices[lp];
        maxProfit = Math.max(maxProfit, profit);
      } else {
        lp = rp;
      }
      rp++;
    }
    return maxProfit;
  }
}
