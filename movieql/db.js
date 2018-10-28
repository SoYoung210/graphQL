export const people = [
  {
    id: 0,
    name: "Soyoung",
    age: 23,
    gender: "female"
  },
  {
    id: 1,
    name: "K",
    age: 21,
    gender: "male"
  },
  {
    id: 2,
    name: "Ryan",
    age: 19,
    gender: "female"
  },
  {
    id: 3,
    name: "Dhal",
    age: 20,
    gender: "female"
  }
]

export const getById = id => {
  const filteredPeople = people.filter(person => id === person.id)
  return filteredPeople[0]
}
