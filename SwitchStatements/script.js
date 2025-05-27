//Switch statements are used in situations where you want to check one variable across many if/else statements.
//Normal if/else:

const favoriteAnimal = "dog";

if (favoriteAnimal == "cat") {
  console.log("cats are cool");
} else if (favoriteAnimal == "dog") {
  console.log("dogs are the best");
} else if (favoriteAnimal == "lizard") {
  console.log("lizards are weird");
} else {
  console.log("I dont know that animal");
}

//Same situation but with a switch statement

switch (favoriteAnimal) {
  case "bobcat":
  case "jaguar":
  case "cat":
    console.log("cats are cool");
    break;
  case "dog":
    console.log("dogs are the best");
    break;
  case "lizard":
    console.log("lizards are weird");
    break;
  default:
    console.log("I dont know that animal");
}

/*
 *
 *
 *
 */

//Switch practice
const number = 5;

switch (number) {
  case 0:
    console.log("It is zero");
    break;
  case 1:
  case 2:
    console.log("It is small");
    break;
  case 3:
  case 4:
    console.log("It is medium");
    break;
  case 5:
    console.log("It is large");
    break;
  default:
    console.log("Try again");
}
