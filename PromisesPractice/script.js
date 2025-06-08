/* A promise is a better way of calling asynch callback functions. 
its saying that you are making a promise and if you succeed the resolve is ran,
and if you fail then the reject is run*/
const promise = new Promise((resolve, reject) => {
  const equal = 1 + 2;
  if (equal === 2) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

promise
  //.then is equal to the resolve function. so if the promise is kept then the code in this function is ran.
  .then((Message) => {
    console.log(Message);
  })
  //.catch is equal to the reject function. and if the promise fails then the code in this function is ran.
  .catch((Message) => {
    console.error(Message);
  });

//Using promises instead of callbacks helps avoid callback hell.

setTimeoutPromise(250)
  //.then is pretty much the function in the original setTimeout function.
  //Ex: setTimeout("1", 250). 1 is printed after 250ms.
  .then(() => {
    console.log("1");
    return setTimeoutPromise(250);
  })
  .then(() => {
    console.log("2");
    return setTimeoutPromise(250);
  })
  .then(() => {
    console.log("3");
    return setTimeoutPromise(250);
  });

function setTimeoutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}

/*
 *
 *
 *
 */

const button = document.querySelector(".button");

/*Function takes in an html element and keyword such as "click", and returns a promise
that creates event listener on promise and uses the method as the keyword. the resolve that is added to the event listener 
will be the function that runs when "clicked". think of the resolve function as the code in the ".then" section.
*/
function addEventListenerPromise(element, method) {
  return new Promise((resolve, reject) => {
    element.addEventListener(method, resolve);
  });
}

addEventListenerPromise(button, "click").then(() => {
  console.log("clicked");
});

//promise methods:
//promise.all will take an array of promises
//it will only go to .then if all of the elements are resolve.
Promise.all([
  promise.resolve("1"),
  promise.reject("error on 2"),
  promise.resolve("3"),
])
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

//promise.any will go to the one that first succeeds.
Promise.any([
  promise.resolve("1"),
  promise.reject("error on 2"),
  promise.resolve("3"),
]).then((message) => {
  console.log(message);
});

//promise.race gets the first promise whether it succeeds or fails.
Promise.race([
  promise.resolve("1"),
  promise.reject("error on 2"),
  promise.resolve("3"),
])
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
