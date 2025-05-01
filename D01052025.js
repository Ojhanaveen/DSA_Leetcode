/** Date - 01/04/2025
 * 2108. Find First Palindromic String in the Array
 * 
 * Problem statement:- Given an array of strings words, return the first palindromic string in the array. 
 * If there is no such string, return an empty string "".
 * A string is palindromic if it reads the same forward and backward.


**/
var firstPalindrome = function(words){
    for(let word of words){
        let left = 0;
        let right = word.length - 1;
        let isPalindrome = true;

        while(left < right){
            if(word[left] !== word[right]){
                isPalindrome = false;
                break;
            }
            left ++;
            right --;
        }
        if(isPalindrome) return word;
    }
    return "";
};

let words = ["abc","car","ada","racecar","cool"];
console.log(firstPalindrome(words));