/*
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
*/

let inputRef = document.querySelector("#name-input");
let spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", handlerValue);

function handlerValue(event) {
  inputRef = event.target.value;
  console.log(inputRef);

  inputRef !== " " ? (spanRef.textContent = inputRef) : "незнакомец";
}

/*
inputRef.addEventListener("input", (event) => {
  const inputElem = event.target.value;

  // inputRef !== " " ? (spanRef.textContent = inputElem) : "незнакомец";
  inputRef === " " ? spanRef.textContent : (spanRef.textContent = inputElem);
});
*/
/*
inputRef.onchange = function () {
  if (inputRef.value !== "") {
    spanRef.textContent = inputRef.value;
  } else {
    spanRef.textContent = "незнакомец";
  }
};
*/
