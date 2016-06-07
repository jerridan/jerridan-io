// set min-height of home section to full window height
$('#home').css('min-height', function () {
  return $(window).height();
});

// open/close mobile menu
if ($(window).width() < 640) {
  $('#menu-icon').on('touchend', function () {
    $('#main-menu').toggleClass('open');
  });
  $('#main-menu li a').on('touchend', function (evt) {
    evt.preventDefault();
    $('#main-menu').toggleClass('open');
    var anchor = $(this).attr('href');
    $('html, body').animate({scrollTop: $(anchor).position().top}, 500);
  });
} else {
  $('#main-menu li a').on('touchend click', function (evt) {
    evt.preventDefault();
    var anchor = $(this).attr('href');
    if (anchor === '#skills') {
      if ($('#skills-contact').height() <= $(window).height()) {
        $('html, body').animate({scrollTop: $(document).height() - $(window).height() - 20}, 500);
      } else {
        $('html, body').animate({scrollTop: $(anchor).position().top}, 500);
      }
    } else {
      $('html, body').animate({scrollTop: $(anchor).position().top}, 500);
    }
  });
}

// highlight menu based on page navigation
var nav_boundary_amount = $(window).height() / 3;
$(document).scroll(function () {
  if ($(window).scrollTop() === ($(document).height() - $(window).height())) {
    $('section').each(function () {
      $('nav ul li a[href="#' + $(this).attr('id') + '"]').removeClass('active');
    });
    $('nav ul li a[href="#contact"]').addClass('active');
  } else {
    $('section').each(function () {
      if ($(window).scrollTop() >= ($(this).position().top - nav_boundary_amount) &&
        $(window).scrollTop() < ($(this).position().top + $(this).height() - nav_boundary_amount)) {
        $('nav ul li a[href="#' + $(this).attr('id') + '"]').addClass('active');
      } else {
        $('nav ul li a[href="#' + $(this).attr('id') + '"]').removeClass('active');
      }
    });
  }

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
