/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  //clone array
  let cloneHeights = [...heights].sort((a, b) => a - b);
  //keep track of non dupes
  let i = 0;
  //loop thru arr
  for (let j = 0; j < heights.length; j++) {
    //console.log(heights[j]);
    //console.log(cloneHeights[j]);
    //if input does not equal clone arry , incrment i
    if (heights[j] !== cloneHeights[j]) {
      i++;
    }
  }
  //return how many non dupes.
  return i;
};

//I am proud of this one :D
