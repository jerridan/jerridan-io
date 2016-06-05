// open/close mobile menu
if ($(window).width() < 640) {
  $('#menu-icon').bind('touchstart', function () {
    $('#main-menu').toggleClass('open');
  });
}

// highlight menu based on page navigation
$(document).scroll(function () {
  $('nav ul li a[href="#' + $('section:hover').attr('id') + '"]').addClass('active').siblings('nav a').removeClass('active');
});