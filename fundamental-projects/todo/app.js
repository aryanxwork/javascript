let todo = [];
let input = prompt("What would you like to do?").toLowerCase();

while (true) {

    if (input === "quit") {
        console.log("OK, you quit the app.");
        break;
    }

    else if (input === "list") {
        console.log("******** TODO LIST ********");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
    }

    else if (input === "add") {
        let task = prompt("Enter a new todo");
        todo.push(task);
        console.log("Task added!");
    }

    else if (input === "delete") {
        let index = Number(prompt("Enter the index to delete"));

        if (index >= 0 && index < todo.length) {
            todo.splice(index, 1);
            console.log("Task deleted!");
        } else {
            console.log("Invalid index!");
        }
    }

    input = prompt("What would you like to do?").toLowerCase();
}