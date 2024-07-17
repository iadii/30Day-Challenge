const div = document.createElement('div');
const body = document.body;
div.style.width = '300px'
div.style.height = '300px'
div.style.backgroundColor = '#79efac';
div.style.position = 'absolute';

body.append(div)
const coloriser = () => {
    let base = 127;
    let r = Math.floor(Math.random() * 128) + base;
    let g = Math.floor(Math.random() * 128) + base;
    let b = Math.floor(Math.random() * 128) + base;
    return `rgb(${r},${g},${b})`
}

div.addEventListener('click', (e) =>{

    div.style.left = Math.floor(Math.random() * 1800 + 1) + 'px';
    div.style.top = Math.floor(Math.random() * 800 + 1) + 'px';
    div.style.backgroundColor = coloriser();

})


