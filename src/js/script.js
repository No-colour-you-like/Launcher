//Body delay opacity

setTimeout(function() {
  
  document.querySelector('.body').classList.add('body-visible');

  setTimeout(function() {
    document.querySelector('.body').classList.remove('body-hide');
    document.querySelector('.body').classList.remove('body-visible')
  }, 2000);

}, 200);



// Hamburger menu 

const hamburger = document.querySelector('.hamburger'), 
  headerNav = document.querySelector('.header__nav'),
  mainSlider = document.querySelector('.main__slider'),
  companyBlock = document.querySelectorAll('.company__block');

  
hamburger.addEventListener('click', () => {

  headerNav.classList.toggle('nav-anim');
  hamburger.classList.toggle('hamburger-anim');

  sliderPrev.classList.toggle('display-none');
  sliderNext.classList.toggle('display-none');

  mainSlider.removeAttribute('style');
  offset = 0;
   
  if (window.innerWidth > '992') {
    if (!mainSlider.classList.contains('hide-images-anim')) {
      mainSlider.classList.remove('open-images-anim');
      mainSlider.classList.add('hide-images-anim');
    } else if (mainSlider.classList.contains('hide-images-anim')) {
      mainSlider.classList.remove('hide-images-anim');
      mainSlider.classList.add('open-images-anim');
    }
  }

});

// Main slider 

const slides = document.querySelectorAll('.slider__slide'), 
  sliderPrev = document.querySelector('.slider-prev'), 
  sliderNext = document.querySelector('.slider-next'),
  sliderWrapper = document.querySelector('.main__wrapper'),
  width = window.getComputedStyle(sliderWrapper).width;

let offset = 0;


slides.forEach(slide => {
  if (window.innerWidth <= '992') {
    slide.style.minWidth = (width.slice(0, width.length - 2) * 2) + 'px';
  } else {
    slide.style.width = width;
  }
})

sliderNext.addEventListener('click', () => {

  if (window.innerWidth <= '992') {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1) * 3) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }
  } else {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2) / 2;
    }
  }

  mainSlider.style.transform = `translateX(-${offset}px)`;
});

sliderPrev.addEventListener('click', () => {

  if (window.innerWidth <= '992') {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1) * 3;
    } else {
      offset -= +width.slice(0, width.length - 2);
    }
  } else {
    if (offset == 0) {
    offset = +width.slice(0, width.length - 2) * (slides.length - 1);
  } else {
    offset -= +width.slice(0, width.length - 2) / 2;
  }
  }

  mainSlider.style.transform = `translateX(-${offset}px)`;

});

