import axios from 'axios'

export default function getData(query, useData) {
  const instance = axios.create({
    headers: {
      Authorization: 'bearer 50dd1a06d10098a978467c3a11949d6dfdf71c2f'
    }
  })
  instance
    .post('https://api.github.com/graphql', { query: query })
    .then(response => useData(response.data))
    .catch(error => {
      console.log(error)
    })
}
