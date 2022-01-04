/**
 * @param {number[]} nums
 * @return {number}
 */

/*
x = index
m = the largest element
maxIndex = x;
x != m with m < 2*x
index != largest index with index < 2 * index


*/
var dominantIndex = function (nums) {
  let maxElement = -1;
  let secondLargestElement = -1;
  let maxIndex;
  for (let i = 0; i < nums.length; i++) {
    //keeps track of current Element as we iterate thru the array
    let currentElement = nums[i];
    console.log(currentElement);
    if (currentElement > maxElement) {
      /*
          Step 1: 2ndLrgEl = -1 to to maxElement
          Step 2: maxElement = 3
          Step 3: maxIndex = 0
          
          Step 1: 2ndLrgEl = 3 due to previous maxElement
          Step 2: maxElement = 6
          Step 3: maxIndex = 1
          
          When currentElement reaches 1 this will fail, why?
          1 is NOT larger than 6, there for we check the 2nd logic below.
          */
      secondLargestElement = maxElement;
      maxElement = currentElement;
      maxIndex = i;
    } else if (currentElement > secondLargestElement) {
      /*
          here we check if 1 is greater than 3 
          it is not, the logic ends along with the for loop
          */
      secondLargestElement = currentElement;
    }
  }

  /*
  Currently, maxElement is 6
  Currently, secondLargestElement is 3
  Currently, maxIndex is 1
  */

  //2ndLrgEl = 3... 3*2 <= to maxElement so we return maxIndex which is one.
  if (secondLargestElement * 2 <= maxElement) {
    return maxIndex;
  } else {
    return -1;
  }
};
