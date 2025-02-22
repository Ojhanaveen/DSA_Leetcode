/** Date - 22/02/2025
  69. Sqrt(x)

 * 
 * Problem Statement:-  Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
 *  The returned integer should be non-negative as well.
 * You must not use any built-in exponent function or operator.
 * For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 
  here basically we have find the square root of given number x without using any built in function.
*/

var mysqrt = function(x){
    let low =1, high = x, ans = 0;

    while( low <= high){
        let mid = Math.floor((low + high) / 2);
        if(mid * mid <= x){
            ans = mid;
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return ans;
};
let x = 4;

console.log(mysqrt(x));