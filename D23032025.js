/** Date - 23/03/2025
  1207. Unique Number of Occurrences

 * 
 * Problem Statement:- Given an array of integers arr,
 *  return true if the number of occurrences of each value in the array is unique or false otherwise.
*/

const { Container } = require("postcss");

var uniqueOccurrences = function(arr){
    const map = new Map();

    for(let i = 0 ; i < arr.length; i++){
        let num = arr[i];
        if(map.has(num)){
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    const set  = new Set()
    for(const[key, value] of map){
        if(set.has(value)){
            return false;
        }
        set.add(value);
    }
    return true;
};

let arr = [1,2,2, 1, 1, 3];

console.log(uniqueOccurrences(arr));