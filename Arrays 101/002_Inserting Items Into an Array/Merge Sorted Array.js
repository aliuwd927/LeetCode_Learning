/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  //     //to concat two arrays in place, iterate thru nums 2
  //     for(let i = 0; i < nums2.length;i++){

  //         //push nums2 into nums1 due to modify in place
  //         nums1.push(nums2[i]);

  //         /* sort nums1 [000122356] */
  //         nums1.sort();

  //        *** THIS REMOVES 0 3 TIMES BC OF OUR FOR LOOP ***
  //         nums1.splice(0,1);

  //     }
  // WHILE THIS SOLUTIONS WORKS (DOES NOT PASS ALL CASES) this is a great way to begin brute force.

  //To modify array in place
  //SPLICE RETURNS ITEMS REMOVED
  //WE START WITH M BC, 000 starts on index 3.
  //WE NEED TO DELETE 3 ITEMS, WHICH IS WHY WE USE N.
  //... <- THIS IS A SPREAD. TO READ ARRAY WITHIN ARRAY USE SPREAD OR SEEK NAN IN SOLUTION
  nums1.splice(m, n, ...nums2);

  //You should know this by now...Or else I'm sad.
  nums1.sort((a, b) => a - b);
};
