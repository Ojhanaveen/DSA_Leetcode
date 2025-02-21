/** Date - 21/02/2025
  28. Find the Index of the First Occurrence in a String

 * 
 * Problem Statement:-  Given two strings needle and haystack,
 *  return the index of the first occurrence of needle in haystack,
 *  or -1 if needle is not part of haystack.
 
 here i have given two methods.
*/


// var strStr = function(haystack, needle) {
//     let temp1 = haystack.length;
//     let temp2 = needle.length;

//     if (temp2 === 0) return 0;

//     for (let i = 0; i <= temp1 - temp2; i++) {
//         if (haystack.substring(i, i + temp2) === needle) { 
//             return i;
//         }
//     }
//     return -1;
// }

// let haystack = "sadbutsad";
// let needle = "sad";

// console.log(strStr(haystack, needle)); 

var strStr = function(haystack, needle) {
 return haystack.indexOf(needle);
}

let haystack = "sadbutsad";
let needle = "sad";

console.log(strStr(haystack, needle));

