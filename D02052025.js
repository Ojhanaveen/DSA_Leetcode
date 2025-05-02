/** Date - 02/05/2025
 * 22062. Count Vowel Substrings of a String
 * 
 * Problem statement:- A substring is a contiguous (non-empty) sequence of characters within a string
 * A vowel substring is a substring that only consists of vowels ('a', 'e', 'i', 'o', and 'u') 
 * and has all five vowels present in it.
 * Given a string word, return the number of vowel substrings in word.

**/

var countVowelSubstrings = function(word) {

    // Function to check if a character is a vowel
    function isVowel(char) {
        return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
    }

    let totalCount = 0; // This will keep track of the total vowel substrings found

    // Loop through each character in the word
    for (let i = 0; i < word.length; i++) {

        // If the current character is not a vowel, skip to the next one
        if (!isVowel(word[i])) continue;

        let seenVowels = new Set(); // To keep track of vowels seen in the current substring

        // Start another loop from the current position to check all possible substrings
        for (let j = i; j < word.length; j++) {

            // If the character is not a vowel, break out of the inner loop
            if (!isVowel(word[j])) break;

            // Add the vowel to the set
            seenVowels.add(word[j]);

            // If we have seen all 5 vowels, this is a valid vowel substring
            if (seenVowels.size === 5) {
                totalCount++;
            }
        }
    }

    return totalCount;
};

let word = "aeiouu";
console.log(countVowelSubstrings(word));