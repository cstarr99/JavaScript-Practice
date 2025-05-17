//Can change the id or class with JS.
//ID.

const divID = document.getElementById("div-id");
divID.style.color = "red";

/*
 *
 *
 *
 */

//Class.
//Because class selector can have multiple, the classes are on an array, so you can call them the same as ID.
const classID = document.getElementsByClassName("div-class");

//array.from converts something to an array.
const classIDArray = Array.from(classID);

//for each item with this class change the color to blue.
classIDArray.forEach((div) => (div.style.color = "blue"));

//since the class selector is an array, you could just choose one based on index to change.
classID[0].style.color = "purple";

/*
 *
 *
 *
 */

//Query Selectors can select anything. THESE ARE USED MOST OF THE TIME.
//QuerySelector is used by typing the CSS name of the selector you want and it will give you the first one it finds.

const text = document.querySelector(".text");
text.style.color = "yellow";

//QuerySelectorAll will give you an array of all the items that match the selector.

const multiple = document.querySelectorAll(".words");

multipleArray = Array.from(multiple);

multipleArray.forEach((div) => (div.style.color = "green"));
