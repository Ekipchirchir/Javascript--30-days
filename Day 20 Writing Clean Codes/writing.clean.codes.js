//1.Variables
let firstName ='Emmanuel'
let lastName='Kipchirchir'
let country ='Kenya'
let city ='Eldoret'
let fullName='Emmanuel Kipchirhcir'

const PI=Math.PI
const bodyTemp=37
const waterBoillingPoint =100
const waterFreezingPoint =0

//2.Arrays
const names =['Emmanuel', 'Kipchirchir', 'Collo', 'Vikta', 'Johntez']
const numbers =[2, 3, 5.8, 9, 8, 7, 9.08, 8, 4, 9.7]
const  countries =['Kenya', 'Uganda', 'Rwanda', 'Burundi', 'Azerbaijan', 'Siria']
const languages =['English', 'Swahili', 'Finnish', 'French', 'Germany']
const units=['Computer Networking', 'Data Communications', 'Data Structures']
const fruits =['Mango', 'Orange', 'Pawpaw', 'Banana', 'Apple']
const cereals =['Maize', 'Rice', 'Wheat', 'Millet', 'Sourghum']

//3.Functions
//function which prints a full name of a person
const fullanme =(firstName, lastName)=>firstName + ' ' + lastName

//function which calculate the area of a square
const squareArea = (y) => y * y

//function which shows date and time
const displayDateTime = () =>{
    const now = new Date()
    const year= now.getFullYear()
    const month = now.getMonth() + 1
    const date = now.getDate()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    if (hours < 10) {
        hours = '0' + hours
      }
      if (minutes < 10) {
        minutes = '0' + minutes
      }
    const dateMonthYear = date + '.' + month + '.' + year
    const time = hours + ':' + minutes
    const fullTime = dateMonthYear + ' ' + time
    return fullTime
}

//a function which generates random hexa colors
const hexaColors = () =>{
    const string = '0122920eff'
    let hexa = '#'
    let index 
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * string.length)
        hexa += str[index]
}
return hexa
}

//loops
for (let i = 0; i < y ; i++){
    console.log()
}
//declaring an array variable
const students =['Emmanuel', 'Marko', 'John', 'Jack']

//iterating an array using regular for loop
let length=students.length;
for (let i =0; i <length; i++){
    console.log(names[i].toUpperCase())
}

//iterating an array using for of
for (const name of students){
    console.log(name.toUpperCase())
}

//iterating array using forEach
students.forEach((name)=> name.toUpperCase())

const user ={
    firstName: 'Col',
    lastName: 'Finn',
    age: 30,
    country: 'US',
    city: 'New York',
    hobbies: ['Swimming', 'Running', 'Hiking', 'Reading'],
    isMarried: true
}
for (const key in user){
    console.log(key)
}

//Objects - we declare object literal with const.
//Declaring object literal
const user1 ={
    firstName: 'Col',
    lastName: 'Finn',
    age: 30,
    country: 'US',
    city: 'New York',
    hobbies: ['Swimming', 'Running', 'Hiking', 'Reading'],
    isMarried: true
}
//Iterating through object keys
for (const key in user1){
    console.log(key, user1[key])
}

//conditional
//if else
let num = 5
if (num > 0) {
    console.log(`${num} is a posistive number`)
} else {
    console.log(`${num} is a negative number`)
} //5 is a postive number

//if else if else if else
let x = 0
if (x > 0) {
    console.log(`${x} is a positive number`)
} else if (x < 0){
    console.log(`${x} is a negetive number`)
} else if (x === 0){
    console.log(`${x} is a zero`)
} else {
    console.log(`${x} is not a number`)
}


// Switch More Examples
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
 case 'monday':
   console.log('Today is Monday')
   break
 case 'tuesday':
   console.log('Today is Tuesday')
   break
 case 'wednesday':
   console.log('Today is Wednesday')
   break
 case 'thursday':
   console.log('Today is Thursday')
   break
 case 'friday':
   console.log('Today is Friday')
   break
 case 'saturday':
   console.log('Today is Saturday')
   break
 case 'sunday':
   console.log('Today is Sunday')
   break
 default:
   console.log('It is not a week day.')
}

//ternary example
let isMonday =true
isMonday
  ? console.log('You nee to go to work')
  : console.log('No need to go to work, its a rest day')

//classes
class Student{
    constructor(firstName,lastName){
        console.log(this)//
        this.firstName = firstName
        this.lastName = lastName
    }
}