//as long as your inside a scope you can see whats outside.
let a = 1;
{
  let b = 2;
  {
    let c = 3;
    console.log(a);
    console.log(b);
    console.log(c);
  }
}

//to use something, they need to be called before being called(except functions).
let x = 4;
function sum(a) {
  console.log(a + x);
}

sum(2);

//can have the same variable name in local and global scope.
let number = 3;
function subtract(a, b) {
  let number = a - b;
}

//local scopes can use global variables, but global scopes cant use local variables.
let n = 2;
function divide(a) {
  return a / n;
}
