//LOCAL STORAGE
//uses key value pair to create item.
localStorage.setItem("name", "chase");
//same thing to change value.
localStorage.setItem("name", "jack");
//just use key to remove item.
localStorage.removeItem("name");

//SESSION STORAGE
//session storage works the same way.
sessionStorage.setItem("name", "sally");

//gets the item.
console.log(sessionStorageStorage.getItem("name"));

//COOKIES
//creates expiration date for cookies since it needs to be manually set.
const date = new Date(9999, 0, 1).toUTCString();
const pastDate = new Date(2000, 0, 1).toUTCString();
//how to make a cookie and set its expiration date.
document.cookie = `name=chase; expires=${date}`;

//only way to delete a cookie is to reset its values to nothing and set expiry date to past date.
document.cookie = `name=; expires=${pastDate}`;
