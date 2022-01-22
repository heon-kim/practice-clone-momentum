// const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
// image = images[parseInt(Math.random() * images.length)];

const image = "sky.jpg";
const bgImage = document.createElement("img");
bgImage.classList.add("bgImage");
bgImage.src = `img/${image}`;

document.body.appendChild(bgImage);
