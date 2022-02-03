/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let pointerOne = 0;
  let pointerTwo = numbers.length - 1;

  let arrT = [];

  while (pointerOne <= pointerTwo) {
    const temp = numbers[pointerOne];
    if (temp + numbers[pointerTwo] < target) {
      pointerOne++;
    } else if (temp + numbers[pointerTwo] > target) {
      pointerTwo--;
    } else if (temp + numbers[pointerTwo] === target) {
      arrT.push(pointerOne + 1, pointerTwo + 1);
      if (arrT.length > 2) arrT.length = 2;
      return arrT;
    }
  }

  //     if(numbers[pointerOne] + numbers[pointerTwo] === target){
  //         console.log('yes')
  //     }else{
  //         pointerOne++;
  //         pointerTwo--;
  //     }

  //     console.log(numbers[pointerOne]); //should return 7
  //     console.log(numbers[pointerTwo]); // should return 11;
  //     this logic skips 2, and 15. We dont need to skip.
};
