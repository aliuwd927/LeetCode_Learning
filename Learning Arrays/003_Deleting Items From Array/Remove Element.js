/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  //console.log(nums,val);
  //loop thru array
  for (let i = 0; i < nums.length; i++) {
    //if nums of i is equal to val remove duplicate
    if (nums[i] === val) {
      //this removes the first occurences of 2 and skips the next
      nums.splice(i, 1);
      //this allows use to NOT skip the next occurence.
      i--;
    }
  }
  console.log(nums);
};

/*
if we use num.splice(i,1) for the array below
[01223042]
it is suppose to remove ALL the 2s however, it does not
it removes the first occurrence of 2 at index nums[2];
skips the 2 at index nums[3] and continues to remove all other 2s
to prevent from happening, we use i--

for(let i = 0; i < nums.length;i++){
      if(nums[i] === val){
        nums.splice(i,1);
        i--;
      }
  }



*/
