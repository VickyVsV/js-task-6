const inputEl = document.querySelector("#name-input");
const textEl = document.querySelector("#name-output");

inputEl.addEventListener("input", handlerInput);

function handlerInput(event) {
  if(inputEl.value === ''){
    textEl.textContent = 'Anonymous';
  }
  else textEl.textContent = event.currentTarget.value;
  //console.dir(event.currentTarget.value);
}
