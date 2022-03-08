var menubox = document.getElementById("menu-box");
var bars = document.getElementById("topnav-bars");
var xmark = document.getElementById("topnav-xmark");

function menuOpen() {
  if (menubox.className == "open") {
    menubox.className = "";
    bars.style.display = "";
    xmark.style.display = "";
  } else {
    menubox.className = "open";
    bars.style.display = "none";
    xmark.style.display = "inline-block";
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

function scrollToTop() {
  window.scrollTo(0, 0);
}

var guides_nav_box = document.getElementById("guides-nav-box");
var minus_icon = document.getElementById("minus-icon");
var plus_icon = document.getElementById("plus-icon");

function guidesOpen() {
  if (guides_nav_box.className == "open") {
    guides_nav_box.className = "";
    plus_icon.style.display = "";
    minus_icon.style.display = "none";
  } else {
    guides_nav_box.className = "open";
    plus_icon.style.display = "none";
    minus_icon.style.display = "block";
  }
}

var guide_1_pages = document.getElementById("guide-1-pages");
var guide_2_pages = document.getElementById("guide-2-pages");
var guide_3_pages = document.getElementById("guide-3-pages");
var guide_4_pages = document.getElementById("guide-4-pages");
var guide_5_pages = document.getElementById("guide-5-pages");
var guide_6_pages = document.getElementById("guide-6-pages");

function expandGuide1() {
  if (guide_1_pages.style.display == "") {
    guide_1_pages.style.display = "block";
  } else {
    guide_1_pages.style.display = "";
  }
}
function expandGuide2() {
  if (guide_2_pages.style.display == "") {
    guide_2_pages.style.display = "block";
  } else {
    guide_2_pages.style.display = "";
  }
}
function expandGuide3() {
  if (guide_3_pages.style.display == "") {
    guide_3_pages.style.display = "block";
  } else {
    guide_3_pages.style.display = "";
  }
}
function expandGuide4() {
  if (guide_4_pages.style.display == "") {
    guide_4_pages.style.display = "block";
  } else {
    guide_4_pages.style.display = "";
  }
}
function expandGuide5() {
  if (guide_5_pages.style.display == "") {
    guide_5_pages.style.display = "block";
  } else {
    guide_5_pages.style.display = "";
  }
}
function expandGuide6() {
  if (guide_6_pages.style.display == "") {
    guide_6_pages.style.display = "block";
  } else {
    guide_6_pages.style.display = "";
  }
}

var articlesBox = document.getElementById("article-pages-box");

function expandArticles() {
  if (articlesBox.style.display == "") {
    articlesBox.style.display = "block";
  } else {
    articlesBox.style.display = "";
  }
}
