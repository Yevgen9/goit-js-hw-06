const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector(".gallery");
const liOneRef = document.createElement("li");
const liTwoRef = document.createElement("li");
const liThreeRef = document.createElement("li");

galleryRef.prepend(liOneRef);
galleryRef.prepend(liTwoRef);
galleryRef.prepend(liThreeRef);

const imageOne = document.createElement("img");
imageOne.src = images[0].url;
imageOne.alt = images[0].alt;
liOneRef.prepend(imageOne);

const imageTwo = document.createElement("img");
imageTwo.src = images[1].url;
imageTwo.alt = images[1].alt;
liTwoRef.prepend(imageTwo);

const imageThree = document.createElement("img");
// imageThree.src = images[2].url;
imageThree.setAttribute(
  "src",
  "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
);

// imageThree.alt = images[1].alt;
imageThree.setAttribute("alt", "Group of Horses Running");
liThreeRef.prepend(imageThree);

console.log(galleryRef);
