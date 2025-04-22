/** Date - 22/04/2025
 * 1941. Check if All Characters Have Equal Number of Occurrences
 * 
 * Problem statement:- Given a string s, return true if s is a good string, or false otherwise.
 * A string s is good if all the characters that appear in 
 * s have the same number of occurrences (i.e., the same frequency).
 * 
**/
var areOccurrencesEqual = function(s){
    let map = new Map();

    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i]) + 1);
        }else{
            map.set(s[i], 1);
        }
    }
    let values = [...map.values()];

    for(let i = 1; i < values.length; i++){
        if(values[i] !== values[0]){
            return false;
        }
    }
    return true;
};
let s = "abacbc";

console.log(areOccurrencesEqual(s));