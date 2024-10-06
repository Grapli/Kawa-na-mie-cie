const mobileMenu = document.querySelector('.nav-mobile__menu')
const navMobileButton = document.querySelector('.nav-mobile__hamburger')
const allNavItems = document.querySelectorAll('.nav-mobile__menu__item')

const handleNav = () => {
	mobileMenu.classList.toggle('nav-mobile__menu--active')
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			mobileMenu.classList.remove('nav-mobile__menu--active')
		})
	})
}

navMobileButton.addEventListener('click', handleNav)
