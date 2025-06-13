/** Date - 13/06/2025
 * 2616. Minimize the Maximum Difference of Pairs
 * 
 * Problem statement:-
 * You are given a 0-indexed integer array nums and an integer p. 
 * Find p pairs of indices of nums such that the maximum difference amongst all the pairs is minimized.
 *  Also, ensure no index appears more than once amongst the p pairs.
 * Note that for a pair of elements at the index i and j, the difference of this pair is |nums[i] - nums[j]|,
 *  where |x| represents the absolute value of x.
 * Return the minimum maximum difference among all p pairs. We define the maximum of an empty set to be zero.

**/

var minimizeMax = function(nums, p){
    nums.sort((a, b) => a - b );

    function canFormPairs(maxDiff){
        let count = 0;

        for(let i = 1; i < nums.length; ){
            if(nums[i] - nums[i-1] <= maxDiff){
                count++;
                i += 2
            }else{
                i += 1;
            }
        }
        return count >= p;
    }

    let left = 0, right = nums[nums.length - 1] - nums[0];
    while(left < right){
        let mid = Math.floor((left + right) / 2);
        if(canFormPairs(mid)){
            right = mid;
        }else{
            left = mid + 1
        }
    }
    return left;
};

let nums = [1, 3, 6, 19, 20];
let p = 2;
console.log(minimizeMax(nums, p)); 