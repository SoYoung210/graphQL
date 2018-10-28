import { people, getById } from "../db"
/*
const soyoung = {
  name: "Soyoung",
  age: 23,
  gender: "female"
}*/
const resolvers = {
  Query: {
    //name: () => "soyoung"
    people: () => people,
    //same , person : (_,arg.id) => getById(arg.id)
    person: (_, { id }) => getById(id)

    //person: () => soyoung
  }
}

export default resolvers
