//  Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let inp = document.createElement('input');
let btn = document.createElement('button')
let para = document.createElement('p')
const body = document.body;

inp.type = 'text'
btn.innerText = "Click";
body.append(inp);
body.append(btn);
body.append(para);

let val = 0;

inp.classList.add('input');

btn.addEventListener('click',() => {
    val = inp.value;
    console.log(val)

    if(val > 0){
        para.innerHTML = `${val} is posiitve`;
    }else if(val < 0){
        para.innerHTML = `${val} is posiitve`;
    }else{
        para.innerHTML = `${val} is zero`;

    }
})
