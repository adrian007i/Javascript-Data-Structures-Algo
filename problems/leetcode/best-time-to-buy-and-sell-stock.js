/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {  
     
    if (prices.length === 1)
        return 0;
     
    let left  = 0; 
    let profit = 0;
     
    for (let right = 1; right < prices.length; right++) {
        
        if(prices[right] - prices[left] > profit) profit = prices[right] - prices[left];
        if(prices[right] < prices[left]) left = right; 
    }
     return profit;
};
      

console.log(maxProfit([1,2]));
 