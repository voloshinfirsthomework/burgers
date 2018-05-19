const menuList = document.querySelector('.header__menu-list');
const gmBtn = document.querySelector('.header__gamburger-menu');
const hidden = document.querySelector('.gm');
var wraper = document.querySelector('.wraper');
const close = document.querySelector('.gm__close');
var footer = document.querySelector('.footer');

gmBtn.addEventListener('click', function(){
  hidden.style.height = '100%';
  wraper.style.height = '100%';
  footer.style.height = '0';
  footer.style.overflow = 'hidden';

  close.addEventListener('click', function(){
    hidden.style.height = '0';
    wraper.style.height = 'auto';
    footer.style.height = 'auto';
    footer.style.overflow = 'visible';
  });
});