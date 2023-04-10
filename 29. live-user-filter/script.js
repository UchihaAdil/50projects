const search = document.getElementById('search')
const result = document.getElementById('result')
const listItems = []

getData()

search.addEventListener('input', e => filterData(e.target.value))

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50')

  const { results } = await res.json()
  
  result.innerHTML = ''

  results.forEach(user => {
    let li = document.createElement('li')

    listItems.push(li)

    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}"/>
      <div class="user__info">
        <h4>${user.name.first}, ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
      `

    result.appendChild(li)
  });
}

function filterData(searchTerm) {
  listItems.filter(item => {
    item.innerText
    .toLowerCase()
    .includes(searchTerm.toLowerCase())
    ? item.classList.remove('hide')
    : item.classList.add('hide')
  }) 
}