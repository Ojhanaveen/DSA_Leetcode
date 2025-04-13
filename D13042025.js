/** Date - 13/04/2025
 * 58. Length of Last Word
 * 
 * Problem statement:- Given a string s consisting of words and spaces, 
 * return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.

 * 
**/

var lengthOfLastWord = function(s){
    let len =0;
    let x = s.trim();

    for(let i =0; i< x.length; i++){
        if(x[i] == " "){
            len = 0;
        }else{
            len++;
        }
    }return len;
};

let s = "Hello World";
console.log(lengthOfLastWord(s));