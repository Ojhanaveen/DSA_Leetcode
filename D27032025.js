/** Date - 27/03/2025
 * 2780. Minimum Index of a Valid Split
 * 
 * Problem statement:- An element x of an integer array arr of length m is dominant if more than half the elements of arr have a value of x.
 * You are given a 0-indexed integer array nums of length n with one dominant element.
 * You can split nums at an index i into two arrays nums[0, ..., i] and nums[i + 1, ..., n - 1], but the split is only valid if:
 * 0 <= i < n - 
 * nums[0, ..., i], and nums[i + 1, ..., n - 1] have the same dominant element
 * Here, nums[i, ..., j] denotes the subarray of nums starting at index i and ending at index j, both ends being inclusive. 
 * Particularly, if j < i then nums[i, ..., j] denotes an empty subarray.
 * Return the minimum index of a valid split. If no valid split exists, return -1.

 
**/

var minimumIndex = function(nums){
    let n = nums.length;

    let firstMap  = new Map();
    let secondMap = new Map();

    for(let num of nums){
        secondMap.set(num, (secondMap.get(num) || 0) + 1);
    }

    for(let idx = 0; idx < n; idx++){
        let num = nums[idx];

        secondMap.set(num, secondMap.get(num) - 1);

        if(secondMap.get(num) === 0){
            secondMap.delete(num);
        }
        firstMap.set(num, (firstMap.get(num) || 0) + 1);

        if(firstMap.get (num) * 2 > idx + 1 && (secondMap.get(num) || 0 ) * 2 > n - idx - 1){
            return idx;
        }
    } return -1;
};

let nums = [1, 2, 2, 2];

console.log(minimumIndex(nums));