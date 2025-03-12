/** Date - 12/03/2025
  2529. Maximum Count of Positive Integer and Negative Integer

 * 
 * Problem Statement:- Given an array nums sorted in non-decreasing order, 
 * return the maximum between the number of positive integers and the number of negative integers.
 * In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, 
 * then return the maximum of pos and neg.
 * Note that 0 is neither positive nor negative.
*/
var maximumCount = function(nums){
    let positiveCount = 0;
    let negativeCount = 0;
    let answer

    for(let i = 0; i < nums.length; i++)
    {
        let positiveValue = nums[i];
        let negativeValue = nums[i];
        
        if(positiveValue >= 1 && positiveValue !==0)
        {
            positiveCount++;
        } else if (negativeValue < 0)
        {
            negativeCount++;
        }
        ans = Math.max(positiveCount, negativeCount);
    }
    return ans;
}

let nums = [-2,-1,-1,1,2,3];
console.log(maximumCount(nums));