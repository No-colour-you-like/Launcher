const hamburger = document.querySelector('.hamburger'), 
headerNav = document.querySelector('.header__nav'),
companyBlock = document.querySelectorAll('.company__block');

hamburger.addEventListener('click', () => {

  headerNav.classList.toggle('nav-anim');
  hamburger.classList.toggle('hamburger-anim');

  companyBlock.forEach(item => {
    item.classList.toggle('change-width')
  });
  
});

// Video play on hover

const devsBlock = document.querySelector('.company__devs'),
  devsVideo = document.querySelector('.company__devs-video');

devsBlock.addEventListener('mouseover', () => {
  devsVideo.play();
}); 

devsBlock.addEventListener('mouseout', () => {
  devsVideo.pause();
}); 