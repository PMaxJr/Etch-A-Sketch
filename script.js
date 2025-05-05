console.log("Hello World!");

const container = document.getElementById("grid-container");

for (let i = 0; i < 2640; i++) {
  const cell = document.createElement("div");
  cell.classList.add("grid-item");

  cell.addEventListener("mouseenter", () => {
    cell.style.backgroundColor = "black";
    cell.style.transition = "background-color 0.3s ease";
  });

  container.appendChild(cell);
}
