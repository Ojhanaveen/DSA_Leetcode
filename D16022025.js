/** Date - 16/02/2025
  2942. Find Words Containing Character
 * 
 * Problem Statement:- You are given a 0-indexed array of strings words and a character x.

Return an array of indices representing the words that contain the character x.

Note that the returned array may be in any order.

 * 
 * 
*/

var findWordsContaining = function(words, x) {
    let resArr = [];
    for(let i = 0; i < words.length; i++){
        if( words[i].includes(x)){
            resArr.push((i));
        }
    }return resArr;
};

let words = ["leet","code"];
let x = "e";
console.log(findWordsContaining(words, x));
