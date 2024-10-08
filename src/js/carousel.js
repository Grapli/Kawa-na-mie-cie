const sliderBox = document.querySelector('.gallery__slider__box')
const images = document.querySelectorAll('.gallery__slider__img')
const carouselWidth = 100
const carouselSpeed = 3000
let index = 0

const handleCarousel = () => {
	index++
	changeImage()
}

let startCarousel = setInterval(handleCarousel, carouselSpeed)

const changeImage = () => {
	if (index > images.length - 1) {
		index = 0
	} else if (index < 0) {
		index = images.length - 1
	}

	sliderBox.style.transform = `translateX(${-index * carouselWidth}%)`
}

const handleRigthArrow = () => {
	index++
	resetInterval()
}

const handleLeftArrow = () => {
	index--
	resetInterval()
}

const resetInterval = () => {
	changeImage()
	clearInterval(startCarousel)
    startCarousel = setInterval(handleCarousel, carouselSpeed)
}

