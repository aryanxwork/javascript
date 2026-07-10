let gameSeq = [];
let userSeq = [];

let level = 0;
let started = false;
let buttonColors = ["red", "blue", "green", "yellow"];

let btns = document.querySelectorAll('.btn');

for (let btn of btns) {
    btn.addEventListener('click', btnpress);
}

document.addEventListener('keydown', function () {
    if (!started) {
        started = true;
        let h1 = document.querySelector('h1');
        h1.innerText = "Game Started!";
        setTimeout(function () {
            h1.innerText = "Simon Game";
        }, 2000);
        levelUp();
    }
});

function btnpress() {
    let btn = this;
    flash(btn);
    let userbtn = btn.getAttribute('id');
    userSeq.push(userbtn);
    checkAnswer(userSeq.length - 1);
}

function checkAnswer(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        let h2 = document.querySelector('h2');
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "white";
        }, 200);
        h2.innerText = "Game Over \n Your score = " + (level - 1) + "\nPress any key to restart";
        reset();
    }
}

function flash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 200);
}

function levelUp() {
    userSeq = [];
    level++;
    let h2 = document.querySelector('h2');
    h2.innerText = "Level " + level;
    let randomNum = Math.floor(Math.random() * 4); // random number between 0 and 3
    let randomColor = buttonColors[randomNum];
    gameSeq.push(randomColor);
    let btn = document.getElementById(randomColor);
    flash(btn);
}

function reset() {
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}