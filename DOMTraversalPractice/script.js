//Shows the different way you can connect elements from the DOM in JS.
const grandparent = document.querySelector("#grandparent");

const parentOne = childOne.parentElement;

const parentTwo = parentOne.nextElementSibling;

const childOne = childTwo.previousElementSibling;

const childTwo = parentOne.children[1];

//closest looks at all parents of chosen element and find very first one that matches description.
const greatGrandparent = childTwo.closest("Great-grandparent");
