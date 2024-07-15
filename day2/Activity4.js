/*
Activity 4: Logical Operators
• Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
• Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
• Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console. */

let n1 = 5;
let n2 = 6;
let n3 = 8;

if((n1 > n2)&&(n1 > n3)){
    console.log(`n1 ${n1} is biggest`);
}
else if((n2 > n3)&&(n2 > n1)){
    console.log(`n2 ${n2} is biggest`);
}else{
    console.log(`n3 ${n3} is biggest`);
}


let c1 = true;
let c2 = false;

let result = c1 || c2;
console.log("The result of condition1 || condition2 is:", result);

// • Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let res = (n1 > 0) ? console.log('positive') : console.log('negative');