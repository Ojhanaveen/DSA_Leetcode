/** Date - 04/05/2025
 * 1128. Number of Equivalent Domino Pairs
 * 
 * Problem statement:-Given a list of dominoes, 
 * dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d),
 *  or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.
 * Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

**/

var numEquivDominoPairs = function(dominoes) {
    let map = {}; 
    let count = 0;

    for (let [a, b] of dominoes) {
        let key;
        if (a < b) {
         key = `${a},${b}`;
        } else {
         key = `${b},${a}`;
        }

        if (map[key]) {
            count += map[key];
            map[key]++;
        } else {
            map[key] = 1;
        }
    }

    return count;

};
let dominoes = [[1,2],[2,1],[3,4],[5,6]];
console.log(numEquivDominoPairs(dominoes));