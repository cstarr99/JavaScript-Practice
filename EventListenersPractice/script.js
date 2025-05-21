//An event listener will allow you to change elements from html.

const button = document.querySelector("[data-btn]");

//when you click the button then the console will print "clicked".
button.addEventListener("click", () => {
  console.log("clicked");
});

/*
 *
 *
 *
 */

//remove event listener by calling the function.

//function that prints "remove" to console.
function clicked() {
  console.log("remove");
}

//when button is clicked it runs the function that prints "remove"
button.addEventListener("click", clicked());

//when button is clicked it removes the clicked function and thus doesn't print "remove"
button.removeEventListener("click", clicked());

/*
 *
 *
 *
 */

//when link is clicked, prevents the default and log something to console.
const link = document.querySelector(".text");

link.addEventListener("click", (e) => {
  //prevent default just prevents the default action. in this case its to follow the link to its site.
  e.preventDefault();
  console.log("clicked link");
});
