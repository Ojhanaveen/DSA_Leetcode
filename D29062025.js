/** Date - 29/06/2025
 * 2099. Find Subsequence of Length K With the Largest Sum
 * 
 * Problem statement:- You are given an integer array nums and an integer k. 
 * You want to find a subsequence of nums of length k that has the largest sum.
 * Return any such subsequence as an integer array of length k.
 * A subsequence is an array that can be derived from another array by deleting some
 *  or no elements without changing the order of the remaining elements.

**/

function maxSubsequence(nums, k){
    let n = nums.length;
    let vals = [];

    for(let i = 0 ; i < n ; i++){
        vals.push({index: i, values: nums[i]});
    }

    vals.sort((a, b) => b.values - a.values);

    let biggerK = vals.slice(0 , k);

    biggerK.sort((a, b) => a.index - b.index);

    let ans = [];

    for(let i = 0 ; i < k; i++){
        ans.push(biggerK[i].values);
    }
    return ans;
};

let nums = [2,1,3,3], k = 2;
console.log(maxSubsequence(nums, k));