console.log|('Emmanuel is 23 years old') //Showing output on the browser
console.log('Emmanuel is',25,'years old') //Emmanuel is 25 years old
console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
) // log output green red and yellow text

//console.warn()
console.warn('This site is not secure!!')//This site is not secure!!
console.warn('Secure your security with a VPN!')//Secure your security with a VPN!

//console.error()
console.error('Page not found!!')//Page not found!!
console.error('Proceed at your risk!')//Proceed at your risk!
console.log('Someone logged into your device')//Someone logged into your device

//console.table()
const studentsNames=['Isaih','Emmanuel','Janet','Petero']
console.log(studentsNames)

const person={
    fullname:'Emmanuel Kipchirchir',
    age:30,
    residdence:'Roysambu',
}
console.log(person)//{ fullname: 'Emmanuel Kipchirchir', age: 30, residdence: 'Roysambu' }

const courses=[
    ['Emmanuel','Information Science'],
    ['Collins'],'Economic and statistics',
    ['Brian','Mechanical Engineering']

]
console.log(courses)//[
 /*[ 'Emmanuel', 'Information Science' ],
  [ 'Collins' ],
   'Economic and statistics',
  [ 'Brian', 'Mechanical Engineering' ]
]*/

const students=[
    {
        name:'Emmanuel',
        course:'Information Science',
        school:'Technical University of Kenya'
    },
    {
        name:'Collins',
        course:'Economics',
        school:'Kenyatta University'
    },
    {
        name:'Victor',
        course:'Mass communication',
        school:'Pan-African Chtsitian Univeristy'
    }
]
console.log(students)
/*[
 [ 'Emmanuel', 'Information Science' ],
 [ 'Collins' ],
  'Economic and statistics',
  [ 'Brian', 'Mechanical Engineering' ]
]
 [
   {
     name: 'Emmanuel',
     course: 'Information Science',
    school: 'Technical University of Kenya'
  },
  {
    name: 'Collins',
    course: 'Economics',
    school: 'Kenyatta University'
  },
   {
    name: 'Victor',
   course: 'Mass communication',
    school: 'Pan-African Chtsitian Univeristy'
  }
]*/


//console.time()
const categories=[
    ['Orange','Fruit'],
    ['Kenya','Country'],
    ['Bed','Furniture']
]
console.time('Regular for loop')
for(let i=0; i<categories.length;i++){
    console.log(categories[i][0],categories[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for(const[item,type] of categories){
    console.log(item,type)
}
console.timeEnd('for of loop')

console.time('forEach loop')
categories.forEach(([item,type])=>{
    console.log(item,type)
})
console.timeEnd('forEach loop')
/*Orange Fruit
Kenya Country
Bed Furniture
Regular for loop: 5.014ms
Orange Fruit
Kenya Country
Bed Furniture
for of loop: 5.771ms
Orange Fruit
Kenya Country
Bed Furniture
forEach loop: 16.54ms*/

//console.info()
console.info('Welcome to 30 days of javascript')//Welcome to 30 days of javascript
console.info('Its kind of a challenge')//Its kind of a challenge

//console.assert()
console.assert(5>3,'5 is greater than 3')
console.assert(5>3,'3 is not greater than 5')

for (let i=0;i<= 10;i+=1){
    let message=`${i} is not even`
    console.log('the # is ' + i)
    console.assert(i % 2===0,{number: i, message: message})
}
/*Assertion failed: [object Object]
Assertion failed: [object Object]
he # is 10*/

//console.group()
const people=['Mike', 'John','Leon','Angie']
const category=[
    ['Orange','Fruit'],
    ['Kenya','Country'],
    ['Bed','Furniture']
]
const studentsDetails=[
    {
        name:'Emmanuel',
        course:'Information Science',
        school:'Technical University of Kenya'
    },
    {
        name:'Collins',
        course:'Economics',
        school:'Kenyatta University'
    },
    {
        name:'Victor',
        course:'Mass communication',
        school:'Pan-African Chtsitian Univeristy'
    }
]
console.group('People')
console.log(people)
console.groupEnd()

console.log('Category')
console.log(category)
console.groupEnd()

console.log('Student Details')
console.log(studentsDetails)
console.groupEnd()
/*Student Details
[
  {
    name: 'Emmanuel',
    course: 'Information Science',
    school: 'Technical University of Kenya'
  },
  {
    name: 'Collins',
    course: 'Economics',
    school: 'Kenyatta University'
  },
  {
    name: 'Victor',
    course: 'Mass communication',
    school: 'Pan-African Chtsitian Univeristy'
  }
]*/

//console.count()
const fullName=()=>{
    console.count('My name is Emmanuel Kipchirchir')
}
fullName()
fullName()
fullName()
fullName()
/*My name is Emmanuel Kipchirchir: 1
My name is Emmanuel Kipchirchir: 2
My name is Emmanuel Kipchirchir: 3
My name is Emmanuel Kipchirchir: 4*/

//Console.clear()
//This console clears the whole browser.