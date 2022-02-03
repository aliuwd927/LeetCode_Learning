/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let counter = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      counter++;
      if (counter > maxCount) {
        maxCount++;
      }
    } else {
      counter = 0;
    }
  }

  return maxCount;
};
