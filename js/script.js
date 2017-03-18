"use srtict";

(function () {
  var navButton = document.querySelector(".page-header__menu-toggle");
  var navMenu = document.querySelector(".menu");
  var changeVisibility = function () {
    navButton.classList.toggle("page-header__menu-toggle--close");
    navMenu.classList.toggle("menu--close");
  };
  navButton.addEventListener("click", changeVisibility);

  var modal = document.querySelector(".modal");
  var btnOrder = document.querySelector(".best-offer__btn-order");
  var btnsAddCart = document.querySelectorAll('.catalog__add-cart');
  var showModal = function () {
    modal.classList.toggle("modal--show");
  };
  if (btnOrder && modal) {
    btnOrder.addEventListener("click", showModal);
  }
  if (btnsAddCart && modal) {
    modal.addEventListener("click", showModal);
    for (var i = 0; i < btnsAddCart.length; i++) {
      btnsAddCart[i].addEventListener("click", showModal);
    }
  }
})()
