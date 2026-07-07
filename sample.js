let arr = [1, 2, 3];
let a = arr.includes(11);
console.log(a); // true
arr.push(11);
console.log(arr);
arr.reverse();
console.log(arr);
console.log(arr.indexOf(11));
arr.splice(1, 1);
console.log(arr);
arr.sort();
console.log(arr);