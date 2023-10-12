let counterValue = 0;
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector("#value");

btnDecrement.addEventListener("click", handlerClickDecrement);
btnIncrement.addEventListener("click", handlerClickIncrement);

function handlerClickDecrement() {
  counterValue--;
  counterValueEl.textContent = counterValue;
  console.log(counterValue);
}

function handlerClickIncrement() {
  counterValue++;
  counterValueEl.textContent = counterValue;
  console.log(counterValue);
}
