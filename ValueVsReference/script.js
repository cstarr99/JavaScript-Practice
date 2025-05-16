/*arrays and objects are references to spots in memory, 
while the other variable types are values which is why they act differently.
So even if you assign b = a, and then change b, it wont change a. But when you change an object or array it changes the original value. */
//since d is referring to the same thing, when you push 4 to d it adds it to c too.

c = [1, 2];
d = c;

d.push(4);
console.log(c);

/*But when its just a normal variable changing a variable that references the original variable wont change the original variable.
 because when b = a it makes an entirely new value unlike objects and arrays. */

a = 10;
b = a;
b = b + 1;

console.log(a);
console.log(b);

//Even though the two exact same arrays have different values, they will not equal each other.
//arrays and objects are references, so even though they are the same they hold different spots in memory.
g = [1, 2]; // 0x01
h = [1, 2]; // 0x02

console.log(g === h);

// But this is not the case for other variable types like int or string.

x = 5;
z = 5;

console.log(z === x);
