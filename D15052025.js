/** Date - 15/05/2025
 * 344. Reverse String
 * 
 * Problem statement:- Write a function that reverses a string. The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
**/

// var reverseString = function(s){
//     let left = 0;
//     let right = s.length - 1;

//     while(left < right){
//         [s[left], s[right]] = [s[right], s[left]];
//         left++;
//         right--;
//     }

// };
var reverseString = function(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
};

let s = ["h","e","l","l","o"];
console.log(reverseString(s));