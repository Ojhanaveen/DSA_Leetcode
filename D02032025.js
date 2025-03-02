/** Date - 02/03/2025
 1221. Split a String in Balanced Strings
 * 
 * Problem Statement:- Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
Given a balanced string s, split it into some number of substrings such that:

 * Each substring is balanced.
Return the maximum number of balanced strings you can obtain.
*/
 var balancedStringSplit = function(){
    let count = 0;
    let balance = 0;

    for(let char of s){
        if(char === "L") balance++;
        else balance--;

        if(balance === 0) count++;
    }
    return count;
 };

 let s = "RLRRLLRLRL";
 console.log(balancedStringSplit(s));