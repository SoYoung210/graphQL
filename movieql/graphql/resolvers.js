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
    movies: () => getMovies(),
    //same , person : (_,arg.id) => getById(arg.id)
    movie: (_, { id }) => getById(id)

    //person: () => soyoung
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
}

export default resolvers
