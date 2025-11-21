//make tile appear
document.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.matches(".tile")) return;
  const currentTile = e.target;
  currentTile.classList.remove("hidden");
});
