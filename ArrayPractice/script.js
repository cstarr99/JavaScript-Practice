const a = [1, 2, 3, 4];

//Index starts at 0.
//How to get an item at a specific index.

console.log(a[0]);

//How to add an element to the end of the array.

a.push(5);

console.log(a);

//Can even add array into array.

a.push([2, 4]);

console.log(a);

//Array with arrays inside of it is called nested arrays.

b = [
  ["Hi", "Bye"],
  ["Pie", "Sky"],
];

//In order to access each element you can do this.
//The first 0 chooses between the first 2 arrays, and the 1 chooses between "Hi" and "Bye".

console.log(b[0][1]);

//Nested array practice. print 4, 8, and 11.

d = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [10, 11, 12, 13, 14],
];

console.log(d[0][3]);
console.log(d[1][2]);
console.log(d[2][1]);

//How to get the length of an array.

console.log(d.length);

/*
 *
 *
 */

//ARRAY METHODS

const array = [1, 2, 3, 4, 5];

//The forEach method goes through each of the items in the array.

array.forEach((number, index) => {
  console.log(number + " " + index);
});

//The Map method loops through the array, changes it in some way, and returns a new different array.

const mapArray = array.map((number) => {
  return number * 2;
});

console.log(mapArray);

//The filter method filters down to only select values, and then returns new array.

const filterArray = array.filter((number) => {
  return number > 3;
});

console.log(filterArray);

//The find method will find return the first element that matches the parameters.

const findArray = array.find((number) => {
  return number > 4;
});

console.log(findArray);

//The some method will see if at least one of the elements in array meet the parameters, and then return a boolean.

const isTrue = array.some((number) => {
  return number > 5;
});

console.log(isTrue);

//The every method will see if every element in the array matches the parameters, and returns a boolean.

const everyArray = array.every((number) => {
  return number > 0;
});

console.log(everyArray);

//The reduce method goes through the array and reduces it to only one element.

const sum = array.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(sum);

//Reduce method using an array of objects;

const items = [
  { price: 10 },
  { price: 20 },
  { price: 14 },
  { price: 1 },
  { price: 6 },
];

const sumItems = items.reduce((sum, item) => {
  return sum + item.price;
}, 0);

console.log(sumItems);

//The include method just checks to see if the array includes that element and returns a boolean.

const includesArray = array.includes(4);

console.log(includesArray);
