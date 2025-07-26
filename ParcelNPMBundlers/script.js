//Bundlers are used to combine all the files together(use import and stuff like that) and make it so you don't need to add type="module".
//1. "npm init -y". you'll get a package.json
//2. download parcel "npm i parcel-bundler --save-dev"
//3. go to package.json -> go to "scripts" area -> change "test" to "start" and make the code "parcel index.html"
//4. then go to terminal and run code npm start.(make sure you are in the right folder)
//5. it should open a new website and the code shared between js files should still work even without type="module"

import me, { sally, sam } from "./user.js";

console.log(sally);
console.log(me);
console.log(sam);
