const open = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');
const cover = document.querySelector('.cover');
const previous = document.querySelector('.arrows > *:first-child');
const next = document.querySelector('.arrows > *:nth-child(2)');
const slider = document.querySelector('.hero-top');
const arrows = document.querySelectorAll('.arrows > *');

open.addEventListener('click', () => {
	let isOpen = nav.getAttribute('data-open');
	console.log('$$: ', isOpen);
	if (isOpen === 'false') {
		nav.setAttribute('data-open', true);
		open.setAttribute('aria-expanded', true);
		cover.setAttribute('data-cover', true);
	} else {
		nav.setAttribute('data-open', false);
		open.setAttribute('aria-expanded', false);
		cover.setAttribute('data-cover', false);
	}
});

// console.log(arrows);

arrows.forEach((arrow) => {
	arrow.addEventListener('click', () => {
		const offset = arrow.dataset.button === 'next' ? 1 : -1;
		const slides = document.querySelector('[data-slides]');
		const textSlides = document.querySelector('[data-text-slides]');
		const activeSlide = slides.querySelector('[data-active]');
		const activeTextSlide = textSlides.querySelector('[data-text-active]');

		let newIndex = [...slides.children].indexOf(activeSlide) + offset;

		if (newIndex < 0) newIndex = slides.children.length - 1;
		if (newIndex >= slides.children.length) newIndex = 0;

		slides.children[newIndex].dataset.active = true;
		textSlides.children[newIndex].dataset.textActive = true;

		delete activeSlide.dataset.active;
		delete activeTextSlide.dataset.textActive;
	});
});

// previous.addEventListener('click', () => {
// 	if (slide2 === 'false' && slide3 === 'false') {
// 		slider.setAttribute('data-slide1', true);
// 	} else {
// 		slider.setAttribute('data-slide1', false);
// 	}

// 	if (slide1 === 'false' && slide3 === 'false') {
// 		slider.setAttribute('data-slide2', true);
// 	} else {
// 		slider.setAttribute('data-slide2', false);
// 	}

// 	if (slide1 === 'false' && slide2 === 'false') {
// 		slider.setAttribute('data-slide3', true);
// 	} else {
// 		slider.setAttribute('data-slide3', false);
// 	}
// });

// next.addEventListener('click', () => {
// 	if (slide2 === 'false' && slide3 === 'false') {
// 		slider.setAttribute('data-slide1', true);
// 	} else {
// 		slider.setAttribute('data-slide1', false);
// 	}

// 	if (slide1 === 'false' && slide3 === 'false') {
// 		slider.setAttribute('data-slide2', true);
// 	} else {
// 		slider.setAttribute('data-slide2', false);
// 	}

// 	if (slide1 === 'false' && slide2 === 'false') {
// 		slider.setAttribute('data-slide3', true);
// 	} else {
// 		slider.setAttribute('data-slide3', false);
// 	}
// });
