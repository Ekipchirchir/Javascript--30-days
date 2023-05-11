//creating and empty array
const arr =Array() // array created using array constructor
console.log(arr) // [] 

let array =new Array() // array created using square brackects
console.log(array) // []


// creating  arrays with values
const numbers=[1,2,3,4,5,6,7,8,9]
console.log('Numbers:', numbers) //Numbers: [1, 2, 3, 4, 5,6, 7, 8, 9]
console.log('Number of numbers:', numbers.length) //Number of numbers: 9

const animals=['zebra','lion','giraffe','monkey','cheetah','leopard','mongoose']
console.log('Animals:', animals)//Animals: ['zebra','lion','giraffe','monkey','cheetah','leopard','mongoose']
console.log('Number of animals:', animals.length) //Number of animals: 7

const fruits =['banana','carrot','ovacado','pawpaw','watermelon','mango','orange','pineapple']
console.log('Fruits:', fruits) //Fruits: ['banana','carrot','ovacado','pawpaw','watermelon','mango','orange','pineapple']
console.log('Number of fruits:',fruits.length) //Number of fruits: 8

const names =['Brian','Emmanuel','John','Mercy','Collo','Kibet','Morgan','Chebet']
console.log('Names:', names) //Names: ['Brian','Emmanuel','John','Mercy','Collo','Kibet','Morgan','Chebet']
console.log('Number of names:', names.length) //Number of names: 8

const diffArrays =[
    'Emmanuel',
    22,
    true,
    {Fruits: ['banana','carrot','ovacado','pawpaw','watermelon','mango','orange','pineapple']},
    {Names: ['Brian','Emmanuel','John','Mercy','Collo','Kibet','Morgan','Chebet']}
] //array containing different data types.
console.log(diffArrays)

//creating an array using split
let abb ='Abbreviation'
let charInAbbreaviation =abb.split('')
console.log(charInAbbreaviation) //['A', 'b', 'b', 'r','e', 'v', 'i', 'a','t', 'i', 'o', 'n']

let py ='Python'
let charInPython =py.split('')
console.log(charInPython) //[ 'P', 'y', 't', 'h', 'o', 'n' ]

let alt ='Alternative'
let charInAlternative =alt.split('')
console.log(charInAlternative) //['A', 'l', 't', 'e','r', 'n', 'a', 't','i', 'v', 'e']

//Accessing array items using index
const birds=['eagle','ostrich','chicken','goose','turkey','peakcock','duck']
console.log(birds[5]) //peakcock
console.log(birds[0]) //eagle

const numValues =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(numValues[0])//1
console.log(numValues[7])//8
console.log(numValues[14])//15
console.log(numValues[4])//5

const colors =['black','brown','yellow','green','orange','purple','blue','white','grey']
let firstColor= colors[0]
console.log(firstColor) //black

let secondColor =colors[1]
console.log(secondColor) //brown

//getting last index of an item in an array.
let lastIndex= colors.length-1
lastColor =colors[lastIndex]
console.log(lastColor)//grey

let countries =['Kenya', 'Uganda', 'Namibia','Nigeria','Somali','Eriterea','Djibouti','Tanzania','Switzerland']
let lastCountryIndex =countries.length-1
lastCountry=countries[lastCountryIndex]
console.log(lastCountry) //Switzerland
console.log(countries[2])//Namibia
console.log(countries[7])//Tanzania

//changing or modifying an item in an array
countries[1]='Angola'
countries[6]='Congo' 
console.log(countries)

//creating static values with fill.
let arrayLetters= Array()
console.log(arrayLetters)
const eightYLetters =Array(8).fill('X')
console.log(eightYLetters) //['X', 'X', 'X','X', 'X', 'X','X', 'X']

const ten1Numbers =Array(10).fill(1)
console.log(ten1Numbers) //[1, 1, 1, 1, 1,1, 1, 1, 1, 1]

//Concatenating arrays using concat
const peopleNames =['Mark','Jane','Sam','Lizzie','Joe','Seba']
const otherPeopleNames =['Carlos','Dickson','Nickson','Jhonson','Wilson']
console.log(peopleNames.concat(otherPeopleNames))//['Mark','Jane','Sam','Lizzie','Joe','Seba','Carlos','Dickson','Nickson','Jhonson','Wilson']

const softDrinks=['cocacola','fanta','sprite','krest','water']
const hardDrinks =['Vodka','Whsikey','Spirits']
console.log(softDrinks.concat(hardDrinks))//['cocacola','fanta','sprite', 'krest','water','Vodka','Whsikey','Spirits']

//Getting array length
console.log(softDrinks.length) //5
console.log(otherPeopleNames.length) //5

//Getting index of an element in array
console.log(softDrinks[0]) //cocacola
console.log(softDrinks[1]) //fanta
console.log(softDrinks[2]) //sprite
console.log(softDrinks[3]) //krest
console.log(softDrinks[4]) //water

