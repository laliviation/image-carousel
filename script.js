const images = ["slide1.png", "slide2.png", "slide3.png", "slide4.png", "slide5.png", "slide6.png", "slide7.png", "slide8.png", "slide9.png", "slide10.png"];
const links = ["https://boresjazz.hu/programok/?render=full", "https://opusjazzclub.hu/koncertek/jambor-armin-quartet-2508", "https://www.facebook.com/people/Jazz-PArt/100084734805068/", "https://www.jazzland.at", "https://www.musikwerkstattwels.at", "https://www.lepirate-rosenheim.de", "https://www.royalgarden.at/programm/", "https://www.tribuene-linz.at", "https://www.cafe-traxlmayr.at/konzerte/", "https://zehnerhaus-badradkersburg.at/veranstaltungskalender/"];
let current = 0;

function nextSlide() {
  current = (current + 1) % images.length;
  document.getElementById("carouselImage").src = images[current];
}

function visitLink() {
  window.open(links[current], "_blank");
}
