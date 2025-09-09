const images = [
  "slide1.png", 
  "slide2.png", 
  "slide3.png", 
  "slide4.png", 
  "slide5.png",
  "slide6.png", 
  "slide7.png",
  "slide8n.png", 
  "slide9.png", 
  "slide10.png",
  "slide11.png",
  "slide12.png",
  "slide13.png",
  "slide14.png",
  "slide15.png",
  "slide16.png",
  "slide17.png",
  "slide18.png",
  "slide19.png"
];  // your images
const links = [
  "https://boresjazz.hu/programok/?render=full", 
  "https://opusjazzclub.hu/koncertek/jambor-armin-quartet-2508",
  "https://www.facebook.com/people/Jazz-PArt/100084734805068/", 
  "https://www.jazzland.at",
  "https://www.musikwerkstattwels.at", 
  "https://www.lepirate-rosenheim.de",
  "https://www.zwe.cc", 
  "https://tribuene.at/?page_id=10", 
  "https://www.cafe-traxlmayr.at/konzerte/",
  "https://www.jazz-im-saegewerk.org/veranstaltungen",
  "https://www.jazzclub-abensberg.de/index.php/termine",
  "https://pasinger-fabrik.de/programm/",
  "https://z87.de",
  "https://jazzclublindau.de",
  "https://jazzhram.si",
  "https://www.kereszturyvmk.hu/vhk/jazz-szerda",
  "https://www.tubes-music.at/de/",
  "https://zehnerhaus-badradkersburg.at/veranstaltungskalender/",
  "http://www.hobiraum.at/events1/"

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

