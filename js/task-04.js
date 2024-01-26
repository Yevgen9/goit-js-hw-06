const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
let counterValue = document.querySelector("#value");
let count = 0;

btnDecrement.addEventListener("click", () => {
  count -= 1;
  counterValue.textContent = count;
});

btnIncrement.addEventListener("click", () => {
  count += 1;
  counterValue.textContent = count;
});
