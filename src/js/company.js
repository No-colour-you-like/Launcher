//Body delay opacity

setTimeout(function() {
  
  document.querySelector('.body').classList.add('body-visible');

  setTimeout(function() {
    document.querySelector('.body').classList.remove('body-hide');
    document.querySelector('.body').classList.remove('body-visible')
  }, 2000);

}, 200);


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