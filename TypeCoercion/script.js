//Converting string to type number(int).

let a = 1;
console.log(typeof parseInt(a));

//Converting string to type number(float).
let b = 2.43;
console.log(typeof parseFloat(b));

//Converting type number to string.
let c = 3;
console.log(typeof c.toString());

//To check if something is not a number you can only use the function below.
let z = "sdsDs";

console.log(isNaN(z));
console.log(isNaN(c));
