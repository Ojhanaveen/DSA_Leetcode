/** Date - 17/04/2025
 * 2176. Count Equal and Divisible Pairs in an Array
 * 
 * Problem statement:- Given a 0-indexed integer array nums of length n and an integer k, 
 * return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j]
 *  and (i * j) is divisible by k.
 * 
**/

var countDigit = function(nums, k){
    let n  = nums.length;
    let count = 0;

    for(let i = 0 ; i < n ; i++){
        for(let j = i + 1; j < n; j++){
            if(nums[i] == nums[j] && (i * j) % k === 0){
                count++;
            }
        }
    }
    return count;
};

let nums = [3,1,2,2,2,1,3], k = 2;
console.log(countDigit(nums, k));