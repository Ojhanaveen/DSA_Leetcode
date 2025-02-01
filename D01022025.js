/** Date - 01/02/2025
  2894. Divisible and Non-divisible Sums Difference
 * 
 * Problem Statement:- You are given positive integers n and m.

Define two integers as follows:

num1: The sum of all integers in the range [1, n] (both inclusive) that are not divisible by m.
num2: The sum of all integers in the range [1, n] (both inclusive) that are divisible by m.
Return the integer num1 - num2.


*/

var differenceOfSums = function(n, m) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i; 
    }

    let diffSum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % m === 0) {
            diffSum += i; 
        }
    }
    let num1 = total - diffSum;
    let num2 = diffSum;
    return (num1 - num2);
}

let n = 10;
let m = 3;

console.log(differenceOfSums(n, m));