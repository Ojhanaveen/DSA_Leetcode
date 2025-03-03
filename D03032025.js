/** Date - 03/03/2025
  2788. Split Strings by Separator
 * 
 * Problem Statement:- Given an array of strings words and a character separator, 
 * split each string in words by separator.
   Return an array of strings containing the new strings formed after the splits,
   excluding empty strings.

Notes

separator is used to determine where the split should occur, but it is not included as part of the resulting strings.
A split may result in more than two strings.
The resulting strings must maintain the same order as they were initially given.


*/
var splitWordsBySeparator = function(words, separator){
    let resultantArr = [];

    for(let word of words){
        let parts = word.split(separator);

        for(let part of parts){
            if(part.length > 0){
                resultantArr.push(part);
            }
        }
    }
    return resultantArr;
}
let words = ["one.two.three","four.five","six"];
let separator = ".";

console.log(splitWordsBySeparator(words, separator));