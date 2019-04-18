import axios from 'axios'
import token from '../../settings'

export default function getData(query, useData) {
  const instance = axios.create({
    headers: {
      Authorization: `bearer ${token}`
    }
  })
  instance
    .post('https://api.github.com/graphql', { query: query })
    .then(response => {
      useData(response.data)
    })
    .catch(error => {
      console.log(error)
    })
}
