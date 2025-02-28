/** Date - 28/02/2025
  1773. Count Items Matching a Rule

 * 
 * Problem Statement:-  You are given an array items, where each items[i] = [typei, colori, namei]
 *  describes the type, color, and name of the ith item.
 *  You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.
*/

var countMatches = function(items, ruleKey, ruleValue){

    let indexOfSubArray = 0;

    if(ruleKey == "color"){
        indexOfSubArray = 1;
    }

    if(ruleKey == "name"){
        indexOfSubArray = 2;
    }

    let count = 0;

    for(let i= 0; i < items.length; i++){
        if(items[i][indexOfSubArray] == ruleValue){
            count++;
        }
    }
    return count;
};

let items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]];

let ruleKey = "color";
let ruleValue = "silver";

console.log(countMatches(items, ruleKey, ruleValue));