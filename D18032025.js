/** Date - 18/03/2025
  2206. Divide Array Into Equal Pairs

 * 
 * Problem Statement:- You are given an integer array nums consisting of 2 * n integers.
 * You need to divide nums into n pairs such that:
 * Each element belongs to exactly one pair.
 * The elements present in a pair are equal.
 * Return true if nums can be divided into n pairs, otherwise return false.
*/
let divideArray = function(nums){
    let map = new Map();

    for(let num of nums)
    {
        if(map.has(num))
        {
            map.set(num, map.get(num) + 1);
        }
        else
        {
            map.set(num, 1);
        }
    }
    for(let count of map.values())
    {
        if(count % 2 !== 0)
        {
            return false;
        }
    }
    return true;
};

let nums = [3,2,3,2,2,2];

console.log(divideArray(nums));