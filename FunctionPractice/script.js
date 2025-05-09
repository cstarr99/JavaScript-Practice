//function that prints my name.
function printMyName() {
  console.log("Chase Starr");
}

//calling printMyName function.
printMyName();

/* function that prints the result of subtracting
 first argument - second argument. */
function subtract(a, b) {
  console.log(a - b);
}

let x = 4;
let y = 2;

//calling subtract function
subtract(x, y);

//function that returns sum of a + b
function sum(a, b) {
  return a + b;
}

let s = sum(2, 4);
console.log(s);

let z = sum(s, 2);
console.log(z);

//function that takes in a name and then returns hello + name.
function hello(name) {
  return "Hello " + name;
}

console.log(hello("Chase"));
