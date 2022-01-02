/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  //creates an empty set
  const set = new Set();
  //bc set is empty, enter values based by length
  //set[0] = 1 and etc... until set is equal to length
  for (let i = 0; i < nums.length; i++) {
    //set is now 1,2,3 all the way to 8
    set.add(i + 1);
  }

  //iterates thru the arr of nums.
  //delete elements in set, based by elements of nums
  //returns the difference between nums and set
  for (const num of nums) {
    set.delete(num);
  }
  //returning the difference
  return [...set];
};

/*
Logic does not completely work.
//clone arr...then compare later
  let cloneArr = [...nums];
  //first we sort
  cloneArr.sort();
  nums.sort();
  //use counter to compare
  let counter = 0;
  //return the element that was added in array
  let itemsAdded = [];
  //second we delete dupes
      //iterate arr to check
  for(let i = 0; i < cloneArr.length; i++){
      if(!cloneArr || nums.length < 1) return null;
      //we need to track currentElement
      let currentElement = cloneArr[i];
      //we need to track nextElement
      let nextElement = cloneArr[i+1];
      //if current is equal to next
      if(currentElement === nextElement){
          //delete dupe
          cloneArr.splice(i,1);
          nums.splice(i,1);
              if(cloneArr.length === 1){
                  itemsAdded.push(cloneArr[i]+1);
              }
      }
      //check if each number is nums[i]+1
      //if it is, move, if not nums[i]+1
      //nums.splice[i,1,nums[i]+1] to add element
      if(currentElement < nextElement){
          //check if nextElement is +1 of currentElement
          let chkIfOne = nextElement - currentElement;
          if(chkIfOne !== 1){
              //add elements
             cloneArr.splice(i+1,0,currentElement+1);
          }
      }
      if(cloneArr[i]===nums[counter]){
          counter++;
      }else{
          itemsAdded.push(cloneArr[i]);
      }
  }
  //chk if dupe was deleted
  console.log(nums);
  console.log(cloneArr);
  return itemsAdded;
*/
