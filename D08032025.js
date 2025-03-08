/** Date - 08/03/2025
  242. Valid Anagram

 * 
 * Problem Statement:- Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/
var isAnagram = function(s, t) {
   
    if (s.length !== t.length) return false;
    let count = new Map();

    for (let char of s) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    
    for (let char of t) {
        if (!count.has(char)) return false; 
        count.set(char, count.get(char) - 1);

        if (count.get(char) === 0) count.delete(char);
    }
    return count.size === 0; 
};

let s = "anagram", t = "nagaram";

console.log(isAnagram(s,t))