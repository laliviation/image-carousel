const images = ["slide1.png", "slide2.png", "slide3.png", "slide4.png", "slide5.png", "slide6.png", "slide7.png", "slide8.png", "slide9.png", "slide10.png"];
const links = ["https://boresjazz.hu/programok/?render=full", "https://opusjazzclub.hu/koncertek/jambor-armin-quartet-2508", "https://www.facebook.com/people/Jazz-PArt/100084734805068/", "https://www.jazzland.at", "https://www.musikwerkstattwels.at", "https://www.lepirate-rosenheim.de", "https://www.royalgarden.at/programm/", "https://www.tribuene-linz.at", "https://www.cafe-traxlmayr.at/konzerte/", "https://zehnerhaus-badradkersburg.at/veranstaltungskalender/"];
let current = 0;

const carouselImage = document.getElementById("carouselImage");

carouselImage.addEventListener("click", function(event) {
  const width = carouselImage.clientWidth;
  const clickX = event.offsetX;

  if (clickX < width * 0.3) {
    // Left 30% = go to previous image
    current = (current - 1 + images.length) % images.length;
    carouselImage.src = images[current];
  } else if (clickX > width * 0.7) {
    // Right 30% = go to next image
    current = (current + 1) % images.length;
    carouselImage.src = images[current];
  } else {
    // Middle 40% = open link
    window.open(links[current], "_blank");
  }
});
