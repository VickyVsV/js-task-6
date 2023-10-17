const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', handlerCreeting);

function handlerCreeting(evt){
  if(evt.currentTarget.value.length === Number(evt.currentTarget.dataset.length)){
    inputEl.classList.add(`valid`);
    inputEl.classList.remove(`invalid`);
  }
  else {
    inputEl.classList.add(`invalid`);
    inputEl.classList.remove(`valid`);
  }
  console.log(evt);
}