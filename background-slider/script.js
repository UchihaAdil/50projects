const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.querySelector('.arrow__left')
const rightBtn = document.querySelector('.arrow__right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++
  
  if(activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBackground()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--
  
  if(activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBackground()
  setActiveSlide()
})

setBackground()

function setBackground() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach(slide => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}