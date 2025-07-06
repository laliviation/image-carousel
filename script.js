const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
const links = ["https://site1.com", "https://site2.com", "https://site3.com"];
let current = 0;

function nextSlide() {
  current = (current + 1) % images.length;
  document.getElementById("carouselImage").src = images[current];
}

function visitLink() {
  window.open(links[current], "_blank");
}
