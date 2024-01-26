const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const condimentsRef = document.createElement("li");
condimentsRef.classList.add("item");
condimentsRef.textContent = "Condiments";

const herbsRef = document.createElement("li");
herbsRef.classList.add("item");
herbsRef.textContent = "Herbs";

const tomatosRef = document.createElement("li");
tomatosRef.classList.add("item");
tomatosRef.textContent = "Tomatos";

const garlicRef = document.createElement("li");
garlicRef.classList.add("item");
garlicRef.textContent = "Garlic";

const mushroomsRef = document.createElement("li");
mushroomsRef.classList.add("item");
mushroomsRef.textContent = "Mushrooms";

const potatoesRef = document.createElement("li");
potatoesRef.classList.add("item");
potatoesRef.textContent = "Potatoes";

const ingredientsRef = document.querySelector("#ingredients");
ingredientsRef.prepend(
  potatoesRef,
  mushroomsRef,
  garlicRef,
  tomatosRef,
  herbsRef,
  condimentsRef
);
