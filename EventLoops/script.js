//In every script there is a main script. when you use add timeout each time it makes another thread even if it takes 0ms.
function test() {
  console.log("Hi 1");
  console.log("Hi 2");
  //promises run immediately after function is ran.(so before the timeout queue is started)
  new Promise((resolve, reject) => resolve("Promise")).then((message) =>
    console.log(message)
  );
  //these set timeouts are set in a queue for after main thread finishes
  setTimeout(() => console.log("Hi 3"), 10);
  setTimeout(() => console.log("Hi 4"), 0);
  console.log("Hi 5");
}

test();
