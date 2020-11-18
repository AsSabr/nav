(() => {
	/**
	 * Query elements
	 */
	const navbar = document.querySelector('.nav'),
		sticky = navbar.offsetTop,
		width = 600,
		burger = document.querySelector('.burger'),
		menu = document.querySelector('.nav__menu'),
		submenu = document.querySelector('.has__submenu');

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

	// Search in navbar
	const searchOpen = document.querySelector('.nav__btn_search');
	const searchForm = document.querySelector('.nav__search__form');
	searchOpen.addEventListener('click', () => {
		searchOpen.classList.toggle('is_active');
		searchForm.classList.toggle('nav__search_active');
		// return false;
	});

	// Init functions
	window.onscroll = navbarScroll;
})();
