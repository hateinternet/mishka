"use strict";

(function () {
  var burger = document.querySelector(".burger--nojs");
  var menu = document.querySelector(".menu--nojs");
  var userBlock = document.querySelector(".user-block--nojs");

  var modal = document.querySelector('.modal');
  var btnOrder = document.querySelector('.best-offer__btn-order');
  var btnsAddCart = document.querySelectorAll('.catalog__add-cart');

  var ESCAPE = 27;

  var isEscPress = function (evt) {
    return (evt.keyCode === ESCAPE);
  };

  var changeVisibility = function () {
    burger.classList.toggle("burger--close");
    menu.classList.toggle("menu--close");
    userBlock.classList.toggle("user-block--close");
  };

  var showModal = function () {
    modal.classList.add('modal--show');
    document.addEventListener('click', hideModal);
    document.addEventListener('keydown', hideModal);
  };

  var hideModal = function (evt) {
    if (evt.target.classList.contains('modal') || isEscPress(evt)) {
      modal.classList.remove('modal--show');
      document.removeEventListener('click', hideModal);
      document.removeEventListener('keydown', hideModal);
    }
  };

  burger.classList.remove("burger--nojs");
  menu.classList.remove("menu--nojs");
  userBlock.classList.remove("user-block--nojs");
  burger.addEventListener("click", changeVisibility);

  if (btnOrder && modal) {
    btnOrder.removeAttribute('href');
    btnOrder.addEventListener('click', showModal);
  }
  if (btnsAddCart && modal) {
    for (var i = 0; i < btnsAddCart.length; i++) {
      btnsAddCart[i].removeAttribute('href');
      btnsAddCart[i].addEventListener('click', showModal);
    }
  }
})();
