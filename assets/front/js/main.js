(() => {
  /**
   * Query elements
   */
  const navbar = document.querySelector('.nav'),
    sticky = navbar.offsetTop,
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
  const navbarScroll = () => {
    if (window.pageYOffset > sticky && window.innerWidth >= width) {
      navbar.classList.add('nav_scroll');
    } else {
      navbar.classList.remove('nav_scroll');
    }
  };

  /**
   * Menu
   */
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('nav__menu_active');
  });

  /**
   * Removing active classes from burger and menu
   * if window is more than 600px
   * */
  window.addEventListener('resize', () => {
    if (window.innerWidth > width) {
      burger.classList.remove('burger_active');
      menu.classList.remove('nav__menu_active');
    }
  });

  /**
   * Submenu
   */
  window.addEventListener('click', (e) => {
    let target = e.target;

    do {
      if (target == submenu && window.innerWidth < width) {
        submenu.classList.toggle('has__submenu_active');
        return;
      }
      target = target.parentNode;
    } while (target);
    submenu.classList.remove('has__submenu_active');
  });

  // Search Modal
  for (const el of openEls) {
    el.addEventListener('click', function () {
      const modalId = this.dataset.open;
      document.getElementById(modalId).classList.add(isVisible);
    });
  }

  for (const el of closeEls) {
    el.addEventListener('click', function () {
      this.parentElement.parentElement.parentElement.classList.remove(
        isVisible
      );
    });
  }

  // If click outside of modal
  document.addEventListener('click', (e) => {
    if (e.target == document.querySelector('.nav__search__modal.is__visible')) {
      document
        .querySelector('.nav__search__modal.is__visible')
        .classList.remove(isVisible);
    }
  });

  document.addEventListener('keyup', (e) => {
    // If we press the ESC
    if (
      e.key == 'Escape' &&
      document.querySelector('.nav__search__modal.is__visible')
    ) {
      document
        .querySelector('.nav__search__modal.is__visible')
        .classList.remove(isVisible);
    }
  });

  // Init functions
  window.onscroll = navbarScroll;
})();
