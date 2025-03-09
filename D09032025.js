/** Date - 09/03/2025
  2824. Count Pairs Whose Sum is Less than Target

 * 
 * Problem Statement:-Given a 0-indexed integer array nums of length n and an integer target,
 *  return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.
*/
var countPairs = function(nums, target) {
    let count = 0;

   for(let i=0; i<nums.length; i++){

       for(let j=i+1; j<nums.length;  j++){

           if(nums[i] + nums[j] < target){
               count++
           }
       }
   }
   return count;
};

let nums = [-1,1,2,3,1], target = 2 ;
console.log(countPairs(nums, target));