export let movies = [
  {
    id: 0,
    name: "StarWars",
    score: 1
  },
  {
    id: 1,
    name: "Avengers",
    score: 8
  },
  {
    id: 2,
    name: "LOL",
    score: 99
  },
  {
    id: 3,
    name: "WorldSeries",
    score: 100
  },
  {
    id: 4,
    name: "react",
    score: 3
  }
]
export const getMovies = () => movies
export const getById = id => {
  const filteredMovie = movies.filter(movie => id === movie.id)
  return filteredMovie[0]
}
export const deleteMove = id => {
  //id로 0번이 오면 1,2,3 에 해당하는 영화를 지우는 함수이다.
  const cleanedMovies = movies.filter(movie => movie.id !== id)
  if (movies.legnth > cleanedMovies.legnth) {
    movies = cleanedMovies
    return true
  } else {
    return false
  }
}
/*
export const getById = id => {
  const filteredPeople = people.filter(person => id === person.id)
  return filteredPeople[0]
}*/
