const output = document.querySelector(".output");
let totalOutput = [];

document.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;
  const currentBtn = e.target;
  checkTile(currentBtn);
  if (totalOutput.length > 0) {
    const noCommaTotalOutput = totalOutput.join("");
    output.innerText = noCommaTotalOutput;
    if (currentBtn.innerText === "=") {
      const calculatedTotal = (output.innerText =
        calculate(noCommaTotalOutput));
      totalOutput = [calculatedTotal];
    }
  }
});

function checkTile(item) {
  if (item.innerText === "C") {
    clearOutput();
  } else if (item.innerText === "=") {
    return;
  } else {
    totalOutput.push(item.innerText);
  }
}

function clearOutput() {
  output.innerText = "";
  totalOutput = [];
}

function calculate(noCommaTotalOutput) {
  return eval(noCommaTotalOutput.toString());
}
