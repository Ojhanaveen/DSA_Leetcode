/** Date - 26/04/2025
 * 1974. Minimum Time to Type Word Using Special Typewriter
 * 
 * Problem statement:- There is a special typewriter with lowercase English letters 'a' to 'z' arranged in a circle with a pointer. A character can only be typed if the pointer is pointing to that character. The pointer is initially pointing to the character 'a'.
 * Each second, you may perform one of the following operations
 * Move the pointer one character counterclockwise or clockwis
 * Type the character the pointer is currently o
 * Given a string word, return the minimum number of seconds to type out the characters in word.
 * 
**/

var minTimeToType = function(word) {
    let timeTaken = 0;
    let current = "a";

    for(let char of word){
        let diff = Math.abs(char.charCodeAt(0) - current.charCodeAt(0));
        timeTaken += Math.min(diff, 26 - diff) + 1;
        current = char;
    }
    return timeTaken;
};

let word = "abc";
console.log(minTimeToType(word));