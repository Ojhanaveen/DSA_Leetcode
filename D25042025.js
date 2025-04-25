/** Date - 25/04/2025
 * 1945. Sum of Digits of String After Convert
 * 
 * Problem statement:- You are given a string s consisting of lowercase English letters, and an integer k.
 *  Your task is to convert the string into an integer by a special process, and then transform it by summing
 *  its digits repeatedly k times. More specifically, perform the following steps:
 * Convert s into an integer by replacing each letter with its position in the alphabet
 *  (i.e. replace 'a' with 1, 'b' with 2, ..., 'z' with 26)
 * Transform the integer by replacing it with the sum of its digits
 * Repeat the transform operation (step 2) k times in total
 * For example, if s = "zbax" and k = 2, then the resulting integer would be 8 by the following operations:
 * Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 26212
 * Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 1
 * Transform #2: 17 ➝ 1 + 7 ➝ 
 * Return the resulting integer after performing the operations described above.
 * 
**/
var getLucky = function(s, k){
    let numStr = '';
    for(let ch of s){
        numStr+=(ch.charCodeAt(0) - 96).toString();
    }

    for(let i = 0; i < k; i++){
        let sum = 0;
        for(let digit of numStr){
            sum +=parseInt(digit);
        }
        numStr= sum.toString();
    }
    return parseInt(numStr);
};

let s = "iiii", k = 1;

console.log(getLucky(s, k));