const assert = require("assert")
const path = require('path');
const { getMaxProfit } = require(path.join(__dirname, './stock_prices'))

describe("getMaxProfit", () => {
  it("should return the profit between any two numbers, buying then selling", () => {
    assert.equal(getMaxProfit([10, 7, 5, 8, 11, 9]), 6);
  });

  it("maxium difference must have larger number first, no shorting", () => {
    assert.equal(getMaxProfit([11, 10, 7, 5, 8, 9]), 4);
  });

  it("can return negative if the price were to go down over the array", () => {
    assert.equal(getMaxProfit([11, 10, 7, 5, 4, 2]), -1);
  });
});
