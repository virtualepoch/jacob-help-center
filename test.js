var menubutton = document.getElementById("menu-button");
var menubox = document.getElementById("menu-box");

function menuOpen() {
  if (menubox.className == "open"){
      menubox.className = "";
  }else{
      menubox.className = "open";
  }
}
