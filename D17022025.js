/** Date - 17/02/2025
  1470. Shuffle the Array
 * 
 * Problem Statement:- Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

 * 
 * 
*/
var shuffle = function(nums, n) {
    const results = [];
    for(let i = 0; i < n; i++){
        results.push(nums[i], nums[i + n]);
    }
    return results;
};

const nums = [2,5,1,3,4,7];
const n = 3;

console.log(shuffle(nums, n));
