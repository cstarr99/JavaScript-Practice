//PROMISES
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
    setTimeout(() => resolve(`you waited ${duration} ms`)), duration;
  });
}

/*
 *
 *
 *
 *
 */

function setTimeoutPromise1(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(`you waited ${duration} ms`)), duration;
  });
}
//ASYNC/AWAIT
//the goal of await is to make your code asynchronous while making it look synchronous.
//the code below is alot simpler than the code above.
async function doStuff() {
  //the await word means it will pause the execution of the function until promise resolves/rejects.
  const message = await setTimeoutPromise1(250);
  console.log(message);
  console.log("1");
  const message2 = await setTimeoutPromise1(250);
  console.log(message2);
  console.log("2");
}

doStuff();

//try and catch
async function doStuff1() {
  //try means try the code below and if there is error, then run the code inside of catch.
  try {
    const message3 = await setTimeoutPromise1(250);
    console.log(message3);
    console.log("3");
    const message4 = await setTimeoutPromise1(250);
    console.log(message4);
    console.log("4");
  } catch (error) {
    console.log(error);
  }
}

doStuff1();

/*
 *
 *
 *
 */

function getValueWithDelay(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

function getValueWithDelayError(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error1");
    }, delay);
  });
}

async function doStuff3() {
  try {
    const x = await getValueWithDelay("Hi", 250);
    console.log(x);
    const y = await getValueWithDelay("Hate", 250);
    console.log(y);
    const z = await getValueWithDelayError("Hate the most", 250);
    console.log(z);
  } catch (error) {
    console.log(error);
    //finally just prints out no matter what at the end of resolve/reject.
  } finally {
    console.log("finally");
  }
}

doStuff3();

//THE DIFFERENCE BETWEEN PROMISES AND ASYNC/AWAIT IS THAT PROMISES QUEUE ALL AT THE SAME TIME WHILE ASYNC WILL ONLY DO ONE AT A TIME.
