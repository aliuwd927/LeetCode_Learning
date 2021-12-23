/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  //loop array
  for (let i = 0; i < nums.length; i++) {
    //if current item === to next item
    if (nums[i] === nums[i + 1]) {
      //splice to remove item
      nums.splice(i, 1);
      //i-- to not let item skip
      i--;
    }
  }
  console.log(nums);
};

/*

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/
