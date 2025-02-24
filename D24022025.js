/** Date - 24/02/2025
  62. Unique Paths

 * 
 * Problem Statement:-There is a robot on an m x n grid. 
 * The robot is initially located at the top-left corner (i.e., grid[0][0]).
 *  The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). 
 * The robot can only move either down or right at any point in time.
Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

 
*/
var uniquePaths = function(m,n){
    let row = m;
    let col = n;
    let dp = [];

    for(let i = 0; i < row; i++){
        dp[i] = new Array(col).fill(0);
    }
    for(let i = 0; i < row; ++i){
        dp[i][0] = 1;
    } 
    for(let j = 0; j < col; ++j){
        dp[0][j] = 1;
    }
    for(let i = 1; i < row; ++i){
        for(let j = 1; j < col; ++j){
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }return dp[row - 1][col - 1];
}

let m = 3;
let n = 7;

console.log(uniquePaths(m,n));