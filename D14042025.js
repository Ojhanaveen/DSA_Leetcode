/** Date - 14/04/2025
 * 1534. Count Good Triplets
 * 
 * Problem statement:- Given an array of integers arr, and three integers a, b and c. 
 * You need to find the number of good triplets.
 * A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:
 * 0 <= i < j < k < arr.lengt
 * |arr[i] - arr[j]| <= 
 * |arr[j] - arr[k]| <= 
 * |arr[i] - arr[k]| <= 
 * Where |x| denotes the absolute value of x.
 * Return the number of good triplets.
 * 
**/

var countGoodTriplets = function(arr, a, b, c){
    let goodTriplet = 0;
    let n = arr.length;
    
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(Math.abs(arr[i] - arr[j]) <= a){
                for(let k = j + 1; k < n; k++){
                    if(Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c){
                        goodTriplet++;
                    }
                }
            }
        }
    }
    return goodTriplet;
};

let arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
console.log(countGoodTriplets(arr, a, b, c));