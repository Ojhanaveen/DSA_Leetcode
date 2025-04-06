/** Date - 06/04/2025
 * 3. Longest Substring Without Repeating Characters
 * 
 * Problem statement:- Given a string s, find the length of the longest substring without duplicate characters.

**/
var lengthOfLongestSubstring = function(s) {
    let chrSet = new Set();
    let maxLength = 0;
    let left = 0;

    for(let right = 0; right < s.length; right++){
        while(chrSet.has(s[right])){
            chrSet.delete(s[left]);
            left++;
        }
        chrSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};

let s = "abcabcbb";

console.log(lengthOfLongestSubstring(s));
