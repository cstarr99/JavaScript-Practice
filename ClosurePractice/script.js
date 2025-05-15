/*When you define a function inside of another function,
that function can use the variables from the outer function.*/

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
  };
}

const newFunction = outerFunction("Outside");
newFunction("Inner");
