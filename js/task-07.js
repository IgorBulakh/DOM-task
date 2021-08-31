/*
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
*/

let spanTextRef = document.querySelector("#text");

let inputRef = document.querySelector("#font-size-control");

inputRef.addEventListener("input", (event) => {
  // let sizeVal = event.target.value;
  let sizeVal = inputRef.value;

  spanTextRef.style.fontSize = sizeVal + "px";
});
/* */
