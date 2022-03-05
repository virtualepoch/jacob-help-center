var menubutton = document.getElementById("menu-button");
var menubox = document.getElementById("menu-box");

function menuOpen() {
  if (menubox.className == "open") {
    menubox.className = "";
  } else {
    menubox.className = "open";
  }
}

window.onscroll = function () {
  scroll();
};

function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("to-top-button").style.bottom = "30px";
  } else {
    document.getElementById("to-top-button").style.bottom = "-100px";
  }
}
