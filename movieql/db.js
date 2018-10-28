// mutaition : db의 상태가 변할 때 사용되는 것.
import fetch from "node-fetch"
const API_URL = "https://yts.am/api/v2/list_movies.json"

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL
  if (limit) {
    REQUEST_URL += `?limt=${limit}`
  }
  if (rating) {
    REQUEST_URL += `&minimum_rating=${rating}`
  }
  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
}
