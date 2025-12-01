const URL = "https://picsum.photos/200/300";
const imgBtn = document.querySelector(".img-btn");
const card = document.querySelector(".card");

imgBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearImg();
  fetchAPI(URL);
});

async function fetchAPI(URL) {
  try {
    const response = await fetch(URL);
    console.log(response.url);
    if (response.ok) {
      const imgContainer = document.createElement("img");
      imgContainer.src = response.url;
      card.appendChild(imgContainer);
    }
  } catch (e) {
    console.log(e);
  }
}

function clearImg() {
  while (card.children[0] != undefined || null) {
    card.removeChild(card.children[0]);
  }
}
