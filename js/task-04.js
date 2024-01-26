const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector("#value");

let count = 0;

btnDecrementEl.addEventListener("click", () => {
  count -= 1;
  counterValueEl.textContent = count;
});

btnIncrementEl.addEventListener("click", () => {
  count += 1;
  counterValueEl.textContent = count;
});
