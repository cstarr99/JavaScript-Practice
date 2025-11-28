const tiles = Array.from(document.querySelectorAll(".tile"));
const resetBtn = document.querySelector(".reset-btn");
const shuffleBtn = document.querySelector(".shuffle-btn");
let showedUnits = [];

//make tile appear
document.addEventListener("click", (e) => {
  e.preventDefault();
  showedUnits = [];
  if (!e.target.matches(".tile")) return;
  const currentTile = e.target;
  currentTile.classList.remove("hidden");

  tiles.forEach((unit) => {
    if (
      !unit.classList.contains("hidden") &&
      !unit.classList.contains("correct") &&
      !unit.classList.contains("incorrect")
    ) {
      showedUnits.push(unit);
    }
  });
  if (showedUnits.length == 2) {
    checkIfCardCorrect(showedUnits);
  }
});

//resets all tiles
resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  reset();
});

shuffleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  tiles.forEach((unit) => {
    unit.classList.add("hidden");
    unit.classList.remove("correct");
    unit.classList.remove("incorrect");
  });
  const shuffledCards = shuffleCards();
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].innerText = shuffledCards[i];
  }
});

function reset() {
  tiles.forEach((tile) => {
    tile.classList.add("hidden");
    tile.classList.remove("correct", "incorrect");
  });
}

function checkIfCardCorrect(showedUnits) {
  const isSameNumber = showedUnits.every((number) =>
    number.isEqualNode(showedUnits[0])
  );
  if (isSameNumber) {
    showedUnits.forEach((unit) => {
      unit.classList.add("correct");
    });
  } else {
    showedUnits.forEach((unit) => {
      unit.classList.add("incorrect");
    });
  }
  const isGameDone = tiles.every((unit) => {
    return !unit.classList.contains("hidden");
  });
  if (isGameDone) {
    showScore();
  }
}

function shuffleCards() {
  let gameUnitText = tiles.map((unit) => unit.textContent);
  for (let i = 0; i < gameUnitText.length; i++) {
    let temp = gameUnitText[i];
    let r = Math.floor(Math.random() * gameUnitText.length);
    gameUnitText[i] = gameUnitText[r];
    gameUnitText[r] = temp;
  }
  return gameUnitText;
}
