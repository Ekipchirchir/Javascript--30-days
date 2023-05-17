localStorage.setItem('firstName','Emmanuel')
localStorage.getItem('firstName')
const skills=['HTML','CSS','JavaScript','Python']
localStorage.setItem('skills',skills)
localStorage.getItem('skills') //'HTML,CSS,JavaScript,Python'

//storing strings in a localStorage
localStorage.setItem('firstName','Emmanuel')
console.log(localStorage) //Storage {firstName='Emmnauel': '', length: 3}

//storing number in a localStorage
localStorage.setItem('marks',70)
console.log(localStorage) //Storage {marks: '70', firstName='Emmnauel': '', length: 4}

//storing an array in a localStorage
const properties=['RAM','Storage','Processor','Generation']
localStorage.setItem('properties',properties)
console.log(localStorage)//Storage {marks: '70', properties: 'RAM,Storage,Processor,Generation', firstName='Emmnauel': '', length:5}

//Storing an object in a localStorage)
const student = {
  firstName: 'Emmanuel',
  age: 22,
  units: ['Data Communications', 'Networking', 'Programming', 'Algorithmns']
}

const studentInfo = JSON.stringify(student, undefined, 4)
localStorage.setItem('student', studentInfo)

const student1={
    firstName:'Jackatone',
    age:23,
    units: ['Data Communications', 'Networking', 'Programming', 'Algorithmns']
}
let firstName=localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let units = localStorage.getItem('units')
console.log(firstName, age, units) //'Emmanuel', '23', '['Data Communications', 'Networking', 'Programming', 'Algorithmns']'

let unit = localStorage.getItem('units')
let unitsObj = JSON.parse(units, undefined, 4)
console.log(unitsObj) //['Data Communications', 'Networking', 'Programming', 'Algorithmns']

//Clearing the localStorage
console.log(clear)