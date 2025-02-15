/** Date - 13/02/2025
  771. Jewels and Stones
 * 
 * Problem Statement:- You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.
 *  Each character in stones is a type of stone you have.
 *  You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".
 * 
 * 
*/

var numJewelsInStones = function(jewels, stones){
    let count = 0;
    let n = stones.length;
    for(let i = 0; i < n; i++){
        let currentElement = stones[i];
        if(jewels.includes(currentElement)){
            count ++;
        }
    }return count;
};

let jewels = "aA";
let stones = "aAAbbbb";

console.log(numJewelsInStones(jewels, stones));