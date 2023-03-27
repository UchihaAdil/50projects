const app = document.querySelector('.app')
const addStickerBtn = app.querySelector('#addBtn')

getStickers().forEach(sticker => {
  const stickerEl = createSticker(sticker.id, sticker.content)
  app.insertBefore(stickerEl, addStickerBtn)
})

addStickerBtn.addEventListener('click', () => addSticker())

function getStickers(){
  return JSON.parse(localStorage.getItem('sticky-notes') || "[]" )
}

function saveStickers(stickers) {
  localStorage.setItem('sticky-notes', JSON.stringify(stickers))
}

function createSticker(id, content) {
  const element = document.createElement('textarea')

  element.classList.add('sticker')
  element.value = content 
  element.placeholder = 'Empty sticky note'

  element.addEventListener('change', () => updateSticker(id, element.value))

  element.addEventListener('dblclick', () => {
    const doDelete = confirm('Are you sure you wish to delete this sticky note?')

    if(doDelete) {
      deleteSticker(id, element)
    }
  })

  return element
}

function addSticker() {
  const stickers = getStickers()
  const stickyObj = {
    id: Math.floor(Math.random() * 100000),
    content: ""
  }

  const stickerEl = createSticker(stickyObj.id, stickyObj.content)
  app.insertBefore(stickerEl, addStickerBtn)

  stickers.push(stickyObj)
  saveStickers(stickers)
}

function updateSticker(id, newContent) {
  const stickers = getStickers()
  const targetSticker = stickers.filter(item => item.id == id)[0]

  targetSticker.content = newContent
  saveStickers(stickers)
}

function deleteSticker(id, el) {
  const stickers = getStickers().filter(item => item.id != id)

  saveStickers(stickers)
  app.removeChild(el)
}