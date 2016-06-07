// set min-height of home section to full window height
$('#home').css('min-height', function () {
  return $(window).height();
});

// open/close mobile menu
if ($(window).width() < 640) {
  $('#menu-icon').on('touchend', function () {
    $('#main-menu').toggleClass('open');
  });
}

// highlight menu based on page navigation
$(document).scroll(function () {
  $('nav ul li a[href="#' + $('section:hover').attr('id') + '"]').addClass('active').siblings('nav ul li a').removeClass('active');
});

// trigger modals for project details when card are clicked
$('.md-trigger').each(function () {
  $(this).on('touchend click', function () {
    var modal_id = '#' + $(this).attr('data-modal') + '-modal';
    $(modal_id).addClass('md-show');
  });
});

// close modals when close button or overlay is clicked
$('.md-close, .md-overlay').each(function () {
  $(this).on('touchend click', function () {
    $('.md-modal').each(function () {
      $(this).removeClass('md-show');
    });
  });
});
