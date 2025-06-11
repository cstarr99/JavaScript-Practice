//if you are making elements in js then using queryselector wont include those new elements.
//to get everything use this:
document.addEventListener("click", (e) => {
  //takes in css selector and if target matches then returns true, if not then returns false
  if (e.target.matches("button")) {
    console.log("clicked");
  }
});

const newButton = document.createElement("button");
newButton.innerText = "Button 5";
document.body.append(newButton);
