function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

let bodyEl = document.querySelector("body");
let colorEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", (event) => {
  let randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorEl.textContent = randomColor;
});