/*
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
*/

let valueNumberRef = Number(document.querySelector("#value").textContent);
let counterValue = document.querySelector("#value");

const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');

// const onValueRef = () => {
//   console.log(counterValue);
// };

// decrementRef.addEventListener("click", onValueRef);
// incrementRef.addEventListener("click", onValueRef);

decrementRef.addEventListener("click", (even) => {
  valueNumberRef -= 1;

  counterValue.textContent = valueNumberRef;
  // counterValue.textContent = even.target.value--;
  console.log(valueNumberRef);
});

incrementRef.addEventListener("click", (even) => {
  valueNumberRef += 1;

  counterValue.textContent = valueNumberRef;
  // counterValue.textContent = even.target.value++;

  console.log(valueNumberRef);
});
