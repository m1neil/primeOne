// Burger menu ====================================================================================================

const burger = document.querySelector('.icon-menu'),
	menuMobile = document.querySelector('.header__menu-mobile');

if (burger) {
	burger.addEventListener('click', (e) => {
		burger.classList.toggle('menu-open');
		menuMobile.classList.toggle('menu-open');
		document.body.classList.toggle('lock');
	});
}

// Adaptive header ====================================================================================================

headerAdaptiveMobile();
window.addEventListener('resize', headerAdaptiveMobile);

function headerAdaptiveMobile() {
	const menuList = document.querySelectorAll('.header-bottom__menu'),
		menuLanguage = document.querySelector('.header-top__lang'),
		menuColumn = document.querySelectorAll('[data-header-menu]'),
		width = window.innerWidth;

	if (width <= 767) {
		menuList.forEach((menu) => {
			menuMobile.append(menu);
		});
		menuMobile.append(menuLanguage);
	} else {
		menuList.forEach((menu) => {
			if (menu.classList.contains('header-bottom__menu_fbjc-right')) {
				menuColumn[1].append(menu);
			} else {
				menuColumn[0].append(menu);
			}
		});

		document.querySelector('.header__top').prepend(menuLanguage);
	}
}
