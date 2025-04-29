/** Date - 29/04/2025
 * 1979. Find Greatest Common Divisor of Array
 * 
 * Problem statement:- Given an integer array nums, return the greatest common divisor of the 
 * smallest number and largest number in nums.
 * The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.


**/

var findGCD = function(nums) {
    let a = Math.min(...nums);
    let b = Math.max(...nums);

    while (b) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
};

let nums = [2,5,6,9,10];
console.log(findGCD(nums));