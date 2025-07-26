//default goes first without anything, and anything not default has to be in brackets like so.
import me, { sally, sam } from "./user.js";

console.log(sally);
console.log(me);
console.log(sam);

//NODE MODULES
// const userExports = require("./user.js");
// const me = userExports.me;
// const printUser = userExports.printUser;

// printUser(me);
