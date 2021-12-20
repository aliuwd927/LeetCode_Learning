/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  //console.log(arr);
  const initLength = arr.length;

  /*
       Step 1: check if arrays have 0
       Step 2: if array has no 0, return arr
       Step 3: if array has 0, check if element is odd
       Step 4: if element is odd, check if next element is 0
       Step 5: if next element is 0, add one more 0
       Step 6: if next element is even, check if next element is odd
       Step 7: if odd, back to step one.  
    */

  //looping thru arr
  for (let i = 0; i < arr.length; i++) {
    //check for arry has 0's
    if (arr[i] === 0) {
      //console.log(arr[i]);
      //console.log(arr[i+1]);
      //console.log([i+1]);
      //Check if next item is 0, if 0, duplicate 0's and shift items to the right
      arr.splice(i, 0, 0);
      //Randomly took a wild guess to and works...
      i += 1;
    }
  }
  //keep length the same
  if (arr.length > initLength) {
    arr.length = initLength;
  }

  return arr;
};
