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

var teamItem = document.getElementsByClassName('team__item');
var teamName = document.getElementsByClassName('team__h3-name');

for (i = 0; i < teamName.length; i++) {
  teamName[i].addEventListener('click', function (e) {
    e.preventDefault();
    if (!(this.parentNode.classList.contains('team__item-active'))) {
      for (j = 0; j < teamItem.length; j++) {
        if (teamItem[j].classList.contains('team__item-active')) {
          teamItem[j].classList.remove('team__item-active');
        }
      };
      this.parentNode.classList.add('team__item-active');
    };
  });
}


// for (i = 0; i < teamName.length; i++) {
//   teamName[i].addEventListener('click', function (e) {
//     e.preventDefault();
//     var dispNone = document.querySelector('.team__item-active');
//     var active = this.parentNode;

//     dispNone.classList.add('team__item');
//     active.classList.toggle('team__item-active');
//   });
// };