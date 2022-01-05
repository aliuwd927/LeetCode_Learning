/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  //start at the last element
  for (let i = digits.length - 1; i >= 0; i++) {
    //if the last digit start with a 9 , we change it to 0
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      //starts at last digit and adds 1
      //returns THIS local digit instead of the global function digit.
      digits++;
      return digits;
    }
  }
  //add one in front of any digits that is 9,99,999
  return [1, ...digits];
};
