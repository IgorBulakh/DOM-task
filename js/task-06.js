let inputRef = document.querySelector("#validation-input");
let inputLength = inputRef.dataset.length;

inputRef.addEventListener("change", (event) => {
  const val = event.target.value;

  if (val.length === +inputLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
});

// ===================================
