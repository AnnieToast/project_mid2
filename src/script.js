// scripts.js
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-images img");
  const totalSlides = slides.length;

  // Loop back to the first or last slide
  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0) currentSlide = totalSlides - 1;
  else currentSlide = index;

  const offset = -currentSlide * 100; // Move slide by percentage
  document.querySelector(".carousel-images").style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Auto-slide every 5 seconds
setInterval(() => {
  nextSlide();
}, 5000);
