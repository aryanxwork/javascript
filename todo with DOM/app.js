let button = document.querySelector('button');
let input = document.querySelector('input');
let ul = document.querySelector('ul');

button.addEventListener('click', function () {
    let newEvent = document.createElement('li');
    newEvent.innerText = input.value;
    input.value = '';
    ul.appendChild(newEvent);
})
