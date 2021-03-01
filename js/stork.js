//Body delay opacity

setTimeout(function() {
  
  document.querySelector('.body').classList.add('body-visible');

  setTimeout(function() {
    document.querySelector('.body').classList.remove('body-hide');
    document.querySelector('.body').classList.remove('body-visible')
  }, 2000);

}, 200);

// Hamburger open

const hamburger = document.querySelector('.hamburger'), 
headerNav = document.querySelector('.header__nav'),
companyBlock = document.querySelectorAll('.company__block');

hamburger.addEventListener('click', () => {

  headerNav.classList.toggle('nav-anim');
  hamburger.classList.toggle('hamburger-anim');

});

// Change main 

const footerLinks = document.querySelectorAll('.rocket-footer__link'), 
  rocketMains = document.querySelectorAll('.rocket'),
  rocketBody = document.querySelector('.rocket__body');



  
footerLinks.forEach((link, i) => {

  link.addEventListener('click', () => {

    rocketMains.forEach(item => {
      item.classList.add('rocket-main-hide');
      rocketMains[i].classList.remove('rocket-main-hide');
      item.classList.remove('rocket-main-visible');
      rocketMains[i].classList.add('rocket-main-visible');

      if (rocketMains[0].classList.contains('rocket-main-hide')) {
        rocketBody.classList.remove('return-background')
        rocketBody.classList.add('delete-background')
      } else {
        rocketBody.classList.remove('delete-background')
        rocketBody.classList.add('return-background')
      }
    });
  });
});
