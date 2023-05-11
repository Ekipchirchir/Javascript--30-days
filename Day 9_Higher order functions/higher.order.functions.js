//callback
const  shape =(y)=>{
    return y**2
}
function cube(shape,y){
    return shape(y)*y
}
console.log(cube(shape, 3)) //27 


//Returning functions.
const command = x =>{
    const proceed =y=>{
        const restart =z =>{
            return 2 * x +3 * y +z
        }
        return restart
    }
    return proceed
}
console.log(command(4)(5)(6)) //output :29

const value =[5,6,7,8,9]
const sumValue =arr =>{
    let addition =0
    value.forEach(function(number){
        addition+=number
    })
    return addition
}
console.log(sumValue(value)) //output =35

const array =[3,6,8,9,10]
const sumArray =arr =>{
    let arraySum =0
    array.forEach(function(value){
        arraySum+=value
    })
    return arraySum
}
console.log(sumArray(value)) //output =36

//setInterval 
function ringAgain(){
    console.log("ring again")
}
setInterval(ringAgain, 1000) //prints ring again in every 4 seconds.

//setTimeout
function callAgain(){
    console.log('Call Again')
}
setTimeout(callAgain,4000)

//Functional Programming.
// 1. forEach
const names = ['Mike', 'Kevoo', 'Jonte' ,'Manuu', 'Max']
names.forEach((element) => console.log(element.toUpperCase())) //MIKE KEVOO JONTE MANUU MAX

let totalSum =0
const array1 =[14,15,16,17,18]
array1.forEach(num => totalSum+=num)
console.log(totalSum) //total is 80

let sum2 =0
const array2 =[13,14,15,17,18]
array2.forEach(num => sum2 +=num)
console.log(sum2) //output is 77

// 2.Map
const numbers =[3,4,5,6,7]
const multiply =numbers.map(num => num *num)
console.log(multiply) //Output is [ 9, 16, 25, 36, 49 ]. All the names in the array have been squared.

const numbers1 =[5,8,9,7,6]
const squared = numbers1.map(num => num * num)
console.log(squared) //Output is [ 25, 64, 81, 49, 36 ]

const studentsNames =['Joy', 'Jade', 'Jane' ,'Janice', 'Jack']
studentsNames.map((names) => console.log(names.toUpperCase())) //JOY JADE JANE JANICE JACK


const list1 = ['mango', 'banana', 'ovacado', 'carrot', 'tomato', 'onion']
const list1Uppercase = list1.map((names)=>console.log(names.toUpperCase()))
console.log(list1Uppercase) //MANGO BANANA OVACADO CARROT TOMATO ONION

// 3. Filter
const nouns =['island', 'carrot', 'finland', 'iceland','england', 'relationship', 'situationship', 'correlationship', 'africa', 'america' ,'austrilia', 'india', 'nigeria']
const  nounsContainingShip= nouns.filter((noun)=> noun.includes('ship'))
console.log(nounsContainingShip) //[ 'relationship', 'situationship', 'correlationship' ]
const nounsContainingland =nouns.filter((noun)=> noun.includes('land'))
console.log(nounsContainingland) //[ 'island', 'finland', 'iceland', 'england' ]
const nounsEndingWithia = nouns.filter((nouns)=>nouns.endsWith('ia'))
console.log(nounsEndingWithia) //[ 'austrilia', 'india', 'nigeria' ]
const nounstWithSixLetters =nouns.filter((noun)=>noun.length===6)
console.log(nounstWithSixLetters) //[ 'island', 'carrot', 'africa' ]

// 4. Reduce
const prices =[300,350]
const loss =prices.reduce ((buyingPrice, sellingPrice) => buyingPrice - sellingPrice, 0 )
console.log(loss) // output is -650
const prices2 =[700,300]
const profit =prices2.reduce((sellingPrice, buyingPrice)=>sellingPrice-buyingPrice)
console.log(profit) // the profit is 400

//5. Every - checks if all statements are equal in one aspect  and retrns boolean.
const marks =[45,60,70,80,90,100]
const allAreNumbers =marks.every((mark)=> typeof marks ==='number')
console.log(allAreNumbers)//false

const bools = [false, false, false, true]
const areAllFalse = bools.every((f) => {
  return f === false
})

console.log(areAllFalse) //false

//6.Find - Return the first element which statisfies the condition.
const weights= [70,90,80,40,50,60]
const weight =weights.find((weight)=> weight<60)
console.log(weight) //40

const temps =[35,33,32,34,27,37]
const temp =temps.find((temp)=>temp>32)
console.log(temp) //35

const masses =[
    {name: 'Col', mass : 70},
    {name: 'Karl', mass :56},
    {name :'Kroos', mass:77},
    {name: 'Collo', mass :79},
    {name: 'Kate', mass :52},
    {name :'Dan', mass:71},
    {name: 'Cate', mass :73},
    {name: 'Kanl', mass :54},
    {name :'Kioo', mass:75},
]
const  mass=masses.find((user)=>{
    return user.mass
})
console.log(mass) //{ name: 'Col', mass: 70 }

//7. FindIndex.
const heights =[3,5,6,7,8,9]
const height =heights.findIndex((height)=>height<8)
console.log(height) //0
const height2 =heights.findIndex((height2)=>height2>6)
console.log(height2) //3

const animals =['cow','goat', 'sheep', 'cat', 'rabbit',' mouse']
const animal =animals.findIndex((animal) =>animal.length===5)
console.log(animal) //2 -sheep

//8. some
const electronics =['phone', 'charger', 55, 'television']
const allAreStrings =electronics.some((electronic)=> typeof electronic ==='string')
console.log(allAreStrings) //true

const positions =[1,2,3,4,5,6,7]
const allareNumbers = positions.some((position)=>typeof position === 'string')
console.log(allareNumbers) //false

//9.sort
//sorting string values
const students =['Joy','John','James','Will','Mike','Joe','Keen','Red']
console.log(students.sort()) //'James','Joe','John','Joy','Keen', 'Mike','Red','Will']

//sorting numeric values.
const numerics =[10, 8.9, 6, 7.9, 3,2]
numerics.sort(function(a,b){
    return a - b})
console.log(numerics) //[ 2, 3, 6, 7.9, 8.9, 10 ]

//sorting object arrays.
const massses =[
    {name: 'Col', mass : 70},
    {name: 'Karl', mass :56},
    {name :'Kroos', mass:77},
    {name: 'Collo', mass :79},
    {name: 'Kate', mass :52},
    {name :'Dan', mass:71},
    {name: 'Cate', mass :73},
    {name: 'Kanl', mass :54},
    {name :'Kioo', mass:75}
]
masses.sort((a,b)=>{
    if(a.mass < b.mass) return -1
    if(a.mass > b.mass) return 1
    return 0
})
console.log(masses) //[{ name: 'Kate', mass: 52 },{ name: 'Kanl', mass: 54 },{ name: 'Karl', mass: 56 },{ name: 'Col', mass: 70 },{ name: 'Dan', mass: 71 },{ name: 'Cate', mass: 73 },{ name: 'Kioo', mass: 75 },{ name: 'Kroos', mass: 77 },{ name: 'Collo', mass: 79 }]
//sorted in ascedning order.