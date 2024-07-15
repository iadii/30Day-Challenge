//  Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let inp = document.createElement('input');
let btn = document.createElement('button');
let para = document.createElement('p');
let para1 = document.createElement('p');
const body = document.body;
let day = '';

inp.type = 'text';
btn.innerText = "Click";
para1.innerText = 'Enter a number';

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

inp.addEventListener('focus', () => {
    day = ''
})

var logic = () => {
    let x = parseInt(inp.value, 10);
    
    switch (x) {
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = 'Tuesday'
            break;
        case 3:
            day = 'Wednesday'
            break;
        case 4:
            day = 'Thursday'
            break;
        case 5:
            day = 'Friday'
            break;
        case 6:
            day = 'Saturday'
            break;
        case 7:
            day = 'Sunday'
            break;

        default:
            day = 'There are only 7 days in a week'
            break;
    }
    para.innerHTML += day 

}
