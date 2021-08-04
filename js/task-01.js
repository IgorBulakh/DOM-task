// Посчитает и выведет в консоль количество категорий в ul#categories===========

const categoriesRef = document.querySelector("#categories").children;
// const categoriesRef = document.querySelector("#categories").children.length;
console.log(`В списке ${categoriesRef.length} категории`);
// console.log(categoriesRef);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li)

const itemsRef = [...categoriesRef]
  .map(
    (categories) => `Категории: ${categories.children[0].textContent}
  Количество елементов: ${categories.children[1].children.length}`
  )
  .join("\n");

console.log(itemsRef);
