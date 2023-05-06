//Assignment operator. = sign is an assignment operator
let price ='affordable'
let process = 'undergoing'

//Arithmentic operators
let num1 =1
let num2=2
let sum =num1 + num2
let difference = num1 - num2
let multiplication = num1 * num2
let divison = num1 / num2
let modulo = num1 % num2
let rem = num1 % num2
let powerOf = num1**num2

console.log(sum,difference,multiplication,divison,modulo,rem,powerOf)

//calculating the area of a circle
const PI = 3.14
radius =150
let area = PI * radius * radius
console.log(area) //70650

//calculating the perimeter of a triangle
let height =100
let width =40
let perimeter = height*2 + width*2
console.log (perimeter) //280

// calculating the weight of an object
const gravity =9.81 // constant value of gravity
let mass = 65 //mass in kilograms
let weight= mass *gravity
console.log(mass*weight) //41447.25

//comparison operators
console.log(3 > 1)              // true, because 3 is greater than 2
console.log(3 >= 1)             // true, because 3 is greater than 2
console.log(3 < 1)              // false,  because 3 is greater than 2
console.log(1 < 3)              // true, because 2 is less than 3
console.log(1 <= 3)             // true, because 2 is less than 3
console.log(3 == 1)             // false, because 3 is not equal to 2
console.log(3 != 1)             // true, because 3 is not equal to 2
console.log(3 == '1')           // true, compare only value
console.log(3 === '1')          // false, compare both value and data type
console.log(3 !== '1')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'pycharm'.length)   // false

//logical operators

//&& ampersand 
const check = 4<5 && 5<6
console.log(check) //true
const value =5>4 && 8>7
console.log(value) //true
const num= 5<6 && 7<5
console.log(num) //false

// pipe
// || pipe - returns true when one of the operands is true
const num4 =5<6 || 5<7 
console.log(num4) //true
const num5 =5<1 || 10<4
console.log(num5) //false
const num6 =5<6 || 12<6
console.log(num6) //True. one of the operands is true

// negation ! - negates true to false and false to true
const num7=!(2>3)
console.log(num7) //true
const num8=!(3<4)
console.log(num8) //false

//Increament operators.
let count = 3
console.log(++count)  //4 
console.log(count)  //4 . Pre-increament

let countNum= 3
console.log(countNum++) //3
console.log(countNum) //4 . Post-increament

//Decreament operator
let value1= 5
console.log(--value1) //4
console.log(value1) //4 . Pre-decreament

let value2 =5
console.log(value2--) //5
console.log(value2) //4 . Post-decreament

//Ternary oporators
let isMonday =true
isMonday
? console.log('You should go to school')
: console.log('Stay at home')

isMonday=false
? console.log('You should go to school')
:console.log('Stay at home')

let number =7
number> 0
? console.log(`${number} is a positive number`)
: console.log(`${number}is a negative number`)

number =-7
number >0
?console.log(`${number} is a positive number`)
:console.log(`${number} is a negative number`)

