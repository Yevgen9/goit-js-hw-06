const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", () => {
  const validLength = +inputRef.dataset.length;

  if (inputRef.value.length === validLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
});
