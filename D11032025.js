/** Date - 11/03/2025
  2574. Left and Right Sum Differences

 * 
 * Problem Statement:- You are given a 0-indexed integer array nums of size n.
 * Define two arrays leftSum and rightSum where:
 * leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
 * rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
 * Return an integer array answer of size n where answer[i] = |leftSum[i] - rightSum[i]|.
*/

var leftRightDifference = function(nums){
    let n = nums.length;
    let answer = new Array(n);
    let leftSum = 0;
    let rightSum = 0;

    if(n == 0){
        return -1;
    }

    let prefix = new Array(n).fill(0);
    prefix[0] = nums[0];

    for(let i = 1; i < n; i++){
        prefix[i] = prefix[i - 1] + nums[i];
    }

    for(let i = 0; i < n; i++){
        if(i > 0){
            leftSum = prefix[i - 1];
        }
        rightSum = prefix[n -1] - prefix[i];
        answer[i] = Math.abs(leftSum - rightSum);
    }
    return answer;
}

let nums = [10,4,8,3];
console.log(leftRightDifference(nums));