//Using ternary operators
let isHomeMatch =false
isHomeMatch
? console.log('Will Be A Win')
: console.log('Will Be A loss')

let isMarried =true
isMarried
?console.log('Should have children')
:console.log('Should not have children')

//using swith
let occupation = 'student'
switch (occupation){
    case 'student':
        console.log('You need a school-bag')
        break
    case 'lecturer':
        console.log('You might need a school-bag')
        break
    case 'parent':
        console.log('You do not need a school-bag, come freely')
        break
    default:
        console.log('You do not need a school-bag')
}

let animal ="cow"
switch (animal){
    case 'cow':
        console.log('It needs grass and hay')
        break
    case 'cat':
        console.log('It needs milk and meat')
        break
    case 'dog':
        console.log('It needs meat and cereals')
        break
    default:
        console.log('It needs water')
}

//using if statement
let num =6
if (num >0){
    console.log(`${num} is a positive number`)
}

let isStudent =true
if (isStudent){
    console.log('You need a school-bag')
}

//using if else 
let num1 =7
if (num1>0){
    console.log(`${num1} is a positive number`)
}
else{
    (`${num1} is a negative number`)
}

let isSunny =false
if (isSunny){
    console.log('You going out freely')
}
else{
    console.log('You going out with a jacket')
}

//using if else if else
let isRaining =false
if (isRaining){
    console.log('You staying indoors')
}
else if (isSunny){
    console.log('You going outside')
}
else {
    console.log('You not goin anywhere')
}

let num2 =10
if (num2 >0){
    console.log(`${num2} is a positive number`)
}
else if (num2 <0){
    console.log(`${num2}is a negative number`)
}
else {
    console.log(`${num2} is not a number`)
}
