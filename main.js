const sliderContainer = document.querySelector('.slider_container')
const sliderLeft = document.querySelector('.slider_left')
const sliderRight = document.querySelector('.slider_right')
const upButton = document.querySelector('.up_btn')
const downButton = document.querySelector('.down_btn')
const sliderLength = sliderRight.querySelectorAll('div').length

let activeIndex = 0

sliderLeft.style.top = `-${(sliderLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
  const slideHeight = sliderContainer.clientHeight
  if (direction === 'up') {
    activeIndex++
    if (activeIndex > sliderLength - 1) {
      activeIndex = 0
    }
  } else if (direction === 'down') {
    activeIndex--
    if (activeIndex < 0) {
      activeIndex = sliderLength - 1
    }
  }
  sliderRight.style.transform = `translateY(-${activeIndex * slideHeight}px)`
  sliderLeft.style.transform = `translateY(${activeIndex * slideHeight}px)`
}
