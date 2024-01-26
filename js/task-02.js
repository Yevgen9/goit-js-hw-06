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
// document.bo dy.prepend(condimentsRef);

const herbsRef = document.createElement("li");
herbsRef.classList.add("item");
herbsRef.textContent = "Herbs";
// document.body.prepend(herbsRef);

const tomatosRef = document.createElement("li");
tomatosRef.classList.add("item");
tomatosRef.textContent = "Tomatos";
// document.body.prepend(tomatosRef);

const garlicRef = document.createElement("li");
garlicRef.classList.add("item");
garlicRef.textContent = "Garlic";
// document.body.prepend(garlicRef);

const mushroomsRef = document.createElement("li");
mushroomsRef.classList.add("item");
mushroomsRef.textContent = "Mushrooms";
// document.body.prepend(mushroomsRef);

const potatoesRef = document.createElement("li");
potatoesRef.classList.add("item");
potatoesRef.textContent = "Potatoes";
// document.body.prepend(potatoesRef);

const ingredientsRef = document.querySelector("#ingredients");
console.log(ingredientsRef);

ingredientsRef.prepend(
  potatoesRef,
  mushroomsRef,
  garlicRef,
  tomatosRef,
  herbsRef,
  condimentsRef
);
