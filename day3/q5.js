//  Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let inp = document.createElement('input');
let btn = document.createElement('button');
let year = document.createElement('p');
let para1 = document.createElement('p');
const body = document.body;

// prompt('Enter year number')

inp.type = 'text';
btn.innerText = "Click";
para1.innerText = 'Enter year';

body.append(para1);
body.append(inp);
body.append(btn);
body.append(year);

inp.classList.add('input');

btn.addEventListener('click', logic);
inp.addEventListener('keydown', (e) => {
    if (e.keyCode === 13 || e.key === 'Enter') {
        logic();
    }
});

inp.addEventListener('focus', () => {
    // day = ''
})

var logic = () => {
    let x = inp.value;

    if((x % 4 === 0 && x % 100) || (x % 400 === 0)){
        year.innerText = `${x} is a leap year`
    }else{
        year.innerText = `${x} is not a leap year`
        
    }
}