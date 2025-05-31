//When using the || operators the computer is smart enough to know if the first part is true then it does not even need the second part.
console.log(true || false);

//This:
function printName(name) {
  if (name == null) {
    name = "default";
  }
  console.log(name);
}

printName("chase");

//Is the same as this. because if there is a name, then it will forget about the "default", but if not then it will go to "default."
function printName1(name) {
  name = name || "default";
  console.log(name);
}

printName1("jack");

//You can do the same thing with the && operator. if one part of the operator is not true then the rest of the code will not run.
const person = {};

//if person is true then move on to person.name, and if it does not then it will not move on to person.address and will end there.
//this is used to deeply navigate and access an object.
console.log(person && person.name && person.address);
