let firstName='Emmanuel' //string
let age = 22 //number
let height =4.6 //float
let job //undefined

//checking data types
console.log(typeof 'Emmanuel')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

//casting 
//string to int
let num ='15'
let numInt=parseInt(num)
console.log(numInt) // using parseInt

let word ='13'
let wordInt=Number(word)
console.log(wordInt) //using Number

let value ='15'
let valueInt= + value
console.log(valueInt) // using +sign

//string to float
let num1 ='16.90'
let num1Float =parseFloat(num1)
console.log(num1Float) // using parseFloat

let num2 ='17.08'
let num2Float= Number(num2)
console.log(num2Float) // using Number

let num3= '12.98'
let num3Float=+num3
console.log(num3Float) // using +sign

//float to in
let num4= 12.67
let num4Int =parseInt(num4)
console.log(num4Int) // 12
