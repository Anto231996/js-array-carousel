const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

let carouselImg = document.createElement("img");
carouselImg.src = "img/01.jpg";
document.getElementById('carousel').appendChild(carouselImg);
carouselImg.style.width = '100%';
carouselImg.style.height = '500px';