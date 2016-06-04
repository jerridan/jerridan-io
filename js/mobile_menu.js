var w = window,
  d = document,
  e = d.documentElement,
  g = d.getElementsByTagName('body')[0],
  x = w.innerWidth || e.clientWidth || g.clientWidth,
  y = w.innerHeight || e.clientHeight || g.clientHeight;

var menu_icon = document.getElementById('menu-icon');
var menu = document.getElementById('main-menu');
menu_icon.addEventListener('touchstart', toggleMenu, false);

function toggleMenu() {
  if (x >= 640) {
    return;
  }
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
  } else {
    menu.classList.add('open');
  }
}