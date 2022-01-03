/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let left = 0;
  //take thes total of nums array
  let right = nums.reduce((a, b) => a + b, 0);
  //iterate thru the array
  for (let i = 0; i < nums.length; i++) {
    /*
   As we iterate thru the array, take the total, and subract by the value of the element each time
   right = 28, nums[0] = 1, right -= 1 => 27. right now equals 27. 27 - nums[1] = 20 and etc...until 0.
       */
    right -= nums[i];
    console.log(right);
    /*
   currently left is equal to 0. Left is equal to right when the array is completely iterated thru.
   AS of right now, IF we exclude line 27, the current statement above is true.
   however, if we include line 27.
   left is adding UP , while right is subtracting down.
   as left goes up & right goes down, our 1st met requirement is at index 3 as right is approaching 0
   as right is approaching 0 & left is approaching 28, 11 is where left === right & right is === to left
       */
    if (left === right) {
      console.log(i);
      return i;
    }

    left += nums[i];
    //console.log(left);
  }
  return -1;
};

/*
//iterate from the left
   for(let i = 0; i < nums.length;i++){
       console.log(nums[nums.length-1] - nums[i]);
   }
   
   //we use nums.length - 1 bc nums.length = 3
   //if nums length = 3 nums[3] === undefined
   //nums length -1 = 2 nums[2] === last element since index is 0 based
   //we can set to either 0 or -1 bc j > 0 will not print 0 as 0 is not > 0, so we to >=0 or -1;
   
   //iterate from the right
   for(let j = nums.length-1; j > -1; j--){
       //console.log(nums[j]);
   }
*/
