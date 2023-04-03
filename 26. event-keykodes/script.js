const insert = document.querySelector('.insert')

window.addEventListener('keydown', e => {
  insert.innerHTML = `
  <div class="keycode">
    ${e.key === ' ' ? 'Space' : e.key}
    <small>e.key</small>
  </div>
  <div class="keycode">
    ${e.keyCode}
    <small>event.keyCode</small>
  </div>
  <div class="keycode">
    ${e.code}
    <small>event.code</small>
  </div>`

})