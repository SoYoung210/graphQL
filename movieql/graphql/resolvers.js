const soyoung = {
  name: "Soyoung",
  age: 23,
  gender: "female"
}
const resolvers = {
  Query: {
    //name: () => "soyoung"
    person: () => soyoung
  }
}

export default resolvers
