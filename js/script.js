const images = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];

const title = ["Svezia", "Svizzera", "Gran Bretagna", "Germania", "Paradise"];

const text = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
  "Lorem ipsum",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
  "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
];

let itemsContent = "";
let thumbnailsContent = "";

for (let i = 0; i < images.length; i++) {
  itemsContent += `
        <div class="item">
            <img src="${images[i]}" alt="${title[i]} picture">
            <div class="item-description px-3">
                <h2>${title[i]}</h2>
                <p>${text[i]}</p>
            </div>
        </div>`;

  thumbnailsContent += `
        <div class="thumbnail">
            <img src="${images[i]}" alt="Thumbnail of ${title[i]} picture">
        </div>`;
}

const itemsElement = document.querySelector("div.slider .items");

itemsElement.innerHTML = itemsContent;

const thumbnailsElement = document.querySelector("div.slider .thumbnails");

thumbnailsElement.innerHTML += thumbnailsContent;

let activeElement = 1;

document.getElementsByClassName("item")[activeElement].classList.add("active");

document
  .getElementsByClassName("thumbnail")
  [activeElement].classList.add("active");

const prev = document.querySelector("div.prev");

prev.addEventListener("click", function () {
  document
    .getElementsByClassName("item")
    [activeElement].classList.remove("active");
  document
    .getElementsByClassName("thumbnail")
    [activeElement].classList.remove("active");

  if (activeElement === 0) {
    activeElement = images.length - 1;
  } else {
    activeElement--;
  }

  document
    .getElementsByClassName("item")
    [activeElement].classList.add("active");
  document
    .getElementsByClassName("thumbnail")
    [activeElement].classList.add("active");
});

const next = document.querySelector("div.next");

next.addEventListener("click", function () {
  document
    .getElementsByClassName("item")
    [activeElement].classList.remove("active");
  document
    .getElementsByClassName("thumbnail")
    [activeElement].classList.remove("active");

  if (activeElement === images.length - 1) {
    activeElement = 0;
  } else {
    activeElement++;
  }

  document
    .getElementsByClassName("item")
    [activeElement].classList.add("active");
  document
    .getElementsByClassName("thumbnail")
    [activeElement].classList.add("active");
});
