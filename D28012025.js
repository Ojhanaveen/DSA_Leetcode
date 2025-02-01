/** Date - 28/02/2025
 9. Palindrome Number 
 * 
 * Problem Statement:- Given an integer x, return true if x is a 
palindrome
, and false otherwise.

here we have to check whether the given integer is palindrome number or not!

A palindrome number is a number that reads the same forward and backward. 
*/

var isPalindrome = function (x) {
    let rev = 0, temp = x;
    while(temp >  0){
        ld = temp % 10;
        rev = rev * 10 + ld;
        temp = Math.floor(temp / 10);
    }
    return rev === x;
}
let x  = 121;
console.log(isPalindrome());