$(function(){
  $('.review__slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 600,
  });

  new WOW().init();

// //---------------------------------------adaptive menu
// $('.menu__btn').on('click', function(){
//     $('.menu__list').slideToggle();
// });
// $('.header__btn-menu').on('click', function(){
//     $('.header__box').toggleClass('active');
//     $('body').toggleClass('lock');
// });

//---------------------------------------anim adaptive btn menu
  // $('.header__burger').click(function(event) {
  //   $(this).toggleClass('active');
  //   $('.menu__btn').toggleClass('active');
  //   if($(this).hasClass('active')){
  //     $('body').data('scroll',$(window).scrollTop());
  //   }
  //     $('body').toggleClass('lock');
  //   if(!$(this).hasClass('active')){
  //     $('body,html').scrollTop(parseInt($('body').data('scroll')));
  //   }
  // });

// //---------------------------------------add/remove class
//   $('.icon-th-list').on('click', function(){
//     $('.product__item').addClass('list');
//     $('.icon-th-list').addClass('active');
//     $('.icon-th-large').removeClass('active');
// });
// $('.icon-th-large').on('click', function(){
//     $('.product__item').removeClass('list');
//     $('.icon-th-large').addClass('active');
//     $('.icon-th-list').removeClass('active');
// });


// //---------------------------------------formstyler
//   $('input[type="file"], select').styler();


// //---------------------------------------maskedinput
$("#phone").mask("+7(999) 999-9999");
// //---------------------------------------animation
//   wow = new WOW({
//     boxClass: 'wow',
//     animateClass: 'animated',
//     offset: 0,
//     mobile: false,
//     live: true
//   })
//   wow.init();

// ---------------------------------------iakor scroll
//   $('a[href^="#"]').on('click', function (event) {
//     // отменяем стандартное действие
//     event.preventDefault();

//     var sc = $(this).attr("href"),
//       dn = $(sc).offset().top;
    
//     * sc - в переменную заносим информацию о том, к какому блоку надо перейти
//     * dn - определяем положение блока на странице
    

//     $('html, body').animate({ scrollTop: dn }, 1000);

//     /*
//     * 1000 скорость перехода в миллисекундах
//     */
//   });

});
