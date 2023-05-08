//FOR LOOP
for (let i = 0; i <=10 ; ++i){
    console.log(i)
} //0 1 2 3 4 5 6 7 8 9 20

for (let i= 10; i>=0; --i){
    console.log(i)
}  //10 9 8 7 6 5 4 3 2 1 0

for(let i = 0; i <= 9; i++){
    console.log(`${i} * ${i} = ${i * i}`)
} 

const names =['Emmanuel','Kipchirchir','Jade', 'James','Jacob']
const newArr = []
for(let i = 0; i < names.length; i++){ 
newArr.push(names[i].toUpperCase())//converts the names to uppercase.
}
console.log(newArr)//[ 'EMMANUEL', 'KIPCHIRCHIR', 'JADE', 'JAMES', 'JACOB' ]

//Adding all elements in an array
const values =[1,2,3,4,5,6,7,8]
let sum =0
for (let i = 0; i < values.length; ++i){
    sum += values[i]
}
console.log(sum) //36


//creating a new array base on existing array.
const arr=[1,2,3,4,5,6,7,8]
const newArrNum =[]
let sumNum =0
for (let i = 0; i < arr.length; ++i){
    newArrNum.push(arr[i] **2)
}
console.log(newArrNum) //[1,  4,  9, 16,25, 36, 49, 64]

const countries =['Sweden','Poland','Kenya','Somali','Egypt','Algeria']
const newCountries =[]
for (let i = 0; i < countries.length; ++i){
    newCountries.push(countries[i].toUpperCase())
}
console.log(newCountries) //[ 'SWEDEN', 'POLAND', 'KENYA', 'SOMALI', 'EGYPT', 'ALGERIA' ]


//WHILE LOOP
let i = 10
while (i <= 20) {
  console.log(i)
  i++
}

// 10,11,12,13,14,15,16,17,18,19,20

let y=0
while(y<=10){
    console.log(y)
    y++
}
// 0 1 2 3 4 5 6 7 8 9 10

//do while loop
let x=10
do {
    console.log(x)
    x++
}while (x<=20)
//10,11,12,13,14,15,16,17,18,19,20

let c=0
do{
    console.log(c)
    c++
} while (c<=4)
//0 1 2 3 4


//FOR OF LOOP

const marks =[15,16,17,18,19,14]
for(const values of marks){
    console.log(values)
} //15,15,17,18,19,14

for(const values of marks){
    console.log(values * values)
} //225,256,289,324,361,196

//Adding all numbers in an array
const  ourArray =[10,20,30,40,50]
let total =0

for (let i=0; i< ourArray.length; i +=1){
    total += ourArray[i]
}
console.log(total)//total is 150

//Converting array items to uppercase.
const planets =['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Venus', 'Saturn', 'Uranus']
const newArray =[]
for(const planet of planets){
    newArray.push(planet.toUpperCase()) //converts items to uppercase.
}
console.log(newArray)//['MERCURY', 'VENUS','EARTH',   'MARS','JUPITER', 'VENUS','SATURN',  'URANUS']


//BREAK -Used to interrupt a loop
for (let r=0;r<=5;r++){
    if(r==3){
        break
    }
    console.log(r)//stops if 3 is found in the iteration process.
}// 0, 1, 2,

for (let p =0; p<=10; p++){
    if(p==7){
        break
    }
    console.log(p) //stops if 7 is found in the iteration process.
}// 0,1,2,3,4,5,6

//CONTINUE
//Continue is used to skip a certain iterations.
for (let z =0;z<=5;z++){
    if(z==3){
        continue
    }
    console.log(z)
} //0,1,2,4,5

for(let t=10;t<=20;t++){
    if(t==15){
        continue
    }
    console.log(t)
} //10,11,12,13,14,16,17,18,19,20