/** Date - 19/03/2025
  392. Is Subsequence

 * 
 * Problem Statement:- Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters
 *  without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

var isSubsequence = function(s,t){
    let i = 0;
    let j = 0;

    while(i < s.length && j < t.length){

        if(s[i] === t[j]){
            i++;
        }
        j++;
    }
    return i === s.length;
};

let s = "abc", t = "ahbgdc";
console.log(isSubsequence(s,t));