"use strict";

(function () {
  var burger = document.querySelector(".burger--nojs");
  var menu = document.querySelector(".menu--nojs");
  var userBlock = document.querySelector(".user-block--nojs");

  burger.classList.remove("burger--nojs");
  menu.classList.remove("menu--nojs");
  userBlock.classList.remove("user-block--nojs");

  var changeVisibility = function () {
    burger.classList.toggle("burger--close");
    menu.classList.toggle("menu--close");
    userBlock.classList.toggle("user-block--close");
  };

  burger.addEventListener("click", changeVisibility);
})();
