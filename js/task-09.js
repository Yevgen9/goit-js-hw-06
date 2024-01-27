

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)
    }`;
}

const changeColorBtnRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

changeColorBtnRef.addEventListener("click", onChangeColor);

function onChangeColor() {
  const bodyRef = document.querySelector("body");

  spanRef.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = getRandomHexColor();
}
