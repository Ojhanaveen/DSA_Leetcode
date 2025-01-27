/** Date - 27/02/2025
 * 2635. Apply Transform Over Each Element in Array.
 * 
 * Problem Statement:- Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve in this question we have to return a modifie arr
Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
*/

var map = function(arr, fn) {
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
         newArr.push(fn(arr[i], i));
    }
    return newArr;
};
