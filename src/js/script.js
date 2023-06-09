// Burger menu

const burger = document.querySelector('.icon-menu'),
	menuMobile = document.querySelector('.header__menu-mobile');

if (burger && menuMobile) {
	burger.addEventListener('click', e => {
		burger.classList.toggle('menu-open');
		menuMobile.classList.toggle('menu-open');
		document.body.classList.toggle('lock');
	});

	window.addEventListener('orientationchange', () => {
		if (burger.classList.contains('menu-open')) {
			burger.classList.remove('menu-open');
			menuMobile.classList.remove('menu-open');
			document.body.classList.remove('lock');
		}
	});
}

//====================================================================================================

// Adaptive header

headerAdaptiveMobile();
window.addEventListener('resize', headerAdaptiveMobile);

function headerAdaptiveMobile() {
	const menuList = document.querySelectorAll('.header-bottom__menu'),
		menuLanguage = document.querySelector('.header-top__lang'),
		menuColumn = document.querySelectorAll('[data-header-menu]'),
		width = window.innerWidth;

	if (!menuList.length || !menuColumn.length) return;

	if (width <= 767) {
		menuList.forEach(menu => {
			menuMobile.append(menu);
		});

		if (menuLanguage) {
			menuMobile.append(menuLanguage);
		}
	} else {
		menuList.forEach(menu => {
			if (menu.classList.contains('header-bottom__menu_fbjc-right')) {
				menuColumn[1].append(menu);
			} else {
				menuColumn[0].append(menu);
			}
		});

		document.querySelector('.header__top').prepend(menuLanguage);
	}
}
//====================================================================================================

// language tab

const languageContainer = document.querySelector('.header-top__lang'),
	langButtons = languageContainer.querySelectorAll('.header-top__item');

if (languageContainer && langButtons.length) {
	languageContainer.addEventListener('click', e => {
		const target = e.target;

		if (target.classList.contains('header-top__item')) {
			langButtons.forEach(item => item.classList.remove('active'));
			target.classList.add('active');
		}
	});
}

//====================================================================================================

// placeholder for input
const inputs = document.querySelectorAll('.input');

if (inputs.length) {
	inputs.forEach(input => {
		addPlaceholder(input);
		input.addEventListener('focus', () => {
			input.placeholder = '';
		});
		input.addEventListener('blur', () => {
			addPlaceholder(input);
		});
	});
}

function addPlaceholder(input) {
	if (input.dataset.value) {
		input.placeholder = input.dataset.value;
	}
}

//====================================================================================================

// goto links
const linksGoto = document.querySelectorAll('[data-goto]');

if (linksGoto.length) {
	linksGoto.forEach(link => {
		link.addEventListener('click', e => {
			if (e.target) {
				e.preventDefault();
			}

			const target = e.target;

			if (target.dataset.goto && document.querySelector(target.dataset.goto)) {
				const block = document.querySelector(target.dataset.goto),
					distance = block.getBoundingClientRect().top + scrollY;

				window.scrollTo({
					top: distance,
					behavior: 'smooth',
				});
			}
		});
	});
}

//====================================================================================================
