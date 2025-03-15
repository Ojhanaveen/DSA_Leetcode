/** Date - 15/03/2025
 283. Move Zeroes
 * 
 * Problem Statement:- Given an integer array nums, move all 0's to the end of 
 * it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.


*/

var moveZeroes = function(nums) {
    let nonzero = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[nonzero]] = [nums[nonzero], nums[i]];
            nonzero++;
        }
    }
};

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); 
