/** Date - 16/04/2025
 * 2537. Count the Number of Good Subarrays
 * 
 * Problem statement:- Given an integer array nums and an integer k, return the number of good subarrays of nums.
 * A subarray arr is good if there are at least k pairs of indices (i, j) such that i < j and arr[i] == arr[j].
 * A subarray is a contiguous non-empty sequence of elements within an array.
 * 
**/
var countGood = function(nums, k) {
    
    let freq = new Map();
    let n = nums.length;
    let left = 0, totalPairs = 0, count = 0;

    for (let right = 0; right < n; right++) {
        let num = nums[right];
        let currentFreq = freq.get(num) || 0;
    
        totalPairs += currentFreq;
        
        
        freq.set(num, currentFreq + 1);

        
        while (totalPairs >= k) {
            count += (n - right); 

            let leftNum = nums[left];
            let freqLeft = freq.get(leftNum);
            
            
            totalPairs -= (freqLeft - 1);
            freq.set(leftNum, freqLeft - 1);
            
            left++;
        }
    }

    return count;
};

let  nums = [1,1,1,1,1], k = 10;
console.log(countGood(nums, k));