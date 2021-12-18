/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  //Setup the frequencies we encounter
  let frequencyCounter = 0;
  let maxCount = 0;
  //If empty array, return 0, if array has only 1 item, return the first item
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  //Loop thru the array.
  for (let i = 0; i < nums.length; i++) {
    //If array item is = to 1, we up the frequency counter
    if (nums[i] === 1) {
      frequencyCounter++;
      //We also need to record out max number of consecutive numbers
      if (frequencyCounter > maxCount) {
        maxCount++;
      }
    } else {
      frequencyCounter = 0;
    }
  }
  return maxCount;
};

/*
Input: nums = [1,1,0,1,1,1]
Output: 3

Frequency counter will add 1, for the num[0]...frequency counter will now be 2 because of nums[1]
Frequency now will return to 0 because the next item nums[2] is 0, so we need to reset. However Maxcount stays at 2.
Freuqency counter will now be 1 because of reset. First item is nums[3], max counter is still at 2, because FC is < MC.
Frequency counter will now be 2 because of reset. Second item is num[4], max counter is still at 2, becuase FC is < MC.
Frequency counter will now be 3 because of reset. Third item is num[5], FC is now greater than MC, so we add 1 to MC.
Now maxCount is 3. 



*/
