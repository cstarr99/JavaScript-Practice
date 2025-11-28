// How operators work with different variable types.
let a = 1;
let b = 2;

console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a <= b);
console.log(a >= b);

let c = true;
let d = false;

console.log(c == d);
console.log(c != d);

let e = "a";
let f = "b";

console.log(e == f);
console.log(e != f);

//== doesn't care about type, === does
const jim = 1;
const lee = "1";

const tru = jim == lee;
console.log(tru);

//only time to use == is with null or undefined!!!
