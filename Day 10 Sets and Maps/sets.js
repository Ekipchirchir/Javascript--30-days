//Creating an empty  set
const names =new Set()
console.log(names) //Set(0) {}
const values =new Set()
console.log(values) //Set(0) {}

//creating set from an array
const students=[
    'Emmanuel',
    'Kipchirchir',
    'Valary',
    'Emmanuel',
    ' Sam',
   ' Vivinne',
   ' Sam',
    ' Collo'
]
const students1 =new Set(students)
console.log(students1) //Set(6) {'Emmanuel','Kipchirchir','Valary',' Sam',' Vivinne',' Collo'}

const setOfStudents  =new Set (students)
for (const student of setOfStudents){
    console.log(student)
} //output : Emmanuel Kipchirchir Valary Sam Vivinne Collo

// Adding an item to a set
const fruits = new Set()
console.log(fruits.size) //0
fruits.add('Apple')
fruits.add('Carrot')
fruits.add('Mango')
fruits.add('Pumpkin')
fruits.add('Banana')
console.log(fruits.size)
console.log(fruits) //Set(5) { 'Apple', 'Carrot', 'Mango', 'Pumpkin', 'Banana' }
//using for loop
const countries =['Kenya', 'Somali', 'Tanzania', 'Russia', 'Uganda']
const setOfCountries =new Set (countries)
for (const country of countries){
    setOfCountries.add(country)
} // output :Set(5) { 'Apple', 'Carrot', 'Mango', 'Pumpkin', 'Banana' }

//Deleting an element in a set
const countries1 =['Kenya', 'Somali', 'Tanzania', 'Russia', 'Uganda']
console.log(countries1.pop())
console.log(countries1.size)

//checking if an element in a set
const countries2 =['Kenya', 'Somali', 'Tanzania', 'Russia', 'Uganda']
console.log(countries2.includes('Kenya')) //true
console.log(countries2.includes('sudan')) //false

//clearing the list
const countriesNames =['Kenya', 'Uganda', 'Tanzania','Burundi', 'Rwanda']
countriesNames.delete(countriesNames)
console.log(countriesNames.clear)


const nations=[
    'Kenya',
    'Uganda',
    'Tanzania',
    'Georgia',
    'Kenya',
    'Uganda',
    'Sudan',
    'Ethiopia'
]
const nationSet=new Set(nations)
console.log(nationSet) //Set(6) {'Kenya','Uganda','Tanzania','Georgia','Sudan','Ethiopia'}
console.log(nationSet.size) // 6

const counts =[]
const count ={}
for (const l of nationSet) {
    const filteredNation = nations.filter((nation) => nation === l)
    console.log(filteredNation) 
    counts.push({ nation: l, count: filteredNation.length })
}
console.log(counts)//[
// { nation: 'Kenya', count: 2 },
//  { nation: 'Uganda', count: 2 },
//  { nation: 'Tanzania', count: 1 },
// { nation: 'Georgia', count: 1 },
//  { nation: 'Sudan', count: 1 },
//  { nation: 'Ethiopia', count: 1 }
//]

//Use case of set. To count unique items in an array.
const array =[2,3,4,5,6,2,3,4,5,6]
const setOfArrays =new Set(array)
console.log(setOfArrays) //Set(5) { 2, 3, 4, 5, 6 }

//Union of sets
let a = [10, 11, 12, 13, 14]
let b = [12, 13, 14, 15]
let c = [...a, ...b]
let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C) //Set(6) { 10, 11, 12, 13, 14, 15 }

let x =[5,6,7,8,9,10,11,12]
let y =[10,11,12,13,14,15]
let z =[...x,...y]
let X =new Set(x)
let Y =new Set(y)
let Z =new Set(z)
console.log(Z) //Set(11) { 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 }

//Intersection of sets.
//To find intersection of sets, can be achieved through filter.
let q = [1, 2, 3, 4, 5]
let r = [3, 4, 5, 6]
let Q = new Set(q)
let R = new Set(r)
let s = q.filter((num) => R.has(num))
let S= new Set(s)
console.log(S) //Set(3) { 3, 4, 5 }

let k =[6,7,8,9,10,11,12]
let l =[9,10,11,12,13,14]
let K =new Set(k)
let L =new Set(l)
let m =k.filter((num)=> L.has(num))
let M = new Set(m)
console.log(M) //Set(4) { 9, 10, 11, 12 }

//Difference of sets
//can be achieved throug filter
let  d =[3,4,5,6,7,8]
let e =[5,6,7,8,9]
let D =new Set(d)
let E =new Set(e)
let f =d.filter((num)=> !E.has(num))
let F =new Set(f)
console.log(F) //Set(2) { 3, 4 }

