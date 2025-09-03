const button = document.getElementById("colorBtn");
const colors = [
  "#FFB6C1",
  "#87CEFA",
  "#90EE90",
  "#FFD700",
  "#FFA07A",
  "#DDA0DD",
];

button.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
