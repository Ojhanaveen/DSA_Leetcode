/** Date - 28/04/2025
 * 1967. Number of Strings That Appear as Substrings in Word
 * 
 * Problem statement:- Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.
 * A substring is a contiguous sequence of characters within a string.


**/
var numOfStrings = function(patterns, word) {
    let count = 0;
for (let pattern of patterns) {
    if (word.includes(pattern)) {
        count++;
    }
}
return count;
};
let patterns = ["a","abc","bc","d"], word = "abc";
console.log(numOfStrings(patterns, word))