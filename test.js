var menubox = document.getElementById("menu-box");

function menuOpen() {
  if (menubox.className == "open") {
    menubox.className = "";
  } else {
    menubox.className = "open";
  }
}

var menu_button = document.getElementById("menu-button");

function menuClick() {
  if (menu_button.style.transform == "scale(1)") {
    menu_button.style.transform = "scale(.5)";
  } else {
    menu_button.style.transform = "scale(1)";
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
var guides_nav_box = document.getElementById("guides-nav-box");

function guidesOpen() {
  if (guides_nav_box.className == "open") {
    guides_nav_box.className = "";
  } else {
    guides_nav_box.className = "open";
  }
}

function scrollToTop() {
  window.scrollTo(0, 0);
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