//check if an item exist in the list
const kenyanTowns=['Nairobi','Nakuru','Meru','Machakos','Elodret','Kericho','Kapsabet','Kisumu']
let indexKenyanTown =kenyanTowns.indexOf('Meru')
console.log(indexKenyanTown) //2

//Getting last index of an item in an array
//lastIndexOf
let cities =['Nairobi','Kampala','Lagos','Pretoria','Arusha','Kisumu','Bunjumbura']
console.log(cities.lastIndexOf(2))
console.log(cities.lastIndexOf(3))
console.log(cities.lastIndexOf(-1))
console.log(cities.lastIndexOf(4))

//includes
let marks =[30,50,60,70,80,90,10,20]
console.log(marks.includes(100)) //false
console.log(marks.includes(50)) //true
console.log(marks.includes(67)) //false
console.log(marks.includes(10)) //true

//checking array. To check if the data type is array.
const number=[23,242,57,89,90,70,65,43,2,3,4]
console.log(Array.isArray(number)) //true
const num7 =89
console.log(Array.isArray(num7)) //fasle

//converting arrays to string
let valueNum =[12,13,14,15,16,17,18,19]
console.log(valueNum.toString()) //12,13,14,15,16,17,18,19

let arrayNames= ['Manuu','Mike','Jenny','Joy','Maria']
console.log(arrayNames.toString()) //Manuu,Mike,Jenny,Joy,Maria

//Joining items in an array
let cereals =['barley',  'white',  'maize',  'rice',  'sorghum',  'millet',  'oat']
console.log(cereals.join())//barley,white,maize,rice,sorghum,millet,oat
console.log(cereals.join('')) //barleywhitemaizericesorghummilletoat
console.log(cereals.join(' ')) //barley white maize rice sorghum millet oat
console.log(cereals.join(', ')) //barley, white, maize, rice, sorghum, millet, oat
console.log(cereals.join(' # ')) //barley # white # maize # rice # sorghum # millet # oat

//slice array items
const numList=[1,2,3,4,5,6,7,8,9,9,10]
console.log(numList.slice()) //Returns all .[1, 2, 3, 4, 5,6, 7, 8, 9, 9, 10]
console.log(numList.slice(1)) //[2, 3, 4, 5,  6,7, 8, 9, 9, 10]
console.log(numList.slice(0)) //Returns all
console.log(numList.slice(1,10)) //Does not return the ending position. [2, 3, 4, 5, 6,7, 8, 9, 9]

const ages =[10,11,12,13,14,15,16,17,18]
ages.splice(0,1)
console.log(ages) //Removes the first item. [11, 12, 13, 14,15, 16, 17, 18]
ages.splice(3,3,18,19,20,21,22)
console.log(ages) //[11, 12, 13, 18, 19,20, 21, 22, 17, 18]

//adding item to an array using push
const lakes =['Nakuru','Victoria','Naivasha','Magadi','Baringo','Bogoria']
lakes.push('Elementaita')
console.log(lakes) //['Nakuru','Victoria','Naivasha','Magadi','Baringo','Bogoria','Elementaita']

const minutes =[30,60,70,80,90,87,86]
minutes.push(15)
console.log(minutes) //[30, 60, 70, 80,90, 87, 86, 15]

//Removing the end item using pop
const continents =['Africa', 'Asia', 'Europe', 'Oceania', 'Antartica', 'America']
continents.pop()
console.log(continents) //[ 'Africa', 'Asia', 'Europe', 'Oceania', 'Antartica' ]

//Removing an element from the beginning.
const schools =['Kapsabet','Mangu', 'Alliance', 'Kabianga','Starehe','Nairobi']
schools.shift()
console.log(schools)  //removes the first element .[ 'Mangu', 'Alliance', 'Kabianga', 'Starehe', 'Nairobi' ]

//Adding an element from the beginning
const courses =['Engineering','Medicine','Economics','Education']
courses.unshift('Law')
console.log(courses) //[ 'Law', 'Engineering', 'Medicine', 'Economics', 'Education' ]

//Reversing array order
const recourses=[ 'Law', 'Engineering', 'Medicine', 'Economics', 'Education' ]
recourses.reverse()
console.log(recourses) //[ 'Education', 'Economics', 'Medicine', 'Engineering', 'Law' ]

//sorting elements in an array
const legumes =['beans','greengrams','peas','groundnuts','peanuts','lentils']
legumes.sort()
console.log(legumes) //arranges items in order. [ 'beans', 'greengrams', 'groundnuts', 'lentils', 'peanuts', 'peas' ]

//Array of arrays.
const array1=[1,2,3,4,]
const array2 =[5,6,7,8,9]
const arrayOfArrays =[[1,2,3,4,], [5,6,7,8,9]]
console.log(arrayOfArrays[0]) //[ 1, 2, 3, 4 ]
console.log(arrayOfArrays[1]) //[5,6,7,8,9]