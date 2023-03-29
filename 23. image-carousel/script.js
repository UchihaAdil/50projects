const imgCont = document.querySelector('.img__container')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

const imgs = document.querySelectorAll('img')

let idx = 0

let interval = setInterval(run, 2000)

function run() {
  idx++
  changeImage()
}

function changeImage() {
  if(idx > imgs.length - 1) {
      idx = 0
  } else if(idx < 0) {
      idx = imgs.length - 1
  }

  imgCont.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 2000)
}

next.addEventListener('click', () => {
  idx++
  changeImage()
  resetInterval()
})

prev.addEventListener('click', () => {
  idx--
  changeImage()
  resetInterval()
})
