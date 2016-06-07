// set min-height of home section to full window height
var w = window,
  d = document,
  e = d.documentElement,
  g = d.getElementsByTagName('body')[0];

document.getElementById('home').style.minHeight = (w.innerHeight || e.clientHeight || g.clientHeight) + "px";
