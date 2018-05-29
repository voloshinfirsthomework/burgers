const menuList = document.querySelector('.header__menu-list');
const gmBtn = document.querySelector('.header__gamburger-menu');
const hidden = document.querySelector('.gm');
var wraper = document.querySelector('.wraper');
const close = document.querySelector('.gm__close');
var footer = document.querySelector('.footer');

gmBtn.addEventListener('click', function () {
  hidden.style.height = '100%';
  wraper.style.height = '100%';
  footer.style.height = '0';
  footer.style.display = 'none';

  close.addEventListener('click', function () {
    hidden.style.height = '0';
    wraper.style.height = 'auto';
    footer.style.height = 'auto';
    footer.style.display = 'flex';
  });
});

var teamItem = document.querySelector('.team__item');
var teamName = document.querySelector('.team__h3-name');
var $item = document.getElementsByClassName('team__item');
var $teamName = document.getElementsByClassName('team__h3-name');
qw = 'team__item-active';

for (i = 0; i < $item.length; i++) {
  teamName.addEventListener('click', function (e) {
    e.preventDefault();
    // $item[i].classList.remove('team__item');
    $item[i].classList.add(qw);
  });
};