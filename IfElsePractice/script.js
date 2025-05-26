//If statement practice. if the statement is true then the if statement will run that code.
if (2 == 2) {
  console.log("true");
} else {
  console.log("false");
}

//to add multiple conditions use the "if else" property
let x = 15;

if (x < 10) {
  console.log("less than 10");
} else if (x > 20) {
  console.log("less less than 20");
} else if (x == 15) {
  console.log("x = 15");
} else {
  console.log("this is too hard");
}

/*
 *
 *
 *
 */

//create a variable that holds an array
const array = [1, 2, 3, 4];
//Using an if statement with else if, check length of array.
if (array.length === 0) {
  console.log("empty");
} else if (array.length < 5) {
  console.log("small");
} else if (array.length < 10) {
  console.log("medium");
} else {
  console.log("large");
}
