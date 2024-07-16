//  Write a program to print numbers from 1 to 10 using a for loop.

const para = document.createElement('p');
const para1 = document.createElement('p');

const body = document.body;

body.appendChild(para);
body.appendChild(para1);
para.innerHTML = `Addition <br>`
para1.innerHTML = `Multiplication <br>`

for (let i = 1; i < 10; i++) {

    para.innerHTML += i + '&nbsp;&nbsp;&nbsp;'
}

// Write a program to print the multiplication table of 5 using a for loop.

for(let i = 1; i <= 10; i++){
    para1.innerHTML += i * 5 + '&nbsp;&nbsp;&nbsp;'
}