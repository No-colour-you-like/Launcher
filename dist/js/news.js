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
  newsUppertitle = document.querySelectorAll('.news-block__uppertitle'),
  newsTitle = document.querySelectorAll('.news-block__title'),
  newsImg = document.querySelectorAll('.news-block__img'); 


newsText.forEach((item, i) => {

  let textTitleHeight = window.getComputedStyle(newsTitle[i]).height,
  textUppertitleHeight = window.getComputedStyle(newsUppertitle[i]).height;

  let smallTextHeight = +textTitleHeight.slice(0, textTitleHeight.length - 2) + +textUppertitleHeight.slice(0, textUppertitleHeight.length - 2) + 50 + 'px';

  newsText[i].style.maxHeight = smallTextHeight;

  item.addEventListener('mouseenter', () => {
    newsImg[i].classList.remove('blur-out');
    newsImg[i].classList.add('blur-in');
    item.style.maxHeight = '700px';
  });
  item.addEventListener('mouseleave', () => {
    newsImg[i].classList.add('blur-out');
    newsImg[i].classList.remove('blur-in');
    item.style.maxHeight = smallTextHeight;
  });
});

