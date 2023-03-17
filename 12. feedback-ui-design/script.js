const feedback = document.querySelector('.feedback')
const ratingsContainer = document.querySelector('.feedback__ratings')
const ratings = document.querySelectorAll('.rating')
const submit = document.querySelector('button')
let selectedRating = 'Satisfied'

ratings.forEach(rating => {
  rating.addEventListener('click', (e) => {
    removeActive()
    rating.classList.add('active')
    selectedRating = e.target.innerHTML
  })
})

submit.addEventListener('click', () => {
  feedback.innerHTML = `
  <div class="thank">
    <p class="heart">❤</p>
    <h4 style="font-weight: 600">Thank You!</h4>
  </div>
  <h4 style="font-weight: 600">Feedback: ${selectedRating}</h4>
  <h4>We'll use your feedback to improve our customer support</h4>
  `
})


function removeActive() {
  ratings.forEach(rating => {
    rating.classList.remove('active')
  })
}