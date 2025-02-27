/** Date - 26/02/2025
  3232. Find if Digit Game Can Be Won

 * Problem Statement:- You are given an array of positive integers nums.

Alice and Bob are playing a game. 
In the game, Alice can choose either all single-digit numbers or all double-digit numbers from nums, 
and the rest of the numbers are given to Bob. Alice wins if the sum of her numbers is strictly greater 
than the sum of Bob's numbers.

Return true if Alice can win this game, otherwise, return false.
*/

var canAliceWin = function(nums){
    let singleDigitSum = 0;
    let dobuleDigitSum = 0;

    for(let num of nums){
        if(num >= 1 && num <= 9){
            singleDigitSum += num;
        }else if(num >= 10 && num <=99){
            dobuleDigitSum += num;
        }     
    }
    if(singleDigitSum > dobuleDigitSum || dobuleDigitSum > singleDigitSum){
        return true;
    }else{
        return false;
    
}
}

let nums = [1,2,3,4,10]

console.log(canAliceWin(nums))