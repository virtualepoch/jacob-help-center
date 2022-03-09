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

var side_nav_container = document.getElementById("side-nav-container");
function showSideNav() {
  if (side_nav_container.style.left == "-1111px") {
    side_nav_container.style.left = "0";
    side_nav_container.style.top = "50px";
  } else {
    side_nav_container.style.left = "-1111px";
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

var guide_1_arrow = document.getElementById("guide-1-arrow");
var guide_2_arrow = document.getElementById("guide-2-arrow");
var guide_3_arrow = document.getElementById("guide-3-arrow");
var guide_4_arrow = document.getElementById("guide-4-arrow");
var guide_5_arrow = document.getElementById("guide-5-arrow");
var guide_6_arrow = document.getElementById("guide-6-arrow");
var side_nav_box = document.getElementById("side-nav-box");

function expandGuide1() {
  if (guide_1_pages.style.display == "") {
    guide_1_pages.style.display = "block";
    side_nav_box.style.transition = "1s";
    guide_1_arrow.style.transform = "rotate(90deg)";
    guide_1_arrow.style.transition = ".3s";
  } else {
    guide_1_pages.style.display = "";
    guide_1_arrow.style.transform = "none";
    side_nav_box.style.transition = "1s";
  }
}
function expandGuide2() {
  if (guide_2_pages.style.display == "") {
    guide_2_pages.style.display = "block";
    guide_2_arrow.style.transform = "rotate(90deg)";
    guide_2_arrow.style.transition = ".3s";
  } else {
    guide_2_pages.style.display = "";
    guide_2_arrow.style.transform = "none";
  }
}
function expandGuide3() {
  if (guide_3_pages.style.display == "") {
    guide_3_pages.style.display = "block";
    guide_3_arrow.style.transform = "rotate(90deg)";
    guide_3_arrow.style.transition = ".3s";
  } else {
    guide_3_pages.style.display = "";
    guide_3_arrow.style.transform = "none";
  }
}
function expandGuide4() {
  if (guide_4_pages.style.display == "") {
    guide_4_pages.style.display = "block";
    guide_4_arrow.style.transform = "rotate(90deg)";
    guide_4_arrow.style.transition = ".3s";
  } else {
    guide_4_pages.style.display = "";
    guide_4_arrow.style.transform = "none";
  }
}
function expandGuide5() {
  if (guide_5_pages.style.display == "") {
    guide_5_pages.style.display = "block";
    guide_5_arrow.style.transform = "rotate(90deg)";
    guide_5_arrow.style.transition = ".3s";
  } else {
    guide_5_pages.style.display = "";
    guide_5_arrow.style.transform = "none";
  }
}
function expandGuide6() {
  if (guide_6_pages.style.display == "") {
    guide_6_pages.style.display = "block";
    guide_6_arrow.style.transform = "rotate(90deg)";
    guide_6_arrow.style.transition = ".3s";
  } else {
    guide_6_pages.style.display = "";
    guide_6_arrow.style.transform = "none";
  }
}

var articlesBox = document.getElementById("article-pages-box");

function expandArticles() {
  if (articlesBox.style.display == "") {
    articlesBox.style.display = "block";
    right_arrow.style.transform = "rotate(90deg)";
    right_arrow.style.transition = ".3s";
  } else {
    articlesBox.style.display = "";
    right_arrow.style.transform = "none";
  }
}
