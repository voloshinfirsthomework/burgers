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




$(document).ready(() => {

  $('.team__h3-name').on('click', function (e) {
    e.preventDefault();
    if ($(this).parent().hasClass('team__item-active')) {
      let iv = $(this).parent().removeClass('team__item-active')
      iv.find('.team__wrap').slideUp().css({
        'opacity': '0'
      })

    } else {
      if ($(this).parent().hasClass('team__item')) {
        let iv = $('.team__item-active').removeClass('team__item-active');
        iv.find('.team__wrap').slideUp().css({
          'opacity': '0'
        })

        let v = $(this).parent().addClass('team__item-active')
        v.find('.team__wrap').slideDown(500).css({
          'opacity': '1'
        })

      }
    }

  });

  $('.menu__link').on('click', function (e) {
    e.preventDefault();

    if ($(this).parent().next().hasClass('active')) {
      let deactivation = $(this).parent().next().removeClass('active');
      deactivation.animate({
        width: '0px'
      }, 50);

    } else {
      if ($('.menu__description').hasClass('active')) {
        let deactivation = $('.menu__description').removeClass('active');
        deactivation.animate({width: '0px'}, 50)
        let active = $(this).parent().next().addClass('active');
        active.animate({
        width: '540px',
        }, 500);
      } else {
        let active = $(this).parent().next().addClass('active');
        active.animate({
        width: '540px',
        
        }, 500);
        }
    }

  });

});