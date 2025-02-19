/** Date - 19/02/2025
  2648. Generate Fibonacci Sequence
 * 
 * Problem Statement:- Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.


here the Method is used called Generator in javaScript. it is bascially
a advance concept.
 
*/

var fibGenerator = function*(){
    let firstNumber = 0, secondNumber = 1;
    while(true){
          yield firstNumber;
          [firstNumber, secondNumber] = [secondNumber, (firstNumber+secondNumber)];
    }
};

const gen = fibGenerator();

console.log(gen.next().value); 
console.log(gen.next().value); 
