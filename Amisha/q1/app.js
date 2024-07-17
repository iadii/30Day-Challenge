const body = document.body;
const btn = document.createElement('button');


btn.append('click Me');
body.append(btn);

const coloriser = () => {
    let base = 127;
    let r = Math.floor(Math.random() * 128) + base;
    let g = Math.floor(Math.random() * 128) + base;
    let b = Math.floor(Math.random() * 128) + base;
    return `rgb(${r},${g},${b})`
}

btn.addEventListener('click', () => {
    body.style.backgroundColor = coloriser();
})