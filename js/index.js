let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// quote section
var quoteIndex = 1;
quoteShowSlides(quoteIndex);

function quotePlusSlides(n) {
  quoteShowSlides((quoteIndex += n));
}

function quoteCurrentSlide(n) {
  quoteShowSlides((quoteIndex = n));
}

function quoteShowSlides(n) {
  let i;
  let quoteSlides = document.getElementsByClassName("quote-slide");
  let dots = document.getElementsByClassName("quote-dot");
  if (n > quoteSlides.length) {
    quoteIndex = 1;
  }
  if (n < 1) {
    quoteIndex = quoteSlides.length;
  }
  for (i = 0; i < quoteSlides.length; i++) {
    quoteSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  quoteSlides[quoteIndex - 1].style.display = "block";
  dots[quoteIndex - 1].className += " active";
}
