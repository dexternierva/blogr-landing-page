const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const parentLink = document.querySelectorAll('.parentLink');

function changeImage() {
	if (hamburger.src.match("images/icon-hamburger.svg")) {
		hamburger.src = "images/icon-close.svg"
	} else {
		hamburger.src="images/icon-hamburger.svg"
	}
}

hamburger.addEventListener('click', () => {
	nav.classList.toggle('navActive')
	changeImage();
})

parentLink.forEach((link) => {
	let submenu = link.nextElementSibling;

	link.addEventListener('click', (evt) => {
		evt.preventDefault();
		submenu.classList.toggle('navSubmenuActive');
	})
})
