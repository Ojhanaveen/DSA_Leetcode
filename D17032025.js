/** Date - 17/03/2025
  704. Binary Search

 * 
 * Problem Statement:- Given an array of integers nums which is sorted in ascending order 
 *  and an integer target, write a function to search target in nums.
 *  If target exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.

*/
var search = function(nums, target){
    let startingNumber = 0;
    let lastNumber = nums.length - 1;

    while(startingNumber <=  lastNumber)
    {
        let mid = Math.floor((startingNumber + lastNumber) / 2);

        if(nums[mid] === target)
        {
            return mid;
        }
        else if(nums[mid] < target)
        {
            startingNumber = mid + 1;
        }
        else{
            lastNumber = mid - 1;
        }
    }
    return -1;
};

let nums = [-1,0,3,5,9,12], target = 9;
console.log(search(nums, target));