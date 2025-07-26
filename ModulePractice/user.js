const me = {
  age: 25,
  name: "chase",
};

export const sally = {
  age: 25,
  name: "sally",
};

export const sam = {
  age: 25,
  name: "sam",
};

function printUser(name) {
  console.log(name);
}

//for variables, only export default can go on separate line. The rest have to be like sally.
export default me;
