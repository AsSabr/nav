"use strict";

(function () {
  /**
   * Query elements
   */
  var header = document.querySelector('.header'),
      sticky = header.offsetTop,
      width = 600,
      burger = document.querySelector('.burger'),
      menu = document.querySelector('.nav__menu'),
      submenu = document.querySelector('.has__submenu'),
      openEls = document.querySelectorAll('[data-open]'),
      closeEls = document.querySelectorAll('[data-close]'),
      isVisible = 'is__visible',
      isActive = 'is__active';
  /**
   * Adding scroll class to nav
   */

  var navbarScroll = function navbarScroll() {
    if (window.pageYOffset > sticky && window.innerWidth >= width) {
      header.classList.add('header_scroll');
    } else {
      header.classList.remove('header_scroll');
    }
  };
  /**
   * Menu
   */


  burger.addEventListener('click', function () {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('nav__menu_active');
  });
  /**
   * Removing active classes from burger and menu
   * if window is more than 600px
   * */

  window.addEventListener('resize', function () {
    if (window.innerWidth > width) {
      burger.classList.remove('burger_active');
      menu.classList.remove('nav__menu_active');
    }
  });
  /**
   * Submenu
   */

  window.addEventListener('click', function (e) {
    var target = e.target;

    do {
      if (target == submenu && window.innerWidth < width) {
        submenu.classList.toggle('has__submenu_active');
        return;
      }

      target = target.parentNode;
    } while (target);

    submenu.classList.remove('has__submenu_active');
  });
  /**
   * Search Modal
   */

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = openEls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var el = _step.value;
      el.addEventListener('click', function () {
        var modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = closeEls[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _el = _step2.value;

      _el.addEventListener('click', function () {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
      });
    } // If click outside of modal

  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  document.addEventListener('click', function (e) {
    if (e.target == document.querySelector('.nav__search__modal.is__visible')) {
      document.querySelector('.nav__search__modal.is__visible').classList.remove(isVisible);
    }
  });
  document.addEventListener('keyup', function (e) {
    // If we press the ESC
    if (e.key == 'Escape' && document.querySelector('.nav__search__modal.is__visible')) {
      document.querySelector('.nav__search__modal.is__visible').classList.remove(isVisible);
    }
  }); // Init functions

  window.onscroll = navbarScroll;
})();