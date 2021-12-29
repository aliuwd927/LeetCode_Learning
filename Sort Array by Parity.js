/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] % 2 !== 0) {
      let odds = nums.splice(i, 1);
      nums.push(odds);
    } else {
      i++;
    }
  }
  return nums;
};
