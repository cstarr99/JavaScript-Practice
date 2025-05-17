//Using a function to make an object normally. This is what is called a CONSTRUCTOR FUNCTION.

function newUser(name, age) {
  return { name: name, age: age, human: true };
}

const userFunc = newUser("Sally", 24);
console.log(userFunc);

/*
 *
 *
 *
 */

//Using NEW and THIS keywords to do the same thing...
//The THIS keyword automatically puts each parameter in the new object and returns it for you.

function User(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}

//The NEW keyword creates a new instance of the function to allow you to create a user.

const user = new User("John", 21);
console.log(user);

/*
 *
 *
 *
 */

//Most of the time you will be using NEW with already made objects.

const date = new Date();
console.log(date);

/*
 *
 *
 *
 */

//You can do the same thing as above but with a class, but classes are not used very often.

class User1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  //You can even put functions inside a class.
  printName() {
    console.log(this.name);
  }
}

const user1 = new User1("Tim", 13);
console.log(user1);

user1.printName();
