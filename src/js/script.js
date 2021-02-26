// Hamburger menu 

const hamburger = document.querySelector('.hamburger'), 
  headerNav = document.querySelector('.header__nav'),
  mainSlider = document.querySelector('.main__slider');

hamburger.addEventListener('click', () => {

  headerNav.classList.toggle('nav-anim');
  hamburger.classList.toggle('hamburger-anim');

  sliderPrev.classList.toggle('display-none');
  sliderNext.classList.toggle('display-none')

  if (!mainSlider.classList.contains('hide-images-anim')) {
    mainSlider.classList.remove('open-images-anim');
    mainSlider.classList.add('hide-images-anim');
  } else if (mainSlider.classList.contains('hide-images-anim')) {
    mainSlider.classList.remove('hide-images-anim');
    mainSlider.classList.add('open-images-anim');
  }
});

// Main slider 

const slides = document.querySelectorAll('.slider__slide'), 
  sliderPrev = document.querySelector('.slider-prev'), 
  sliderNext = document.querySelector('.slider-next'),
  sliderWrapper = document.querySelector('.main__wrapper'),
  sliderMain = document.querySelector('.main__slider'),
  width = window.getComputedStyle(sliderWrapper).width;

let offset = 0;

sliderMain.style.width = 100 * slides.length + '%';

slides.forEach(slide => {
    slide.style.width = width;
})

sliderNext.addEventListener('click', () => {
  if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
    offset = 0;
  } else {
    offset += +width.slice(0, width.length - 2)
  }

  sliderMain.style.transform = `translateX(-${offset}px)`;
});

sliderPrev.addEventListener('click', () => {
  if (offset == 0) {
    offset = +width.slice(0, width.length - 2) * (slides.length - 1);
  } else {
    offset -= +width.slice(0, width.length - 2);
  }
 
  sliderMain.style.transform = `translateX(-${offset}px)`;
});