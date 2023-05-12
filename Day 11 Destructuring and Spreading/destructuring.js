//destructuring is a way to unpack arrays and objects and assigning to a distinct variable.
//Destructuring arrays.
const letters= ['a','b','c']
let [firstLetter, secondLetter, ThirdLetter]=letters
console.log(firstLetter,secondLetter,ThirdLetter) //a b c

const studentsNames =['Emmy','Emma','Jane','John','Jenna']
let [firstName,secondName,thirdName,fourthName,fifthName]=studentsNames
console.log(firstName,secondName,thirdName,fourthName,fifthName)//Emmy Emma Jane John Jenna

const mathConstants =[2.72, 3.142, 37,100,0 ]
let[e,PI,bodyTemp,boilingPoint,freezingPoint]=mathConstants
console.log(e,PI,bodyTemp,boilingPoint,freezingPoint) //2.72 3.142 37 100 0


const numbers =[12,13,14,15,16,17]
let [twelve, thirteen,fourteen,fifteen,sixteen,seventeen]=numbers
console.log(twelve,thirteen,fourteen,fifteen,sixteen,seventeen)//12 13 14 15 16 17

//using additional comma  to skip on the value in an array
const valueNum =[30,50,60,70]
let[num1, , num3,num4]= valueNum
console.log(num1,num3,num4) //30 60 70

const value2 =[60,70,80,90,100]
let[value1,vallue2,value3,, value4]=value2
console.log(value1,vallue2,value3,value4)//60 70 80 100

const personName=['Emmanuel','Kipchirchir','Collins','Kiprono']
let[name1,name2,,name4]=personName
console.log(name1,name2,name4)//Emmanuel Kipchirchir Kiprono

//using 
const fruits =[undefined,'Mango','Banana','Orange',undefined]
let [
    firstFruit='Apple',
    secondFruit,
    thirdFruit,
    fourthFruit,
    fiftFruit ='Pawpaw'
]=fruits
console.log(firstFruit,secondFruit,thirdFruit,fourthFruit,fiftFruit)//Apple Mango Banana Orange Pawpaw

const  positions =[1,2,3,4,5,6,7,8,9]
let[number1,number2,number3,...rest]=positions
console.log(number1,number2,number3) //1 2 3
console.log(rest)//[ 4, 5, 6, 7, 8, 9 ]

//Destructuring during iteration.
const users =['Emmanuel', 'Mike', 'Joel', 'John', 'Mesh']
for (const user of users){
    console.log(user)
}//Emmanuel
//Mike
//Joel
//John
//Mesh

const nations =[['Kenya','Nairobi'],[' Uganda', 'Kampala']]
for (const [nation, capital] of nations){
    console.log([nation,capital])
} //[ 'Kenya', 'Nairobi' ]
//[ ' Uganda', 'Kampala' ]

//Destructuring Object.
const pcPoperties={
    ram: 16,
    storage: 500,
    generation: 7
}
let{ram,storage,generation,type}=pcPoperties
console.log(ram,storage,generation,type) //16 500 7 undefined

//Renaming during structuring
const pcPoperties1={
    ram: 16,
    storage: 500,
    generation: 7
}
let{ram:r,storage:s,generation:g,type:t}=pcPoperties
console.log(r,s,g,t)//16 500 7 undefined

//giving a default key value
const userInfo={
    fullName:'Emmanuel, Kipchirchir',
    age:23,
    weight:65
}
let{fullName,age,weight,height=1.5}=userInfo
console.log(fullName,age,weight,height) //Emmanuel, Kipchirchir 23 65 1.5

const kenya={
    capitalCity:'Nairobi',
    governor:'Johnson',
    population:7000000,
    constituencies:5
}
let{capitalCity,governor,population=9000000,constituencies}=kenya
console.log(capitalCity,governor,population,constituencies) //Nairobi Johnson 7000000 5

