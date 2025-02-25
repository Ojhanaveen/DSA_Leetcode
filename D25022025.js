/** Date - 24/02/2025
  3162. Find the Number of Good Pairs I

 * Problem Statement:- You are given 2 integer arrays nums1 and nums2 of lengths n and m respectively.
 *  You are also given a positive integer k.
 * A pair (i, j) is called good if nums1[i] is divisible by nums2[j] * k (0 <= i <= n - 1, 0 <= j <= m - 1).
 * Return the total number of good pairs.

 
*/

var numberOfPairs = function(nums1, nums2, k) {
    let count = 0;
    for (let i = 0; i < nums1.length; i++) {
        let temp = nums1[i];

        for (let j = 0; j < nums2.length; j++) {
            let temp2 = nums2[j]; 
            
            if (temp % (temp2 * k) === 0) {
                count++;
            }
        }
    }
    return count;
};

let nums1 = [1,3,4];
let nums2 = [1,3,4];
let k = 1;

console.log(numberOfPairs(nums1,nums2,k));