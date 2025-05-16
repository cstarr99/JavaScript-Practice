//An object is a way to organize a bunch of different variables, and items in one place.

let person = {
  name: "Chase",
  age: 25,
  favoriteNumber: 3,
  sayHi: function () {
    console.log("Hi");
  },
};

//How to print/get specific items from object.

console.log(person.name);

/*you can even call functions from an object. 
 Same as using console.log, console is an object and log is a function that takes in what you want and prints it.*/

person.sayHi();

//Make an object called car.

let car = {
  make: "Toyota",
  model: "Camry",
  year: "1997",
  isUsed: true,
  makeNoise() {
    console.log("Vroom");
  },
};

console.log(car);
console.log(car.make);

car.makeNoise();

//Can also use string to select variable to call from object. dot is better though, so generally use that.

console.log(car["model"]);

//Can put object inside of other objects.

let citizen = {
  name: "John",
  hobbies: ["Polo", "Soccer"],
  address: {
    city: "New York",
    street: " 12343 Bilge Road",
  },
};

console.log(citizen.address.city);

//Can change properties of object by using dot method.

citizen.name = "Mary";

console.log(citizen);
