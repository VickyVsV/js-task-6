const fontSizeEl = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`);

// function onChangeSize (event) {
//   textEl.style.fontSize = `${event.currentTarget.value}px`
// }

// fontSizeEl.addEventListener("input", onChangeSize);

fontSizeEl.addEventListener("input", (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`
});