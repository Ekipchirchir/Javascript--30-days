const readThese= callback =>{
    setTimeout(()=>{
        const units =['Algrothimns','Websigning','Proramming']
        callback('It did not go well', units)
    },2000)
}
const callback =(err,result)=>{
    if(err){
        return console.log(err)
    }
    return console.log(result)
}
readThese(callback) //It did not go well

const readSomething=callback=>{
    setTimeout(()=>{
        const units1=['Algrothimns','Websigning','Proramming']
        callback(false,units1)
    },2000)
}
readSomething((err,result)=>{
    if (err){
        return console.log(err)
    }
    return console.log(result)
}) //[ 'Algrothimns', 'Websigning', 'Proramming' ]

//Promise constructor
const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const units2 =['Algorithms', 'Webdesigning','Programming']
        if(units2.length>0){
            resolve(units2)
        }else{
            reject('Something wrong is happening')
        }

    },2000)
})
promise
 .then(result=>{
    console.log(result)
 })
  .catch(error=>console.log(error)) //[ 'Algorithms', 'Webdesigning', 'Programming' ]

const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const units3=['Algorithmns','Webdesigning','programming']
        if (units3.indexOf('Node') !== -1){
            resolve('Data Structures')
        }else{
            reject('Something wrong happened')
        }
    },2000)
})
promise1
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error)) //Something wrong happened

//Fetch API
const url = 'https://restcountries.com/v3.1/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.log(error))

//Async and wait
const square = async function (n) {
    return n * n
  }

square(5)
  .then(result => {
  console.log(result)
  })//25

//await
const squared =async function(n){
  return n*n
}
const vale =await square(5)

//promise
const url1 = 'https://restcountries.com/v3.1/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.log(error))

//Async and wait
const fetchData = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.log(err)
    }
}
console.log('===== async and await')
fetchData()
