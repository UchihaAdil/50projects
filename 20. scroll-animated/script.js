const blocks = document.querySelectorAll('.block')

window.addEventListener('scroll', showBlocks)

showBlocks()

function showBlocks() {
  const triggerBottom = window.innerHeight / 5 * 4

  blocks.forEach(block => {
    const blockTop = block.getBoundingClientRect().top

    if (blockTop < triggerBottom) {
      block.classList.add('show')
    } else {
      block.classList.remove('show')
    }
  })
}