/*
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);
console.log(document.body.children[1]);
console.log(document.body.children[1].children[1]);
*/
//--------------------------------------------

/*
const user = {
  name: "Mango",
  showName() {
    console.log(this);
    // this будет ссылаться на button если использовать showName как callback
    console.log(`My name is: ${this.name}`);
    // тут undefined так как поля name у button нет
  },
};


//  Представим что у нас есть кнопка с классом js-btn
//  Выберем ее и повесим на нее слушатель клика
 
const btn = document.querySelector(".js-btn");

user.showName(); //работает
btn.addEventListener("click", user.showName); // не работает
btn.addEventListener("click", user.showName.bind(user)); // работает
*/

const addBtn = document.querySelector('button[data-action="add"]');
const removeBtn = document.querySelector('button[data-action="remove"]');
const btn = document.querySelector("#btn");

const handleClick = () => {
  alert("CLICK EVENT LISTENER ALERT!");
};

addBtn.addEventListener("click", () => {
  btn.addEventListener("click", handleClick);
});

removeBtn.addEventListener("click", () => {
  btn.removeEventListener("click", handleClick);
});
