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
  headerNav = document.querySelector('.header__nav');

hamburger.addEventListener('click', () => {

  headerNav.classList.toggle('nav-anim');
  hamburger.classList.toggle('hamburger-anim');
   
});

// Change height text on hover

const newsText = document.querySelectorAll('.news-block__text'), 
  newsUppertitle = document.querySelector('.news-block__uppertitle'),
  newsTitle = document.querySelector('.news-block__title'),
  newsImg = document.querySelector('.news-block__img'); 


  let textTitleHeight = window.getComputedStyle(newsTitle).height,
  textUppertitleHeight = window.getComputedStyle(newsUppertitle).height;



newsText.forEach((item, i) => {

  let smallTextHeight = +textTitleHeight.slice(0, textTitleHeight.length - 2) + +textUppertitleHeight.slice(0, textUppertitleHeight.length - 2) + 80 + 'px';

  newsText[i].style.height = smallTextHeight;

  item.addEventListener('mouseenter', () => {
    newsImg.classList.remove('blur-out');
    newsImg.classList.add('blur-in');
    item.style.height = 'auto';
  });
  item.addEventListener('mouseleave', () => {
    newsImg.classList.add('blur-out');
    newsImg.classList.remove('blur-in');
    item.style.height = smallTextHeight;
  });
});

