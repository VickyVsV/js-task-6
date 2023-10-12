const categoriesEl = document.querySelector("#categories");
const parentItemList = document.querySelectorAll("li.item");

//parentItemList.forEach((element) => console.log(element));
parentItemList.forEach(element => {

  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.firstElementChild.nextElementSibling.childElementCount}`);


});
console.log(categoriesEl.children.length);
console.log(parentItemList);
