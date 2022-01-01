/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  nums.sort((a, b) => b - a);
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      arr.push(nums[i]);
    }
  }

  if (arr.length < 3) {
    return Math.max(...arr);
  } else {
    return arr[2];
  }
};
