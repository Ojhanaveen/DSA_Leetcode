/** Date - 14/05/2025
 * 387. First Unique Character in a String
 * 
 * Problem statement:- Given a string s, find the first non-repeating character in it and return its index.
 * If it does not exist, return -1.

**/

var firstUniqChar = function(s) {
    for(let i = 0; i < s.length; i++){
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
            return i;
        }
    }
    return -1;
};

let s = "leetcode";
console.log(firstUniqChar(s));