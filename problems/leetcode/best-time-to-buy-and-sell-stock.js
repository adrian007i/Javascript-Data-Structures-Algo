/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) { 

    let buying_price = prices[0] ;
    let profit = 0;
    
    
    for (let i = 1; i < (prices.length -1); i++) {

        if(prices[i] < buying_price)
            buying_price = prices[i];
        else
            profit = (profit > prices[i] - buying_price ? profit : prices[i] - buying_price )
        } 

    return profit
};

console.log(maxProfit([1,2]));
 