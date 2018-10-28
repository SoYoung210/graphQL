// mutaition : db의 상태가 변할 때 사용되는 것.
import fetch from "node-fetch"
const API_URL = "https://yts.am/api/v2/list_movies.json"

export const getMovies = (limit, rating) => {
  return fetch(`${API_URL}`)
    .then(response => response.json())
    .then(json => json.data.movies)
}
