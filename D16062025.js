/** Date - 16/06/2025
 * 2016. Maximum Difference Between Increasing Elements
 * 
 * Problem statement:-Given a 0-indexed integer array nums of size n, 
 * find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]),
 *  such that 0 <= i < j < n and nums[i] < nums[j].
 * Return the maximum difference. If no such i and j exists, return -1.

**/

function maximumDifference(nums){
    let ans = -1;
    let n = nums.length;

    for(let i = 0 ; i < n; i++){
        for(let j = i + 1; j < nums.length; j++){

            if(nums[j] > nums[i]){
                let diff = nums[j] - nums[i];
                ans = Math.max(ans, diff);
            }
        }
    }
    return ans;
};

console.log(maximumDifference([7,1,5,4]));