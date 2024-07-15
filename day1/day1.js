// Declare a variable using var, assign it a number, and log the value to the console.
// task 1
var x = 6;
console.log(x);

// task 2
// Declare a variable using let, assign it a string, and log the value to the console.

let y = 'Aditya'
console.log(y);

// task 3
// Declare a variable using const, assign it a boolean value, and log the value to the console.

const bool = 'false';
console.log(bool);

// task 4
// Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let obj = {
    key : "Value",
    ar : 'data-Type'
}

console.log(obj.key);
console.log(obj["arr"]);

let arr = new Array();
arr.push(5,6);
arr.unshift('1',"","", 4)
arr.pop();
arr.shift()
console.log(arr);