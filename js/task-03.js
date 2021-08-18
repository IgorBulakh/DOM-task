const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

console.table(images);

/*
Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
*/

const creatImagesCart = (image) => {
  const imgRef = document.createElement("img");
  imgRef.classList.add("img-js");
  imgRef.src = image.url;
  imgRef.alt = image.alt;

  const listRef = document.createElement("li");
  listRef.classList.add("list-js");
  listRef.appendChild(imgRef);

  return listRef;
};

const galeryImage = images.map((icon) => creatImagesCart(icon));
console.log(galeryImage);

const listHtml = document.querySelector("#gallery");

listHtml.append(...galeryImage);
