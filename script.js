const container = document.querySelector('.container');

const colors = [
  "#ff4757", "#1e90ff", "#2ed573", "#ffa502",
  "#3742fa", "#ff6b81", "#a29bfe", "#eccc68",
  "#7bed9f", "#5352ed", "#ff7f50", "#2f3542"
];

for (let i = 0; i < 800; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    square.style.background = randomColor;

    // remove color smoothly after 1 second
    setTimeout(() => {
      square.style.background = "#222";
    }, 1000);
  });

  container.appendChild(square);
}
