//How booleans work.
let happy = true;
let fun = true;
let sad = false;

console.log(happy || sad);
console.log(fun && sad);
console.log(!happy);
console.log(happy == fun);

console.log("------");

//== will automatically change type when comparing.
//So most of the time you want to use === because it wont change type.

let triple = 1;
let double = "1";

console.log(triple == double);
console.log(triple != double);

//The item above prints true even though they are different types.
//The item below function using === will print false because they are different types.

console.log(triple === double);
console.log(triple !== double);
