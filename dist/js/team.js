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
  mainSlider = document.querySelector('.team__slider'),
  companyBlock = document.querySelectorAll('.company__block');

  
hamburger.addEventListener('click', () => {

  headerNav.classList.toggle('nav-anim');
  hamburger.classList.toggle('hamburger-anim');

  offset = 0;
   
});

// Slider 

const mainWrapper = document.querySelector('.team__main-wrapper');
  sliderPrev = document.querySelector('.slider-prev'),
  sliderNext = document.querySelector('.slider-next'),
  teamBlock = document.querySelectorAll('.team-block');
  width = window.getComputedStyle(mainWrapper).width;

let offset = 0;

mainSlider.style.width = 100 * teamBlock.length + '%';

teamBlock.forEach(item => {
  item.style.width = width;
});

sliderNext.addEventListener('click', () => {
  if (offset == +width.slice(0, width.length - 2) * (teamBlock.length - 1)) {
    offset = 0;
  } else { 
    offset += +width.slice(0, width.length - 2);
  }

  mainSlider.style.transform = `translateX(-${offset}px)`;

});

sliderPrev.addEventListener('click', () => {
  if (offset == 0) {
    offset = +width.slice(0, width.length - 2) * (teamBlock.length - 1);
  } else { 
    offset -= +width.slice(0, width.length - 2);
  }

  mainSlider.style.transform = `translateX(-${offset}px)`;

});


  
