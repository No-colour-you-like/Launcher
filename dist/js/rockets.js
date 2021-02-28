const hamburger = document.querySelector('.hamburger'), 
  headerNav = document.querySelector('.header__nav');

hamburger.addEventListener('click', () => {

  headerNav.classList.toggle('nav-anim');
  hamburger.classList.toggle('hamburger-anim');

})

// Rocket slider 

const slides = document.querySelectorAll('.rocket-block'),
  mainSlider = document.querySelector('.rockets__slider'),
  sliderPrev = document.querySelector('.rockets__prev-btn'),
  sliderNext = document.querySelector('.rockets__next-btn'),
  sliderWrapper = document.querySelector('.rockets__wrapper'),
  width = window.getComputedStyle(sliderWrapper).width; 

let offset = 0;

slides.forEach(slide => {
  slide.style.width = width;
})


sliderNext.addEventListener('click', () => {
  if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
    offset = 0;
  } else {
    offset += +width.slice(0, width.length - 2)
  }
  
  mainSlider.style.transform = `translateX(-${offset}px)`;
});

sliderPrev.addEventListener('click', () => {
  if (offset == 0) {
    offset = +width.slice(0, width.length - 2) * (slides.length - 1);
  } else {
    offset -= +width.slice(0, width.length - 2);
  }
  
  mainSlider.style.transform = `translateX(-${offset}px)`;

});