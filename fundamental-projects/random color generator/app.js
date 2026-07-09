let h1 = document.querySelector('h1');
let button = document.getElementById('btn');
let div = document.querySelector('div');
button.onclick = function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    div.style.backgroundColor = `rgb(${r},${g},${b})`;
    h1.textContent = `rgb(${r},${g},${b})`;
}