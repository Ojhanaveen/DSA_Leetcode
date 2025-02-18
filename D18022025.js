/** Date - 18/02/2025
  2319. Check if Matrix Is X-Matrix
 * 
 * Problem Statement:- A square matrix is said to be an X-Matrix if both of the following conditions hold:

All the elements in the diagonals of the matrix are non-zero.
All other elements are 0.
Given a 2D integer array grid of size n x n representing a square matrix, return true if grid is an X-Matrix. Otherwise, return false.

 * 
 * 
*/
var checkMatrix = function(grid){
    let n = grid.length;

    for(let i = 0; i< n; i++){
        for(let j = 0; j < n; j++){
            if(i === j || i + j === n - 1){
                if(grid[i][j] === 0){
                    return false;
                }
            }else{
                if(grid[i][j] !== 0){
                    return false;
                }
            }
        }
    }return true;
};

let grid = [[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]];
console.log(checkMatrix(grid));