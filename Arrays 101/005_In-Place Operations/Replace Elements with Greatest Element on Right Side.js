/**
 * @param {number[]} arr
 * @return {number[]}
 */

/*
    let arr = [17,18,5,4,6,1];
    bc arr is 0 index, the ending is 5;
    the length of arr equals 6
    by doing arr.length - 1, we want count using arr index instead of how many elements.
    

*/
var replaceElements = function (arr) {
  //iterates up
  for (let i = arr.length - 1; i >= 0; i--) {
    //keeps track of the elements as we traverse
    let currentElement = arr[i];
    let nextElement = arr[i - 1];
    //replace next element, if no params meet condition move on to next element.
    //the 'next element' should've been replace by current element before moving to the next element in line
    if (currentElement > nextElement) {
      arr.splice(i - 1, 1, currentElement);
    }
  }
  //pushes -1 to end of arr
  arr.push(-1);
  //pops the first element off
  arr.shift();
  return arr;
};
