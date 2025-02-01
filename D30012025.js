/** Date - 30/01/2025
  1408. String Matching in an Array
 * 
 * Problem Statement:- Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

A substring is a contiguous sequence of characters within a string


here we have given a array of strings named as words and we have to return all strings in words that is a substring of another word.
 
*/

var stringMatching = function(words) {
    let res = [];
    for(let i = 0; i < words.length ; i++){
        for(let j = 0; j < words.length ; j++){
            if(words[i].includes(words[j]) && i!=j){
                console.log(words[j])
                if (!res.includes(words[j])) {
                        res.push(words[j]);
                    }

            }
        }
    }
    return res
};

const words = ["mass","as","hero","superhero"]
console.log(stringMatching(words))