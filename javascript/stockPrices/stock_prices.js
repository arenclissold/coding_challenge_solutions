function getMaxProfit(stockPrices) {
  // set totalProfit as the first possible transaction
  let totalProfit = stockPrices[1] - stockPrices[0]
  // calculate all posible sales in the array and find the biggest difference
  // iterate over prices
  stockPrices.forEach((buyPrice, i) => {
    // get the maximum number of the remaining prices
    const maxSellPrice = Math.max(...stockPrices.slice(i + 1))
      // determine the difference from the starting number with max sell price
      const difference = (buyPrice - maxSellPrice) * - 1
      // if the difference is the largest so far, overide totalProfit with its value
      if (difference > totalProfit) {
        totalProfit = difference
      }
  });
  // return totalProfit
  return totalProfit
};

module.exports = { getMaxProfit }
