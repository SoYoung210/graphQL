import { getMovies, getById, addMovie, deleteMovie } from "../db"
/*
const soyoung = {
  name: "Soyoung",
  age: 23,
  gender: "female"
}*/
const resolvers = {
  Query: {
    //name: () => "soyoung"
    movies: () => getMovies()
  }
}

export default resolvers
