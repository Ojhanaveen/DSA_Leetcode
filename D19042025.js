/** Date - 19/04/2025
 * 383. Ransom Note
 * 
 * Problem statement:- Given two strings ransomNote and magazine, return true if ransomNote can be 
 * constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 * 
**/
var canConstruct = function(ransomNote, magazine) {
    let freq = {};

for (let char of magazine) {
  freq[char] = (freq[char] || 0) + 1;
}


for (let char of ransomNote) {
  if (!freq[char]) {
    return false; 
  }
  freq[char]--; 
}

return true;
};

let ransomNote = "a", magazine = "b";

console.log(canConstruct(ransomNote, magazine));