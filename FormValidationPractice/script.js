const username = document.getElementById("username");
const password = document.getElementById("password");
const terms = document.getElementById("terms");
const passwordConfirmation = document.getElementById("password-confirmation");
const form = document.getElementById("form");
const errorsList = document.querySelector(".errors-list");
const errors = document.querySelector(".errors");

//An event listener for when the form is submitted and does all of the following inside it.
form.addEventListener("submit", (e) => {
  //make an empty array
  const errorMessages = [];
  //executes clear errors function
  clearErrors();
  //if the usernames length is less than six, add the message to the errorMessages array.
  if (username.value.length < 6) {
    errorMessages.push("Ensure the username is at least 6 characters long");
  }
  //if the passwords length is less than 10, add the message to the errorMessages array.
  if (password.value.length < 10) {
    errorMessages.push("Ensure the password is at least 10 characters long");
  }
  //if the password doesn't match the password confirmation, add the message to the errorMessages array.
  if (password.value !== passwordConfirmation.value) {
    errorMessages.push("Ensure the password and confirmation password match");
  }
  //if the terms are not checked, add the message to the errorMessages array.
  if (terms.checked === false) {
    errorMessages.push("Ensure the terms checkbox is checked");
  }
  //if there is even 1 error message then don't submit the form and execute show errors function.
  if (errorMessages.length > 0) {
    e.preventDefault();
    showErrors(errorMessages);
  }
});

function clearErrors() {
  //while the first li in the errors list is not undefined or null continue the while loop.
  while (errorsList.children[0] != undefined || null) {
    //remove the current error list child at index 0.
    errorsList.removeChild(errorsList.children[0]);
    //after it is removed the current child[1] will become child[0] because the while loop has not stopped.
  }
  //remove the show class from errors to make it disappear.
  errors.classList.remove("show");
}

function showErrors(errorMessages) {
  //for each error message in the array...
  errorMessages.forEach((errorMessage) => {
    //create a "li" element in the errors list
    const li = document.createElement("li");
    //add the current error message to that element.
    li.innerText = errorMessage;
    //add the li to the error list.
    errorsList.appendChild(li);
  });
  //add the show class to errors to make it appear
  errors.classList.add("show");
}
