let table = document.querySelector('table')

const headings = document.createElement('thead')
headings.innerHTML = ` 
  <tr>
    <th scope="col">ID</th>
    <th scope="col">Name</th>
    <th scope="col">User Name</th>
    <th scope="col">Email</th>
    <th scope="col">Phone</th>
    <th scope="col">Website</th>
    <th scope="col">Address</th>
    <th scope="col">Company</th>
  </tr>
`
table.appendChild(headings)

let tbody = document.createElement('tbody')
table.appendChild(tbody)

let usersList = []
const req = new XMLHttpRequest()

req.open('get', 'https://jsonplaceholder.typicode.com/users', true)

req.send()

req.onload = function () {
  if (req.status === 200) {
    try {
      const data = JSON.parse(req.responseText)
      // usersList = [...data]
      data.forEach((user) => {
        let row = document.createElement('tr')
        row.innerHTML = `
        <th scope="row">${user.id}</th>
        <td>${user.name} </td>
        <td>${user.username}</td>
        <td>
        <a href="mailto:${user.email}">${user.email}</a
        </td>
        <td>
        <a href="tel:${user.phone}">${user.phone}</a
        </td>
        <td>
        <a href="${user.website}">www.${user.website}</a
        </td>
        <td>${user.address.street}
        ${user.address.suite}
        <p>${user.address.city}
        ${user.address.zipcode.slice(0, 5)}</p>
        </td>
        <td>${user.company.name}
        <p>${user.company.catchPhrase}</p>
        ${user.company.bs}
        </td>
        `

        tbody.appendChild(row)
      })
    } catch (error) {
      throw new Error(' Error after a response:', error.name, error.message)
    }
  }
}

let posts = document.querySelector('.posts')

const req1 = new XMLHttpRequest()

req1.open('get', 'https://jsonplaceholder.typicode.com/posts', true)

req1.send()

req1.addEventListener('load', () => {
  if (req.status === 200) {
    try {
      const data1 = JSON.parse(req1.responseText)
      console.log(data1)
      data1.forEach((post) => {
        let li = document.createElement('li')
        li.classList.add('list-group-item')
        li.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      `
        posts.appendChild(li)
      })
    } catch (error) {
      throw new Error(' Error after a response:', error.name, error.message)
    }
  }
})

// Switch Theme
const themeBtn = document.querySelector('button')
themeBtn.addEventListener('click', () => {
  themeBtn.innerText =
    themeBtn.innerText === 'Dark Mode' ? 'Light Mode' : 'Dark Mode'
  table.classList.toggle('table-striped')
  table.classList.toggle('table-dark')
  table.classList.toggle('text-body')
  table.classList.toggle('text-warning')
  themeBtn.classList.toggle('btn-dark')
  themeBtn.classList.toggle('btn-outline-dark')
})