//Object parameter without destructuring
const laptop={
    laptopName:'Lenovo',
    yearMade:2022,
    madeIn:'China',
    properties:[
        'RAM:8gb',
        'Storage:500gb',
        'Generation:i7',
        'Bit:64',
        'Operating System: Windows',
        'Windows version:11pro'
    ]
}
const getlaptopInfo= obj=>{
    const properties=obj.properties
    const formattedProperties=properties.slice(0,-1).join(',')

    let laptopInfo =`${obj.laptopName} is a  laptop with ${formattedProperties}. It was made  in ${obj.madeIn} in the year ${obj.yearMade}.`
    return laptopInfo
}
console.log(getlaptopInfo(laptop)) //Lenovo is a  laptop with RAM:8gb,Storage:500gb,Generation:i7,Bit:64,Operating System: Windows. It was made  in China in the year 2022.

//Object parameter with destructuring.
const user={
    firstName: 'Emmanuel',
    lastName:'Kipchirchir',
    country:'Kenya',
    occupation:'student',
    skills:[
        'Web development',
        'App development',
        'Graphics designing'
    ],
    languages:['English','Japanese','Chinese']
}
const getUserInfo =obj=>{
    const skills=obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')
    const languages= obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')

    let userInfomation =`${obj.firstName} ${obj.lastName} is a ${obj.occupation}. He lives in ${obj.country}. He is well equipeped with knowledge in ${formattedSkills} and ${skills[skills.length-1]}. He speaks ${formattedLanguages} and a lil bit of ${languages[2]}.`
    return userInfomation
}
console.log(getUserInfo(user)) //Emmanuel Kipchirchir is a student. He lives in Kenya. He is well equipeped with knowledge in Web development, App development and Graphics designing. He speaks English, Japanese and a lil bit of Chinese.

//Destructuring objects during iteration.
const events=[
    {
        event: 'Reopening of schools',
        date:'4/5/2023',
        happened:true
    },
    {
        event:'Complettion of JavaScript course',
        date:'31/5/2023',
        happened:false
    },
    {
        event:'Completion of Python course',
        date:'5/5.2-23',
        happened:true
    }
]
for (const{event,date,happened} of events){
    console.log(event, date, happened)
}
//Reopening of schools 4/5/2023 true
//Complettion of JavaScript course 31/5/2023 false
//Completion of Python course 5/5.2-23 true

//Spread or Rest oparator.
//spread operator to get the rest of the numbers.
const valueOfNums=[1,2,3,4,5,6,7,8,9]
let[first,second,thrird, ...restOfvalueOfNums]=valueOfNums
console.log(first,second,thrird)//1 2 3
console.log(restOfvalueOfNums)//[ 4, 5, 6, 7, 8, 9 ]

//Spread operator to copy arrays.
const letter=['a','b','c','d','e']
const wordLetter=[...letter]
const numbs =[1,2,3,4,5,6,7,8]
const numbsArray =[...numbs]
const combination=[...letter,...numbs]
console.log(wordLetter)//[ 'a', 'b', 'c', 'd', 'e' ]
console.log(numbsArray)//[1, 2, 3, 4,5, 6, 7, 8]
console.log(combination)//['a', 'b', 'c', 'd', 'e', 1,2,   3,   4,   5,   6,   7,8]

//Spread operator to copy objets.
const staff={
    fullName:'Michael Kiptoo',
    age:35,
    title:'Vice Chancellor',
}
const staffDetails ={...staff}
console.log(staffDetails) //{ fullName: 'Michael Kiptoo', age: 35, title: 'Vice Chancellor' }

//Modifying or changing the object while copying
const object={
    name :'Bucket',
    color:'Red',
    size:'Big',
    purpose:'Washing'
}
const copiedObject={...object,name:'Basin'}
console.log(copiedObject)//{ name: 'Basin', color: 'Red', size: 'Big', purpose: 'Washing' }

//Spread operator with arrow function

const sumAllNums = (...args) => {
    console.log(args)
}
sumAllNums(1, 2, 3, 4, 5) //[ 1, 2, 3, 4, 5 ]-changed to an array.
  

const total = (...args) => {
    let sum = 0
    for (const num of args){
      sum += num
    }
    return sum
    
}
  
console.log(total(1, 2, 3, 4, 5)) //15