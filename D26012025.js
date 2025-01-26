/*  Date - 26/01/2025
 3110. Score of a String

Hint
You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

Return the score of s.

So, basically here we are going to see the sum of ASCII value of string given.
if String s = "hello" it's value will be 13*
similarly for "Naveen" it's value will be 66/
/*------------------------------------------------------------------------------------------------------- */

var scoreOfString = function(s) {
    let sum = 0;
    for(let i = 0; i < s.length - 1; i++){
        let temp = Math.abs(s.charCodeAt(i) - s.charCodeAt([i+1]));
        sum = sum + temp;
    }
    return sum;
};

console.log(scoreOfString("hello")); // 13
console.log(scoreOfString("Naveen")); //66