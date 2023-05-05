//length
let firstName= 'Emmanuel'
console.log(firstName.length)
let py ='Pycharm'
console.log(py.length)

//accessing characters in a string
let city ='Nairobi'
console.log(city[2])

//to uppercase
let school = 'kapsabet'
console.log(school.toUpperCase())

//to lowercase
let surname ='KIPLAGAT'
let hobby ='Hiking'
console.log(surname.toLocaleLowerCase())
console.log(hobby.toLocaleLowerCase())


// substring
let abb= 'abbreviations'
console.log(abb.substring(0,3))
console.log(abb.substring(3,12))

//split
let abc= 'abbreviations'
console.log(abc.split())
console.log(abc.split(''))

//trim
let string = '  He is a good lad  '
console.log(string)
console.log(string.trim(' '))

//includes
let sentence = 'Making Tomatoes and Onions'
console.log(sentence.includes('Making'))
console.log(sentence.includes('making'))
console.log(sentence.includes('Tomatoes'))
console.log(sentence.includes('tomatoes'))

//replace
let word = 'Python in 30 days'
console.log(word.replace('Python', 'Javascript'))

//charAt
let python='Python in 30 days'
console.log(python.charAt(0))
let lastIndex = python.length-1
console.log(python.charAt(lastIndex))

//charcodeAt
let topic='Javascript in 30 days'
console.log(topic.charCodeAt(3))  
let last = string.length - 1
console.log(string.charCodeAt(last))

//Type of
let title ='Javascript in 30 days'
console.log(title.indexOf('Javascript'))
console.log(title.indexOf('j'))
console.log(title.indexOf('30'))
console.log(title.indexOf('in'))

//last index of
let text = 'Javascript in 30 days'
console.log(text.lastIndexOf('javascript'))
console.log(text.lastIndexOf('Javascript'))
console.log(text.lastIndexOf('30'))

//concat
let message = 'Javascript'
console.log(message.concat( 'in' ,'30', 'days'))

//start with
let fullName ='Emmanuel Kipchirchir'
console.log(fullName.startsWith('Emmanuel')) //true
console.log(fullName.startsWith('emmanuel'))
console.log(fullName.startsWith('Emmanuel'))

//endswith
let language = 'A lil of French and English'
console.log(language.endsWith('English')) //True
console.log(language.endsWith('lil')) 
console.log(language.endsWith('French'))

//search
let searchText= 'I scream, you scream, we all scream for ice cream'
console.log(searchText.search('scream'))

//repeat
let occupation='student'
console.log(occupation.repeat(5))

//match
let read = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(read.match('love'))
let pattern = /love/gi
console.log(string.match(pattern))   // returns null