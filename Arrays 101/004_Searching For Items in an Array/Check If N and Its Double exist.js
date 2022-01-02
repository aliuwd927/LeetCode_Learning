/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === 2 * arr[j]) {
        return true;
      }
    }
  }
  return false;

  /*
 CHECK LOGIC AND FIGURE OUT WHY
 //Create Hastable to visited elements
 let arrHashTable ={
     
 }
 let checkDblArr = [];
 let anyDoubles = false;
 //Iterate thru the array
 for(let i = 0; i < arr.length; i++){
     //if arrHashTable doesn't contain any of these
     //put each arr[i] into a key:value for each visit
    if(!arrHashTable.hasOwnProperty(arr[i])){
        //lets us know we have visited the arr element once/
        arrHashTable[arr[i]]= 1;
    }
     let isDouble = checkDblArr.push(arr[i] / 2);
 }
 for(let j = 0; j < checkDblArr.length;j++){
     if(arrHashTable[checkDblArr[j]] !== undefined){
         arrHashTable[checkDblArr[j]]++
     }
 }
 
 for(let props in arrHashTable){
    if(arrHashTable[props] > 1){
        anyDoubles = true;
    }
 }
 return anyDoubles;
*/
};

/*

THIS SOLUTION ONLY WORKS IF THE ELEMENT THAT IS DOUBLED IS ON ARR[0] ONLY!!!
WE NEED TO FIND A SOLUTION WHERE IF DOUBLED ELEMENT IS ANYWHERE IN THE ARRAY WE CAN FIND IT AND CHECK IT.

//Iterate thru the array
 for(let i = 0; i < arr.length; i++){
     //Keep track of elements, so we can compare
     let firstElement = arr[i];
     //takes first element to compare next element
     let isDouble = arr[i] / 2;
     //re-loop so, first element can compare next element
         for(let k = i + 1; k < arr.length;k++){
             if(isDouble === arr[k]){
                 return true;
             }
         }
     return false;
 }


*/
