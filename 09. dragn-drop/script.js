const empties = document.querySelectorAll('.empty')
const fill = document.querySelector('.fill')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

empties.forEach(empty => {
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragoenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', dragNDrop)
})

function dragStart() {
  this.className += " hold"
  setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
  this.className = 'fill'
}

function dragOver(e) {
  e.preventDefault()
}

function dragEnter(e) {
  e.preventDefault()
  this.className += ' hovered'
}

function dragLeave() {
  this.className = 'empty'
}

function dragNDrop() {
  this.className = 'empty'
  this.append(fill)
}