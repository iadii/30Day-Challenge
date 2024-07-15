//  Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let inp = document.createElement('input');
let btn = document.createElement('button');
let para = document.createElement('p');
let para1 = document.createElement('p');
const body = document.body;

inp.type = 'text';
btn.innerText = "Click";
para1.innerText = 'Enter your Age';

body.append(para1);
body.append(inp);
body.append(btn);
body.append(para);

inp.classList.add('input');

btn.addEventListener('click', logic);
inp.addEventListener('keydown', (e) => {
    if (e.keyCode === 13 || e.key === 'Enter') {
        logic();
    }
});

let logic = () => {
    let val = inp.value;
    console.log(val);

    if (val >= 18) {
        para.innerHTML = `Congrats, you are eligible to vote.`;
    } else if (val > 0 && val < 18) {
        para.innerHTML = `Sorry, you are not eligible to vote.`;
    } else {
        para.innerHTML = `Please enter a valid age.`;
    }
};
