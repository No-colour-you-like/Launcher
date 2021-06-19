'use strict';

const newsText = document.querySelectorAll('.news-block__text'), 
  newsUppertitle = document.querySelectorAll('.news-block__uppertitle'),
  newsTitle = document.querySelectorAll('.news-block__title'),
  newsImg = document.querySelectorAll('.news-block__img'); 

// Change height text on hover
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

