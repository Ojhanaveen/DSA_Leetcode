/** Date - 26/02/2025
  1572. Matrix Diagonal Sum

 * Problem Statement:- Given a square matrix mat, return the sum of the matrix diagonals.
  Only include the sum of all the elements on the primary diagonal and all the elements on
  the secondary diagonal that are not part of the primary diagonal.

 
*/

var diagonalSum = function(mat){
    let n = mat.length;
    let sum = 0;

    for(let i = 0; i < n; i++){
        sum += mat[i][j];
        sum += mat[i][n - i - 1];
    }
    if(n % 2 === 1){
        sum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
    }
    return sum;
}
  
 let mat = [[1,2,3],
            [4,5,6],
            [7,8,9]];

console.log(diagonalSum(mat));