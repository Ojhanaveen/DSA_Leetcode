/** Date - 07/02/2025
  20 Valid Parethesis.
 * 
 * Problem Statement:- Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

 
*/
var isValid = function(s){
     let resStack = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            resStack.push(s[i]);
        }
        else{
            if(resStack.length > 0 &&
                ((resStack[resStack.length - 1] === '(' && s[i] === ')') ||
                 (resStack[resStack.length - 1] === '{' && s[i] === '}') ||
                 (resStack[resStack.length - 1] === '[' && s[i] === ']'))) {
                    resStack.pop();
                 }
                 else{
                    return false;
                 }
        }
    } 
    if(resStack.length === 0){
        return true;
    }else{
        return false;
    }
};


let s = "()";
console.log(isValid(s));