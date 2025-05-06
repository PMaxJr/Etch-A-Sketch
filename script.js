console.log("Hello World!");

const container = document.getElementById("grid-container");

for (let i = 0; i < 2640; i++) {
  const cell = document.createElement("div");
  cell.classList.add("grid-item");

  // cell.addEventListener("mouseenter", () => {
  //   cell.style.backgroundColor = "black";
  //   cell.style.transition = "background-color 0.3s ease";
  // });

  container.appendChild(cell);
}

activateGridSquares();

const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
  const cells = document.querySelectorAll(".grid-item");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});

let randomColorMode = false;
const randomColorButton = document.getElementById("random-color-button");

randomColorButton.addEventListener("click", () => {
  randomColorMode = !randomColorMode;
  if (randomColorMode) {
    randomColorButton.classList.add("activated");
    randomColorButton.classList.remove("deactivated");
  } else {
    randomColorButton.classList.remove("activated");
    randomColorButton.classList.add("deactivated");
  }
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function activateGridSquares() {
  const cells = document.querySelectorAll(".grid-item");
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      if (randomColorMode) {
        cell.style.backgroundColor = getRandomColor();
      } else {
        cell.style.backgroundColor = "black";
      }
      cell.style.transition = "background-color 0.3s ease";
    });
  });
}
