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
