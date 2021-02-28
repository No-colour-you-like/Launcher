const newsText = document.querySelectorAll('.news-block__text'), 
 newsImg = document.querySelector('.news-block__img'); 

newsText.forEach(item => {
  item.addEventListener('mouseenter', () => {
    newsImg.classList.remove('blur-out')
    newsImg.classList.add('blur-in')
  })
  item.addEventListener('mouseleave', () => {
    newsImg.classList.add('blur-out')
    newsImg.classList.remove('blur-in')
  })
})