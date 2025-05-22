/** Date - 22/05/2025
 * 125. Valid Palindrome
 * 
 * Problem statement:- A phrase is a palindrome if, after converting all uppercase letters into lowercase 
 * letters and removing all non-alphanumeric characters, it reads the same forward and backward. 
 * Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
**/

var isPalindrome = function(s){
    let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    let rev = str.split("").reverse().join("");

    return str === rev;
};

let s = "A man, a plan, a canal: Panama";

console.log(isPalindrome(s));