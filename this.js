const student = {
    name: "John",
    age: 20,
    major: "Computer Science",
    marksOS: 90,
    marksDBMS: 85,
    marksDSA: 95,
    getAvg() {
        let avg = (this.marksOS + this.marksDBMS + this.marksDSA) / 3;
        console.log("Average marks of " + this.name + " is: " + avg); // this refers to the current object
    }
}
//function cannot directly access the object properties, so we use this keyword to access the current object properties.