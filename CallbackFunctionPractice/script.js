//function that takes in variable and prints that variable.
function printVariable(Variable) {
  console.log(Variable);
}

//function that takes in function as x. the function then uses "hello world" as argument in print variable function.
function func(x) {
  x("hello world");
}

func(printVariable);

/*




*/

// function that takes in a variable and prints that variable.
function printVariable(variable) {
  console.log(variable);
}

/*function takes a name, and callback function(printVariable). 
   callback then adds hello to name and is printed by printVariable function. */
function addHello(name, callback) {
  callback("Hello " + name);
}

addHello("Chase", printVariable);

/*


*/

//you can simplify it by making the function inside the parameters.
function addHello(name, callback) {
  callback("Hello " + name);
}

//instead of making printVariable function you can just make it when calling addHello function.
addHello("Chasey", function (variable) {
  console.log(variable);
});

/*



*/

//adds two variables and then returns them.
function sum(a, b) {
  return a + b;
}

//Adds "you rolled a _" to the number variable
function youRolled(callback, a, b) {
  return "You rolled a " + sum(a, b);
}

let dice = youRolled(sum, 5, 1);
console.log(dice);

/*


*/

//multiplies giving number by 2 adn prints it
function multiply(variable) {
  console.log(variable * 2);
}

//takes in callback and variable and then uses callback to modify variable.
function callbackFunction(callback, variable) {
  callback(variable);
}

callbackFunction(multiply, 4);
