/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let howManyEvenDigits = 0;
    nums.map((number)=>{
        let isEven = Number(number.toString().length) % 2;
        if(isEven === 0){
            howManyEvenDigits++
        }
    });
        return howManyEvenDigits;
};

//[ 12, 345, 2, 6, 7896 ]