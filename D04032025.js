/** Date - 04/03/2025
  258. Add Digits

 * 
 * Problem Statement:- Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
*/
var addDigits = function(nums){
    while(nums >= 10){
        let sum = 0;

        while(nums > 0){
            sum += nums % 10;
            nums = Math.floor( nums / 10);
        }
        nums = sum;
    }
    return nums;
};

let nums = 38;

console.log(addDigits(nums));