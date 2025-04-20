/** Date - 20/04/2025
 * 1365. How Many Numbers Are Smaller Than the Current Number
 * 
 * Problem statement:- Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
 *  That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
 * Return the answer in an array.
 * 
**/
var smallerNumbersThanCurrent = function(nums){
    let ans = [];

    for(let i = 0; i < nums.length; i++){
        let count = 0;
        for(let j = 0; j < nums.length; j++){
            if(nums[j] < nums[i]){
                count++;
            }
        }
        ans.push(count);
    }
    return ans;
};
let nums = [8,1,2,2,3];
console.log(smallerNumbersThanCurrent(nums));