import { getMovies, getById } from "../db"
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
  }
}

export default resolvers
