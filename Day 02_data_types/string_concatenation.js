let firstName='Emmanuel'
let lastName='Kipchirchir'
let age = 22
let space =' '
let occupation= 'student'
let school = 'Technical University of Kenya'
let hobby ='hiking and watching'
let team ='Liverpool FC'

//concatenating using addition operator.
let fullName =firstName + ' ' + lastName 
console.log(fullName)

//Template literals concantenation.
let personInfoOne = fullName + space + 'is '+ age +space +'years old.'+ space+ 'He is a' +space+occupation +space+'at ' +space+school //injecting the data dynamically
console.log(personInfoOne)

//String interpolation method
let personInfoTwo =`${fullName}${space} is ${age}${space} years old.${space}He is a${space}${occupation}${space}at${space}${school}`
let personInfoThree =`${fullName}${space} is ${age}${space} years old.He likes ${space}${hobby}. He is a fan of${space}${team}` //String interpolation method
console.log(personInfoTwo)
console.log(personInfoThree)

//comapring strings using string interpolation method.
let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`) //false

//using backlash character at the end of every sentence to indicate that the string will continue the next line
const paragraph = "My name is Emmnauel Kipchirchir.\
I am a student at the Technical Univesirty of Kenya.\
I am taking information science.\
I live in Roysambu, Thika Road."
console.log(paragraph)
