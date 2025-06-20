// functions

// function greet() {
//     console.log("Hello World!");    
// }
// greet();
 

// ifee method
// (function() {    
//     console.log("Hello World!");
// })();



// function expression
// const greet = function() {
//     console.log("Hello World!");
// }

// hoisting in function
// greet()
// function greet() {
//     console.log("Good Morning!");
// }

// hoisting
// x=10;
// console.log(x); // 10
// var x; // hoisting



// function argumrnts and return 
// function greet(student){
//     console.log(`Hello ${student}!`);
// }
// greet("ujjwal");



// function add(a, b) {
//     return a + b;
// }

// let result = add(5, 10);
// console.log(result); // 15


function add() {
console.log(arguments); // it will print the arguments passed to the function
console.log(arguments.length); // it will print the number of arguments passed to the function
}
add(4,5,6,7,8,9); // it will print the arguments passed to the function