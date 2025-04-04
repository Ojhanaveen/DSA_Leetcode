/** Date - 04/04/2025
 * 374. Guess Number Higher or Lower
 * 
 * Problem statement:- We are playing the Guess Game. The game is as follows:
 * I pick a number from 1 to n. You have to guess which number I picked.
 * Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
 * You call a pre-defined API int guess(int num), which returns three possible results:
 * 1: Your guess is higher than the number I picked (i.e. num > pick
 * 1: Your guess is lower than the number I picked (i.e. num < pick
 * 0: your guess is equal to the number I picked (i.e. num == pick
 * Return the number that I picked..

 
**/
// Mocked guess API for testing
let pick = 6;  // This is the number you're trying to guess
const guess = function(num) {
    if (num > pick) return -1;
    if (num < pick) return 1;
    return 0;
};

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1, right = n;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let res = guess(mid);
        
        if (res === 0) return mid;
        else if (res > 0) left = mid + 1;
        else right = mid - 1;
    }
};

// Test case
let n = 10;
console.log(guessNumber(n));  // Output: 6

