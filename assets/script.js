const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
currentSlideIndex = 0;
let dotRecup = document.querySelector(".dots");
let newDot = "";

// Ajout des bullet par rapport au tableau créer
for (let i = 0; i < slides.length; i++ ) {
  if (i === 0) {
    newDot += `<div class="dot dot_selected"></div>`
  } else {
    newDot += `<div class="dot"> </div>`;
  } 
}
dotRecup.innerHTML = newDot;


let flechegauche = document.querySelector(".arrow_left");

let flechedroit = document.querySelector(".arrow_right");

flechegauche.addEventListener("click", function () {
  // Décrémentation de l'index pour passer à l'image précèdente
  currentSlideIndex = currentSlideIndex - 1;
  if (currentSlideIndex < 0) {
   currentSlideIndex =  slides.length -1;
  }

  let slidesImage = document.querySelector (".banner-img");
  slidesImage.src = "assets/images/slideshow/" + slides[currentSlideIndex].image;

 let slideTagLine = document.querySelector("#banner p");
 slideTagLine.innerHTML = "<p>" + slides[currentSlideIndex].tagLine + "</p>";


  let dots = document.querySelectorAll(".dot");
  //Mise à jour des bullet points
  dots.forEach((dot, i) => {
    if (i === currentSlideIndex) {
      dot.classList.add("dot_selected") // Ajout de la class dot_selectect si l'index = l'index actuel
    } else {
      dot.classList.remove("dot_selected"); // Sinon on efface la class
    }
  });

});

flechedroit.addEventListener("click", function () {

   // Incrémentation de l'index pour passer à l'image suivante
  currentSlideIndex = currentSlideIndex + 1;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0; }

  // Mise à jour de l'image
  let slidesImage = document.querySelector (".banner-img");
  slidesImage.src = "assets/images/slideshow/" + slides[currentSlideIndex].image;

  // Mise à jour de la tagline
  let slideTagLine = document.querySelector("#banner p");
  slideTagLine.innerHTML = "<p>" + slides[currentSlideIndex].tagLine + "</p>";

  // Récupération des dot
  let dots = document.querySelectorAll(".dot");

  //Mise à jour des bullet points
  dots.forEach((dot, i) => {
    if (i === currentSlideIndex) {
      dot.classList.add("dot_selected") // Ajout de la class dot_selectect si l'index = l'index actuel
    } else {
      dot.classList.remove("dot_selected"); // Sinon on efface la class
    }
  });
});






