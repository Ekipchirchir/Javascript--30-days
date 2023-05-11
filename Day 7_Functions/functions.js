//FUNCTION DECLARATION.
// Function without a parameter and return.
//function without a parameter, a functiion which squares a number.
function double(){
    let num =5
    let db = num * num
    console.log(db)
}
double() //output =25

function addition(){
    let a =30
    let b=40
    let addSum =a + b
    console.log(addSum)
}
addition() //Output =70 .A function has to be called by its name to be executed.


//Function returning value
function printFullName (){
    let firstName = 'Emmnauel'
    let lastName = 'Kipchirchir'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName()) //Emmanuel Kipchirchir

function sumValues(){
    let value1 =13
    let value2 =14
    let total =value1 + value2
    return total
}
console.log(sumValues()) //27

//Function with parameter.
function areaOfCircle(r){
    let area =Math.PI * r * r
    return area
}
console.log(areaOfCircle(15)) //706.8583470577034

function areaOfRectagle(x,y){
    let area=x * y
    return area
}
console.log(areaOfRectagle(12,15)) //180

//function with two parameters.
function sumTwoMarks (markOne , markTwo){
    let sum = markOne +markTwo
    console.log(sum)
    return sum
}
console.log(sumTwoMarks(50,70))

function printFullWord(firstWord,lastWord){
  
    return `${firstWord} ${lastWord}`

}
console.log(printFullWord('Python', 'Programming')) //Python Proramming.

function title(firstName, lastName){
    return`${firstName}${lastName}`
}
console.log(title('Information', 'Technology')) //Information Technology.

//Fucntion with many parameters.
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5, 6 ,7, 8];
  console.log(sumArrayValues(numbers)); //36

function totalArrayValue (arr){
    let sum =0;
    for (let m = 0; m < arr.length; m++) {
        sum =sum + arr[m];
    }
    return sum;
}
const value= [1, 2, 3, 4, 5, 6, 7, 8,9];
console.log(totalArrayValue(value)); // output =45

function calculateTotalCost(price, quantity, taxRate, shippingCost) {
    let subtotal = price * quantity;
    let tax = subtotal * taxRate;
    let totalCost = subtotal + tax + shippingCost;
    return totalCost;
}
const totalCost = calculateTotalCost(10, 2, 0.08, 5);
console.log(totalCost); // Output =26.6

//Fucntion with unlimited number of parameters. (In a regualr function.)
function totallAllNumbs (){
    let sum =0
    for (let y=0;y< arguments.length; y++){
        sum +=arguments[y]
    }
    return sum
}
console.log(totallAllNumbs(10, 20, 30, 40)) //output=100

function totalAmount(){
    let tot =0
    for(let x=0;x< arguments.length; x++){
        tot +=arguments[x]
    }
    return tot
}
console.log(totalAmount(100,200,300,400))// output =1000
console.log(totalAmount(13,67,98,90,98,99)) //output =465
console.log(totalAmount(30,70,80,80,90)) //output =350

//Unlimited number of parameters in arrow function.

const  allNums =(...args)=> {
    let  totalSum =0;
    for(let values of args){
        totalSum +=values;
    }
    return totalSum
}
console.log(allNums(1,2,3,4,5,))// Output =15
console.log(allNums(300,400,700,800,900)) //output =3100
console.log(allNums(50,80,90,80,90,90,90)) //output =570


//ANONYMOUS FUNCTION.
const anonymousFun= function(){
    console.log(
        'My name is anonymous and my value is stored in anonymousFun'
    )
}
anonymousFun(); //Output =My name is anonymous and my value is stored in anonymousFun

const myFunction =function(){
    console.log('To define a function and assign it to a varibale without giving the function an name')
}
myFunction(); //To define a function and assign it to a varibale without giving the function an name


//EXPRESSION FUNCTION.
const square =function(number){
    return number * number
}
console.log(square(6)) // output is 36


//Self Invoking Function.
let purpose =(function() {
    console.log("This is a self-invoking function.");
})(); //output = This is a self-invoking function.

let areaOfSquare =(function(l){
    return l * l
})(15)
console.log(areaOfSquare) //Output is 225
 
//ARROW FUNCTION.
const subtraction =n => {
    return n-n
}
console.log(subtraction(10)) //output is 0

const multiplication =y =>{
    return y*y
}
console.log(multiplication(12)) //output is 144

const squared = n => n * n  // idf we have one line in the code block, explicit return.
console.log(squared(18)) //output is 324

// To uppercase using arrow function.
const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
}
  
const countries = ['Austrilia', 'Singapore', 'China', 'Denmark', 'Russia']
console.log(changeToUpperCase(countries)) //[ 'AUSTRILIA', 'SINGAPORE', 'CHINA', 'DENMARK', 'RUSSIA' ]

const newList = list => {
    const newList1 =[]
    for(const values of list){
        newList1.push(values.toUpperCase())
    }
    return newList1
}
const names =['Maxwell','Manuu','Mike','Joy','Joe']
console.log(newList(names)) //[ 'MAXWELL', 'MANUU', 'MIKE', 'JOY', 'JOE' ]

const fullNanme =(firstName,secondName) =>`${firstName} ${secondName}`
console.log(fullNanme('Emmanuel', 'Kipchirchir')) //Output =Emmanuel Kipchirchir

//Functions with default parameters.
function greetings(name ='Emmanuel'){
    let message = `${name}, Welcome on board !`
    return message
}
console.log(greetings()) //Emmanuel, Welcome on board !
console.log(greetings('Collins')) //Collins, Welcome on board !

function fullName (firstName='Emmnauel', lastName ='Kipchirchir'){
    let space =' '
    let fullName=firstName + space + lastName
    return fullName
}
console.log(fullName()) //Emmnauel Kipchirchir

function fullTitle(firstTitle='Belive-it', lastTitle='Achive-it'){
    let spaceBetween =' '
    let fullTitle = firstTitle +spaceBetween +lastTitle
    return fullTitle
}
console.log(fullTitle()) //Belive-it Achive-it

function age(birthYear,currentYear=2023){
    let years= currentYear -birthYear
    return  years
}
console.log('Age:',age(2002)) //Age: 21

function weightOfBaby(mass,gravity =9.81){
    let weight =mass * gravity + 'N'
    return weight
}
console.log('Weight of Baby in Netwon:', weightOfBaby(40) ) //Weight of Baby in Netwon: 392.40000000000003N
console.log('Weight of Baby in Netwon:', weightOfBaby(40,1.62) ) //Weight of Baby in Netwon: 64.80000000000001N

//writing using arrow function.
const salutation =(reference ='Mr.Emmnauel') =>{
    let promptMessage =reference + `,Welcome aboard!`
    return promptMessage
}
console.log(salutation()) //Mr.Emmnauel,Welcome aboard!

const generateFullName = (firstName = 'Emmnauel', lastName = 'kipchirchir') => {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(generateFullName()) // Output : Emmnauel kipchirchir

const weightOfPeson =(mass,gravity=9.81)=> mass * gravity + 'N'
console.log(weightOfPeson(50)) // output =490.5N

const balance =(usedtAmount, intialAmount= 15000)=> intialAmount-usedtAmount
console.log('Balance is Ksh.', balance(1200)) //Balance is Ksh. 13800