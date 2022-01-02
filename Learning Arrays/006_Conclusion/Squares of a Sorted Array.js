/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  return nums
    .map((numbers) => {
      return numbers * numbers;
    })
    .sort((a, b) => a - b);
};
