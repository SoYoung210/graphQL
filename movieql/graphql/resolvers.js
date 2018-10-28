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
    ///_는 파라미터 이름.
    movies: (_, { limit, rating }) => getMovies(limit, rating)
  }
}

export default resolvers
