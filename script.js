const images = [
  "slide1.png", 
  "slide2.png", 
  "slide3.png", 
  "slide4.png", 
  "slide5.png",
  "slide6.png", 
  "slide7.png",
  "slide8.png", 
  "slide9.png", 
  "slide10.png"
];  // your images
const links = [
  "https://boresjazz.hu/programok/?render=full", 
  "https://opusjazzclub.hu/koncertek/jambor-armin-quartet-2508",
  "https://www.facebook.com/people/Jazz-PArt/100084734805068/", 
  "https://www.jazzland.at",
  "https://www.musikwerkstattwels.at", 
  "https://www.lepirate-rosenheim.de",
  "https://www.royalgarden.at/programm/", 
  "https://tribuene.at/?page_id=10", 
  "https://www.cafe-traxlmayr.at/konzerte/",
  "https://zehnerhaus-badradkersburg.at/veranstaltungskalender/"

];

let current = 0;

  const carouselImage = document.getElementById("carouselImage");
  carouselImage.src = images[current];

  function nextSlide() {
    current = (current + 1) % images.length;
    carouselImage.src = images[current];
  }

  function previousSlide() {
    current = (current - 1 + images.length) % images.length;
    carouselImage.src = images[current];
  }

  function visitLink() {
    window.open(links[current], "_blank");
  }

  carouselImage.addEventListener("click", function(event) {
    const rect = carouselImage.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.width;

    if (clickX < width * 0.3) {
      previousSlide();
    } else if (clickX > width * 0.7) {
      nextSlide();
    } else {
      visitLink();
    }
  });

