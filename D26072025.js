/** Date - 26/07/2025
 * 415. Add Strings
 * 
 * Problem statement:- Given two non-negative integers, num1 and num2 represented as string, 
 * return the sum of num1 and num2 as a string.
 * You must solve the problem without using any built-in library for handling large integers 
 * (such as BigInteger). You must also not convert the inputs to integers directly.

**/

var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let results = [];

        while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? num1.charCodeAt(i) - '0'.charCodeAt(0) : 0;
        const digit2 = j >= 0 ? num2.charCodeAt(j) - '0'.charCodeAt(0) : 0;

        const sum = digit1 + digit2 + carry;
        results.push((sum % 10).toString());
        carry = Math.floor(sum / 10);

        i--;
        j--;
    }
    return results.reverse().join("")
};

let num1 = "123", num2 = "33";

console.log(addStrings(num1, num2));