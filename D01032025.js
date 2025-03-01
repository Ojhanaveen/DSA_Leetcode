/** Date - 01/03/2025
  2373. Largest Local Values in a Matrixe
 * 
 * Problem Statement:- You are given an n x n integer matrix grid.

Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:
maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.
In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.

Return the generated matrix.


*/
var largestLocal = function(grid) {
    let n = grid.length;
    let maxLocal = Array.from({ length: n - 2 }, () => Array(n - 2));

    for (let i = 0; i < n - 2; i++) {
        for (let j = 0; j < n - 2; j++) {
            let maxValue = -Infinity; 

            for (let r = i; r < i + 3; r++) {
                for (let c = j; c < j + 3; c++) {
                    maxValue = Math.max(maxValue, grid[r][c]);
                }
            }
            maxLocal[i][j] = maxValue; 
        }
    }
    return maxLocal;
};
 let grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]];

 console.log(largestLocal(grid));