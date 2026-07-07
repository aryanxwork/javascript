let number = Math.floor(Math.random() * 20) + 1;
let guess = Number(prompt("Guess a number between 1 and 20"));

while (guess !== number) {
    if (guess < number) {
        guess = Number(prompt("Too low! Guess again"));
    } else {
        guess = Number(prompt("Too high! Guess again"));
    }
}

console.log("🎉 You guessed the number!");