// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

let listRef = document.querySelector("#ingredients");

// const addListRef = ingredients.reduce(
//   (elem, item) => elem + `<li>${item}</li>`,
//   ""
// );
// listRef.innerHTML = addListRef;

const creatList = ingredients.forEach((ingridient) => {
  let itemRef = document.createElement("li");
  itemRef.innerHTML = ingridient;

  listRef.append(itemRef);
});
