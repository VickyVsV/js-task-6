const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("#ingredients");
const markup =ingredients.map((ingredient) => {
  const liEl = document.createElement('li');
  liEl.className = 'item';
  liEl.textContent = ingredient;
  console.log(liEl);
  return liEl;
})

ulEl.append(...markup);
//"spread" используется для распространения (развертывания) элементов массива markup 
//и добавления их как отдельные аргументы для метода append.

// В методе с использованием ulEl.append(...markup) элементы добавляются в DOM только один раз 
// после завершения цикла map. 
// Это более эффективный способ, так как минимизируется количество обновлений DOM, 
// и браузер будет выполнять меньше операций перерисовки.

//*******************************************************************
// const ulEl = document.querySelector("#ingredients");
// const markup =ingredients.map((ingredient) => {
//   const liEl = document.createElement('li');
//   liEl.className = 'item';
//   liEl.textContent = ingredient;
//   console.log(liEl);
//   ulEl.append(liEl);
// })

// Добавляет каждый элемент в DOM непосредственно во время выполнения цикла map. 
// Это значит, что браузер будет обновлять DOM каждый раз, когда вы вызываете ulEl.append(liEl). 
// Если у вас есть много элементов, это может вызвать несколько перерисовок DOM, 
// что может быть неэффективно.


// const listEl = ingredients.reduce((str, item) => str + `<li class = item>${item}</li>`, '');
// console.log(listEl);
// ulEl.innerHTML = listEl;