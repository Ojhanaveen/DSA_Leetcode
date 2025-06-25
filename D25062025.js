/** Date - 25/06/2025
 * 32. Longest Valid Parentheses
 * 
 * Problem statement:- Given a string containing just the characters '(' and ')', 
 * return the length of the longest valid (well-formed) parentheses substring.

**/

var longestValidParantheses = function(s){
    let ans = [-1];
    let max_val = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] === "("){
            ans.push(i);
        } else{
            ans.pop();
            if(ans.length === 0){
                ans.push(i);
            } else{
                max_val = Math.max(max_val, i - ans[ans.length - 1]);
            }
        }
    } return max_val;
};

let s = "(()";
console.log(longestValidParantheses(s));