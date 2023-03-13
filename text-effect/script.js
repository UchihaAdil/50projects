const speedEl = document.querySelector('#speed')
const textEl = document.querySelector('#text')

const mainText = "We Like Programming!"
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
  textEl.innerHTML = mainText.slice(0, idx)
  idx++

  if(idx > mainText.length) {
    idx = 1
  }

  setTimeout(writeText, speed)
}

speedEl.addEventListener('input', e => speed = 300 / e.target.value )