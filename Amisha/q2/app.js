// Create an input field that displays the number of characters typed into it.

const inp = document.createElement('input')
const btn = document.createElement('button');
btn.append('Clcik');


const occ = document.createElement('span')
inp.type = 'text';

const body = document.body;
body.append(inp)
// body.append(btn)
body.append(occ)

let occurrence = 0;
let len = 0;
// inp.addEventListener('keydown', () => {
//     occurrence++;

//     len =inp.value;
//     let val = len.length;

//     occ.innerHTML = '<br>' + val;
// })

function occr(){
    len =inp.value;
    let val = len.length;

    occ.innerHTML = '<br>' + val;
}

inp.addEventListener('keydown',occr)