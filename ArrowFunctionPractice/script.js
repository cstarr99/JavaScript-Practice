//normal function
function sum(a, b) {
  return a + b;
}

//arrow function
let sumArrow = (a, b) => {
  return a + b;
};

//if arrow function is only one line and returns something, you can simplify it to this.
let sumArrow1 = (a, b) => a + b;
console.log(sumArrow1(1, 2));

//arrow function that prints name
let printNameArrow = (name) => {
  console.log(name);
};

printNameArrow("dave");

//print ad hi + "name"
let addHiArrow = (personName) => console.log("Hi, " + personName);
addHiArrow("matt");

//example of arrow function without any parameters
let printHi = () => {
  console.log("Hi!");
};
printHi();

//difference between callback functions with/without arrow functions.

//normal callback
function printVariable(variable) {
  console.log(variable);
}

function addHello(name, callback) {
  callback("Hello " + name);
}

addHello("Jay", printVariable);

//normal callback using simplified function

function addHello1(name, callback) {
  callback("Hello " + name);
}

addHello1("Jack", function (variable) {
  console.log(variable);
});

//callback using an arrow function to simplify
function addHello2(name, callback) {
  callback("Hello " + name);
}

addHello2("Jane", (variable) => console.log(variable));
