// Write a program to calculate the sum of numbers from x to (x * 10) using a while loop.

const inp = document.createElement('input');
const btn = document.createElement('button');
const para = document.createElement('p')
const para1 = document.createElement('p')
const body = document.body;


inp.type = 'text';
btn.innerText = 'Enter'
para.innerHTML = 'Enter the number from whch you want to multiply'

body.appendChild(para);
body.appendChild(inp);
body.appendChild(btn);
body.appendChild(para1);


const logic = () => {

    let x = parseInt(inp.value);
    let sum = 0;
    let i = x;
    while (i <= (x * 10)) {
        sum += i;
        i += x;
        para1.innerHTML += sum + '&nbsp;&nbsp;&nbsp';
    }
}

btn.addEventListener('click', logic);
inp.addEventListener('keydown', (e) => {
    console.log(e.key, e.code, e.keyCode)
    if (e.key === 'Enter' || e.keyCode === 13) {
        para1.innerHTML = ''

        console.log(e)
        logic();
    }
})

inp.addEventListener('focus', () => {
})


// Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let i = 7;
x = 7;
while(i <= 70){
    sum += i;
    console.log(sum)
    i += x;

}
    // console.log(sum)


