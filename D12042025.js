/** Date - 12/04/2025
 * 121. Best Time to Buy and Sell Stock
 * 
 * Problem statement:- You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing 
 * a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. 
 * If you cannot achieve any profit, return 0.

 * 
**/

var maxProfit =  function(prices){
    let minimum = prices[0], profit = 0;
    for(let i = 1; i < prices.length; i++){
        let cost  = prices[i] - minimum;
        profit = Math.max(cost, profit);
        minimum = Math.min(minimum, prices[i]);
    }
    return profit;
};

let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));