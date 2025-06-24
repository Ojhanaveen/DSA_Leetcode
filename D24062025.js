/** Date - 24/06/2025
 * 2200. Find All K-Distant Indices in an Array
 * 
 * Problem statement:- You are given a 0-indexed integer array nums and two integers key and k.
 *  A k-distant index is an index i of nums for which there exists at least one index j such 
 * that |i - j| <= k and nums[j] == key.
 * Return a list of all k-distant indices sorted in increasing order.

**/

var findDistantIndices = function(nums, key, k){
    let result = [];
    let n = nums.length;
    let lastAdded = -1;

    for(let j = 0; j < n; j++){
        if(nums[j] === key){
            let start = Math.max(j - k, lastAdded + 1);
            let end = Math.min(j + k, n -1);

            for(let i = start; i <= end; i++){
                result.push(i);
                lastAdded = i;
            }
        }
    }
    return result;
};

let nums = [3,4,9,1,3,9,5];
let key = 9;
let  k = 1;
console.log(findDistantIndices(nums, key, k));