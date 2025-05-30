//Recursion is when you call a function inside of itself.
/*function takes in 1 and since 1 is not greater than 2, the function moves on.
then 1 is printed. then the function printNumber is called again so it starts from the beginning.
but this time the number variable = 2. So, since 2 is not greater than 2 the function moves on.
then 2 is printed. and printNumber is called again but this time with the variable being 3. since 3 > 2, the function stops.
and then since 3 > 2 and it returns the recursion is done and the function can continue. but we have to finish the orignal function still.
So, we have to print "exiting function" for the time when number = 2, and then the first time when number = 1.
*/
function printNumber(number) {
  // if the number is greater than 2, stop the function.
  if (number > 2) return;
  console.log(number);
  printNumber(number + 1);
  console.log("exiting function");
}

printNumber(1);

//Recursion practice go through the person object and print out everyone's name.

const person = {
  name: "Kyle",
  friend: {
    name: "Joe",
    friend: {
      name: "Sally",
    },
  },
};

let currentPerson = person;

function printNames(currentPerson) {
  //if the current person is null then stop recursion.
  if (currentPerson == null) return;
  //print the current person's name.
  console.log(currentPerson.name);
  //the current person now becomes the friends name.
  currentPerson = currentPerson.friend;
  //print the new persons name(persons friend) name.
  printNames(currentPerson);
}

console.log(printNames(currentPerson));
