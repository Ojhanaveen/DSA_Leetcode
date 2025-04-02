/** Date - 02/04/2025
 * 2873. Maximum Value of an Ordered Triplet I
 * 
 * Problem statement:- You are given a 0-indexed integer array nums.
 * Return the maximum value over all triplets of indices (i, j, k) such that i < j < k. 
 * If all such triplets have a negative value, return 0.
 * The value of a triplet of indices (i, j, k) is equal to (nums[i] - nums[j]) * nums[k].

 
**/

var maximumTripletValue = function(nums){
    let n = nums.length;

    let ans = 0;

    for(let i = 0 ; i < n ; i++){
        let first  = nums[i];

        for(let j = i + 1; j < n; j++){
            let second = nums[j];

            for(let k = j + 1; k < n; k++){
                let third = nums[k];

                let currAns = ((first - second) * third);
                ans = Math.max(currAns, ans);
            }
        }
    }
    if(ans < 0){
        return -1;
    }else{
        return ans;
    }
};

let nums = [12,6,1,2,7];

console.log(maximumTripletValue(nums));