// mutaition : db의 상태가 변할 때 사용되는 것.
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
export const deleteMovie = id => {
  //id로 0번이 오면 0번에 해당하는 영화 지움. 0번이 아닌것만 filtered에 담고
  //movies 에 덮어써버림.
  const cleanedMovies = movies.filter(movie => movie.id !== id)
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies
    return true
  } else {
    return false
  }
}
export const addMovie = (name, score) => {
  const newMovie = {
    id: parseInt(`${movies.legnth}+1`),
    name,
    score
  }
  movies.push(newMovie)
  return newMovie
}
/*
export const getById = id => {
  const filteredPeople = people.filter(person => id === person.id)
  return filteredPeople[0]
}*/
