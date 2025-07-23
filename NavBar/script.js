const countryList = document.querySelector(".country-list");

document.addEventListener("mouseover", (e) => {
  e.preventDefault();
  if (!e.target.matches(".nav-item")) return;
  const currentButton = e.target;
  const closestCountryList = currentButton.children[0];
  closestCountryList.style.display = "block";
});

document.addEventListener("mouseout", (e) => {
  e.preventDefault();
  if (!e.target.matches(".nav-item")) return;
  const currentButton = e.target;
  const closestCountryList = currentButton.children[0];
  closestCountryList.style.display = "none";
});
