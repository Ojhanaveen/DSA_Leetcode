/** Date - 06/03/2025
  345. Reverse Vowels of a String


 * 
 * Problem Statement:- Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

*/
var reverseVowels = function(s){

    let vowels = new Set(["a", "i", "e", "o", "u", "A", "I", "E", "O", "U"]);
    let arr = s.split('');
    let left = 0, right = arr.length - 1;

    while (left < right) {
        while (left < right && !vowels.has(arr[left])) {
            left++;
        }
        while (left < right && !vowels.has(arr[right])) {
            right--;
        }
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr.join('');
}
let s = "IceCreAm";

console.log(reverseVowels(s));