/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    //if last element less than 9, increment and return digits
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    //keeps filling 0 if every item is 9, if item not 9 ( see above )
    digits[i] = 0;
  }
  //add extra slot and fill that slot with 0
  let result = Array(digits.length + 1).fill(0);
  result[0] = 1;
  return result;
};
