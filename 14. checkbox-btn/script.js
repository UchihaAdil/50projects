const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => {
  toggle.addEventListener('change', e => doTheTrick(e.target))
})

function doTheTrick(clkOne) {
  if(good.checked && cheap.checked && fast.checked) {
    if(good == clkOne) {
      fast.checked = false
    }
    if(cheap == clkOne) {
      good.checked = false
    }
    if(fast == clkOne) {
      cheap.checked = false
    }
  }
}