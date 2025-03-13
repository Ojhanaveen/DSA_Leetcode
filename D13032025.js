/** Date - 13/03/2025
  Crio-Question

 * 
 * Problem Statement:- You are given an integer n and an array of n strings.
 *  Write a function maxRepeatingWord(n, arr) that returns the word that appears most frequently in the array.
 *  If multiple words have the same highest frequency, return the lexicographically smallest word.
*/
var maximumRepeatingWords = function(n, arr){
    let map = new Map();
    for(let i = 0; i < n; i++){
        let word = arr[i];
        if(map.has(word))
        {
            let prvsCount = map.get(word);
            map.set(word, prvsCount+1);
        }
        else
        {
            map.set(word, 1);
        }
    }
    let ans = "", count = 0;
    for(let [key, value] of map)
    {
        if(value > count)
        {
            ans = key;
            count = value ;
        }
        else if(value == count)
        {
            if(key < ans)
            {
                ans = key;
            }
        }
    }
    return ans;
};

let n = 4;
let arr = ["hello", "world", "car", "hello"];

console.log(maximumRepeatingWords(n, arr));