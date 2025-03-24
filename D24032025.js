/** Date - 23/03/2025
 * 2215. Find the Difference of Two Arrays

 * 
 * Problem Statement:- Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
 * answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
 * answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
 * Note that the integers in the lists may be returned in any order.

**/


var findDiff = function(nums1, nums2){
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let ans0 = [];
    let ans1 = [];

    for(let num of set1){
        if(!set2.has(num)){
            ans0.push(num);
        }
    }

    for(let num of set2){
        if(!set1.has(num)){
            ans1.push(num);
        }
    }
    
    let finalAns = [ans0 , ans1];
    return finalAns;
};

let nums1 = [1,2,3], nums2 = [2,4,6];

console.log(findDiff(nums1, nums2));