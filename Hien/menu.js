var app = angular.module("myApp", []);
app.controller("ctrlAerobic", function ($scope) {
  //   ------------
  // -----------------------------------------------------------------
});

app.controller("HeaderFooter", function ($scope) {
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 30) {
        $(".nav-bar").addClass("fixed-header");
        $("header .logo").addClass("headerLogoTransition");
        $(".logo").css("display", "none");
        $(".logoAdd").css("display", "block");
        $(".menu-icon").css("top", "-85px");
      } else {
        $(".nav-bar").removeClass("fixed-header");
        $(".logoAdd").css("display", "none");
        $("header .logo").removeClass("headerLogoTransition");
        $(".logo").css("display", "block");
        $(".menu-icon").css("top", "0px");
      }
    });
  });
  // =====================================
});

var app = (function () {
  var body = undefined;
  var menu = undefined;
  var menuItems = undefined;
  var init = function init() {
    body = document.querySelector("body");
    menu = document.querySelector(".menu-icon");
    menuItems = document.querySelectorAll(".nav__list-item");
    applyListeners();
  };
  var applyListeners = function applyListeners() {
    menu.addEventListener("click", function () {
      return toggleClass(body, "nav-active");
    });
  };
  var toggleClass = function toggleClass(element, stringClass) {
    if (element.classList.contains(stringClass))
      element.classList.remove(stringClass);
    else element.classList.add(stringClass);
  };
  init();
})();