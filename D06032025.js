
/** Date - 06/03/2025
  3467. Transform Array by Parity

 * 
 * Problem Statement:- You are given an integer array nums.
 *  Transform nums by performing the following operations in the exact order specified:

  Replace each even number with 0.
  Replace each odd numbers with 1.
  Sort the modified array in non-decreasing order.
  Return the resulting array after performing these operations.

*/
var transformArray = function(nums) {
    let x = 0 ;
    let y = 1;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
            nums[i] = x;
        }
        else{
            nums[i] = y;
        }
    }
    nums.sort((a,b)=> a - b);
    return nums;
};

let nums = [4,3,2,1];

console.log(transformArray(nums));