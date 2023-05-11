//creating an empty map
const map =new Map()
console.log(map) //Map(0) {}

//creating a map from array
const mapArry=[
    ['Kenya','Nairobi'],
    ['Somali','Mogadishu'],
    ['Uganda','Kampala']
]
const array =new Map(mapArry)
console.log(array) //Map(3) {'Kenya' => 'Nairobi','Somali' => 'Mogadishu','Uganda' => 'Kampala'}
console.log(array.size) //3

//Adding Values to the map
const countriesArray = new Map()
console.log(countriesArray.size) // 0
countriesArray.set('Kenya', 'Nairobi')
countriesArray.set('Somali', 'Mogadishu')
countriesArray.set('Uganda', 'Kampala')
countriesArray.set('Tanzania', 'Arusha')
console.log(countriesArray) //Map(4) {'Kenya' => 'Nairobi','Somali' => 'Mogadishu','Uganda' => 'Kampala', 'Tanzania' => 'Arusha'}
console.log(countriesArray.size) //4

//Getting a value from a map
console.log(countriesArray.get('Kenya')) //Nairobi
console.log(countriesArray.get('Tanzania')) //Arusha
console.log(countriesArray.get('Uganda')) //Kampla
console.log(countriesArray.get('Somali')) //Mogadishu

//Checking key in map
console.log(countriesArray.has('Kenya')) //true
console.log(countriesArray.has('Tanzania')) //true
console.log(countriesArray.has('Sudan')) //false

//getting all values from a mpa using loop
const mapArry1=[
    ['Kenya','Nairobi'],
    ['Somali','Mogadishu'],
    ['Uganda','Kampala']
]
for (const country of countriesArray){
    console.log(country)
}//[ 'Kenya', 'Nairobi' ]
 //[ 'Somali', 'Mogadishu' ]
 //[ 'Uganda', 'Kampala' ]
 //[ 'Tanzania', 'Arusha' ]

 for (const[country, capitalCity] of countriesArray){
    console.log(country, capitalCity)
 }
 //Kenya Nairobi
 //Somali Mogadishu
 //Uganda Kampala
 //Tanzania Arusha