var expandNav = document.querySelector("#expand-nav");
var contrNav = document.querySelector("#contr-nav");
var dropBar = document.querySelector(".expandedcontent");
var container = document.querySelector(".container");
var heroH1 = document.querySelector(".hero-heading");
var body = document.body;

// expandNav.addEventListener("mouseover", () => {
//   dropBar.style.display = "block";
//   dropBar.style.opacity = "1";
// });

// window.addEventListener("click", (event) => {
//   if (event.target);
// });

function openNav() {
  document.getElementById("mySidenav").style.height = "100%";
  document.getElementById("mySidenav").style.paddingTop = "60px";
  document.querySelector(".closebtn");
  expandNav.style.display = "none";
  contrNav.style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.height = "0px";
  document.getElementById("mySidenav").style.paddingTop = "0px";
  expandNav.style.display = "block";
  contrNav.style.display = "none";
}
