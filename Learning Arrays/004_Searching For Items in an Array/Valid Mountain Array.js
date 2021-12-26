/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let isMountain = false;
  //Checks length of an array
  if (arr.length < 3) {
    return false;
  }
  //start at one, to compare previous element
  //arr.length-1 because we started at 1
  for (let i = 1; i < arr.length - 1; i++) {
    let currentElement = arr[i];
    let nextElement = arr[i + 1];
    let previousElement = arr[i - 1];
    //this will walk up
    //currentElement checks previousElement,returns true if current is greater than previous
    //currentElement checks nextElement, return true if current is greater than next
    if (currentElement > previousElement && currentElement > nextElement) {
      isMountain = true;
    } else if (
      previousElement >= currentElement &&
      nextElement >= currentElement
    ) {
      return false;
    }
  }
  return isMountain;
};

/*

Recall that arr is a mountain array if and only if:

arr.length >= 3 //Done

There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]


Got stuck, looked at solution, try to come up with your own and test

*/
