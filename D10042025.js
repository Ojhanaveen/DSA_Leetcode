/** Date - 10/04/2025
 * 1071. Greatest Common Divisor of Strings
 * 
 * Problem statement:- For two strings s and t, 
 * we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
 * Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 * 
**/
var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1){
        return "";
    }

    function findGCD(a,b){
        while(b !== 0){
            let temp = b;
            b = a % b;
            a =temp;
        }
        return a;
    }

    let gcdLength = findGCD(str1.length, str2.length);

    return str1.substring(0, gcdLength);
};

let str1 = "ABCABC", str2 = "ABC";

console.log(gcdOfStrings(str1, str2));