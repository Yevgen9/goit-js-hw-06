const categoriesRef = document.querySelectorAll("li.item");
console.log("Number of categories:" + categoriesRef.length);

const titleRef = document.querySelectorAll("h2");

// console.log("Elements: " + titleRef.length);

titleRef.forEach((title) => {
  console.log("Category: " + title.textContent);
  console.log("Elements: " + title.nextElementSibling.children.length);
});
