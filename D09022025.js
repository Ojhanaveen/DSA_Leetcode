/** Date - 07/02/2025
  1431. Kids With the Greatest Number of Candies
 * 
 * Problem Statement:- There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.

- Here in this queston we get candies as an arrary extraCandies as a integer.
 
*/

var kidsWithCandies = function(candies, extraCandies) {
    let maxNum = Math.max(...candies);

    let res = [];
     
    for(let i = 0; i < candies.length; i++){
        let summationCandies = candies[i] + extraCandies;
        if(summationCandies >= maxNum){
            res[i] = true ;  
        }else{
            res[i] = false;
        }
    }
    return res;    
};

let candies = [2,3,5,1,3];
let extraCandies = 3;

console.log(kidsWithCandies(candies, extraCandies));