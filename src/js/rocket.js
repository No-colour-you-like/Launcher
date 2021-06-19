'use strict';

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

      if (rocketMains[1].classList.contains('rocket-main-visible')) {

        const rocketTextLeft = document.querySelector('.rocket-about__text-left'),
          rocketTextRight = document.querySelector('.rocket-about__text-right');

        rocketTextLeft.classList.add('text-left-anim', 'opacity')        

        setTimeout(function() {
          rocketTextRight.classList.add('text-right-anim', 'opacity');
        }, 3000);

      } 
    });
  });
});
