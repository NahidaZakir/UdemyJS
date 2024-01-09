// Variables 
// Naming convention:  camelcase, meaningful, don't use reserved keyword, can't start with a number
let lname = "Nahida";
console.log(lname);

// constant values never change
const interestRate = 0.3;
console.log(interestRate)

// Primitive/value types: 
// strings, number, boolean, undefined, null

let finame= 'Nahida';  //string lateral
let age = 21;
let isApproved = false;
let firstName = undefined;
let lastName = null; //don't have lastname

//Javascript is dynamic language: type of a variable can change during run time
// Static languages has fixed data type
// typeof null variable is object


// reference type : object,array,function

let person = {
    fname: 'Nahida',
    age: 21
}
//access properties dot Notation
person.fname = 'Zakir';
// Bracket Notation best used when user gives input 
let selection = 'name'
person[selection] = 'Nahida'

console.log(person)
console.log(person.fname);

// array is dynnamic can be of different length/ size and objects in the array can be of different data type
let selectedColors = ['red', 'blue'];

console.log(selectedColors);
console.log(selectedColors[1]);

// array in js is like an object and has certain porperties


// Functions declaration no need semicolon at the end
function greet(name, lastName){
    console.log('Hello World' + name + ' ' + lastName);
}

// call this function
greet('Nahida', 'Zakir');
// paramter is the variable name in function
// argument is the value passed to the function

// default value of variable in js is undefined
// function square(number){
//     return number * number;
// }

// console.log(square(15));
// function types:
// 1. Performing a Taask
// 2. Calculating a value




