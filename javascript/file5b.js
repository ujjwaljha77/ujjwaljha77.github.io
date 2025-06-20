// arrow function

// function greet(){
//     console.log("this is a regular function");
// }
// greet();


// const greet=10; // this is a variable, not a function
// const greet = () => {
//     console.log("this is an arrow function");
// }
// greet();

// const add = (a,b) => {
//     return a + b;
// };
// let result = add(5, 10);
// console.log(result); // 15


// callback function

// let f1 = () =>{
//     console.log("This is function f1")
// };

// let main = (x) => {
//     x();
// };
// main(f1); // this will not call the function f1, it will just pass the function f1 as an argument to the main function


// let main = (x) => {
//     x();
// };
// main(() => {
//     console.log("Hello World!");
// });
    


// let f1 = (x) => {
//     console.log(x);
// };
// const main =() => f1(5);
// main(); // this will call the function f1 and pass 5 as an argument to it

// console.log(() => f1(5)); // this will not call the function f1, it will just return the function f1 with 5 as an argument prints function anonymous

// const logArgs = (...args) => {
//   console.log(args);
// }
// logArgs(1, 2, 3); // Output: [1, 2, 3]

// const add = (...args) => {
//   let sum = args.reduce((a, b) => a + b, 0);
//   console.log(sum);
// }
// add(1, 2, 3); // Output: 6

