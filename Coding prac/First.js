/** Date - 25/06/2025
 * Array Squared
 * 
**/
// const input = [1, 2, 3, 4, 5];

//  input.map(function(num){
//     return Math.pow(num, 2);
//  });

//  let ans = input.map((num) => Math.pow(num, 2));
//  console.log(ans);
//  console.log(input);

// const input = [1, -4, 12, 0, -3, 29, -150];

// let ans = input.filter((num) => num > 0).reduce((acc, currentValue) => acc + currentValue, 0);
// console.log(ans);
// console.log(input);


// const input = [12, 46, 32, 64];

// function findMean(input){
//     if(input.length === 0) return 0;

//     const sum = input.reduce((acc, val) => acc + val, 0);
//     return sum / input.length;
// };

// function findMedian(input){
//     if(input.length === 0) return;

//     const sorted = [...input].sort((a,b) => a - b);
//     const mid = Math.floor(sorted.length / 2);

//     if(sorted.length % 2 === 0){
//         return (sorted[mid - 1] + sorted[mid]) / 2;
//     } else{
//         return sorted[mid];
//     }
// }

// function meanMedian(input){
//     return{
//         mean: findMean(input),
//         median: findMedian(input)
//     }
// }

// console.log(meanMedian(input));

// const input = "George Raymond Richard Martin";

// let ans = input.split(" ").map((word) => word[0]).join("");

// console.log( ans);

// const input = [
//   {
//     name: "John",
//     age: 13,
//   },
//   {
//     name: "Mark",
//     age: 56,
//   },
//   {
//     name: "Rachel",
//     age: 45,
//   },
//   {
//     name: "Nate",
//     age: 67,
//   },
//   {
//     name: "Jennifer",
//     age: 65,
//   },
// ];

// let ans = input.map((ele) =>  ele.age);
//    ans = [Math.min(...ans), Math.max(...ans), (Math.max(...ans) - Math.min(...ans))]
// console.log(ans);
