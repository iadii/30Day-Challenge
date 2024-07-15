//  Write a program to find the largest of three numbers using nested if-else statements.

let x = 13;
let y = 5;
let z = 7;

let max = x;

if(max < y){
    if(max < z){
        if(y < z){
            max = z;
        }
    }else{
        max = y;
    }
    
}
// else {
//     if (max < z) {
//         max = z;
//     }
// }

console.log(max)