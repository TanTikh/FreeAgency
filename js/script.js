$(document).ready(function () {
  $('.header__burger,.menu').click(function (event) {
    $('.header__burger,.menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

$(document).ready(function () {
  $('.getform-open').click(function (event) {
    $('.getform').addClass('active');
  });
  $('.getform-close').click(function (event) {
    $('.getform').removeClass('active');
  });
  $('.header-btn, .main-btn').click(function (event) {
    $('.popup').addClass('active');
    $('body').addClass('lock');
  });
  $('.popup-form__btn-c').click(function (event) {
    $('.popup').removeClass('active');
    $('body').removeClass('lock');
  });
});

