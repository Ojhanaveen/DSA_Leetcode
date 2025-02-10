/** Date - 10/02/2025
  605. Can Place Flowers
 * 
 * Problem Statement:- You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted 
in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.


here in this question we have to find where we can insert one flower in arr or not,
if yes then true else false.

 
*/
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;

    for(let i = 0; i < flowerbed.length; i++){

        if(flowerbed[i] === 0){
            
            let left = (i === 0) || (flowerbed[i - 1] === 0);
            let right = (i === flowerbed.length - 1) || (flowerbed[i + 1] === 0);

            if(left && right){
                flowerbed[i] = 1;
                count ++;

                if(count >= n){
                    return true;
                }
            }
        }
    }
    return count >= n;
};

let flowerbed = [1,0,0,0,1];
let n = 1;
console.log(canPlaceFlowers(flowerbed, n));