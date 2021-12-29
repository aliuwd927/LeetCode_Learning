/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (arr) {
  //Counter
  let i = 0;
  //Loop thru the array.
  for (let j = 0; j < arr.length; j++) {
    //Start at 0 for J so we can compare.
    //arr[i] and arr[j] (think of this as a free forLoop without using extra resources)
    //Compare i and j
    //arr[i] current = 0 ( first Element)
    //arr[j] currently = 0 ( second element)
    //if i === 0 move to to the back
    //created a nested if?
    if (arr[i] === 0) {
      //last element = first element
      //delete first item
      //push number 0 ( not arr0 , just number 0 itself to end of arry (aka INSERTING our own 0))
      //since splice RETURNS the items deleted, maybe use variable???
      arr.splice(i, 1);
      arr.push(0);
    } else {
      i++;
      //if not continue tracking
    }
  }
  console.log(arr);
};

/*
Input: 
nums = [0,1,0,3,12]

Output:
[1,3,12,0,0]


*/
