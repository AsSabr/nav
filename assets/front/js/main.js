const navbar = document.querySelector('.nav');
const sticky = navbar.offsetTop;
const width = 600;
const navbarScroll = () => {
  if (window.pageYOffset > sticky && window.innerWidth >= width) {
    navbar.classList.add('nav_scroll');
  } else {
    navbar.classList.remove('nav_scroll');
  }
};

window.onscroll = navbarScroll;

// Menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav__menu');
burger.addEventListener('click', () => {
  let menuClasses = [
    'nav__menu_active',
    'animate__animated',
    'animate__fadeIn',
  ];
  burger.classList.toggle('burger_active');
  menu.classList.toggle(menuClasses);
});

// Removing active classes for burger and menu if window is resized
window.addEventListener('resize', () => {
  if (window.innerWidth > width) {
    burger.classList.remove('burger_active');
    menu.classList.remove('nav__menu_active');
  }
});

// Submenu
window.addEventListener('click', (e) => {
  const submenu = document.querySelector('.has__submenu');
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

// Search in navbar
const searchOpen = document.querySelector('.nav__search');
searchOpen.addEventListener('click', () => {
  searchOpen.classList.toggle('nav__search_active');
  return false;
});

// searchClose.addEventListener('click', () => {
//   searchForm.classList.remove('open');
//   searchOpen.classList.remove('open');
//   return false;
// });
