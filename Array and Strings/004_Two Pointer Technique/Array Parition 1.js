/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  //sort the array
  let sortedNums = nums.sort((a, b) => a - b);

  //keeps track of the array we visited
  let counter = 0;

  //stores array AFTER counter reach 2
  let nestedArr = [];

  //loop thru sorted Array
  //we start at -1 instead of 0 to account for the first element.
  //we also did len - 1 to account for undefined.
  for (let i = -1; i < sortedNums.length - 1; i++) {
    //we use counter to count up to 2
    counter++;

    //if counter reaches 2
    if (counter === 2) {
      //push the 2 items that we visited when counter hits 2
      nestedArr.push([sortedNums[i], sortedNums[i + 1]]);

      //reset the counter
      counter = 0;
    }
  }

  //flatten the array, so it returns []  []  [] instead of [ [] [] [] ];
  const min = nestedArr.flatMap((x) => Math.min(...x));

  //sum all min numbers
  return min.reduce((p, c) => p + c);
};
