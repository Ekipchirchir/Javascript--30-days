//creating a pattern with RegExp constructor.
// without flag
//Declaring regular expression without global flag and case insensitive flag
let word='Expression'
let regExp=new RegExp(word)

//Declaring regular expression with global flag and case insensitive flag
let word1='Expression'
let flag='gi'
let regExp1=new RegExp(word,flag)

//Declaring a regex pattern using RegExp object. Writing the word and the flag inside a constructor.
let regExp3= new RegExp('Expression','gi')

//Creating a apattern using RegExp constructor
let regExp4=/word/gi //this regular expresssion is the same as the one above.

//RegExp object methods
//1.Testing for a match.
const sentence ='I am a univeristy student'
const word2=/student/
const result =word2.test(sentence)
console.log(result) //true

const line ='He is very happy'
const keyWord=/sad/
const output=keyWord.test(line)
console.log(output)//false

//Array containing all of the match.
//2.Match
const quote ='Earliest bird catches the worm'
const target='bird'
const results=quote.match(target)
console.log(results)//['bird',   index: 9,   input: 'Earliest bird catches the worm',  groups: undefined ]

const intro='Hello and welcome on board!'
const salutation=/Hello/g
const output2=intro.match(salutation)
console.log(output2)//[ 'Hello' ]

//3.Search
const conclusion='Thanks for shopping with us and welcome again'
const text =/shopping/g
const conclusiontext =conclusion.search(text)
console.log(conclusiontext) //11

//relacing a substring
//4.Replace.
const language ='French is an easy language to learn at a young age'
wordMatched =language.replace(/French|french/, 'Germany')
console.log(wordMatched)//Germany is an easy language to learn at a young age

const message ='Your monthly subscription has been renewed!'
matchedWord=message.replace(/monthly|Monthly/g,'annualy')
console.log(matchedWord)//Your annualy subscription has been renewed!

//Square brackets.
const medium='[Ff]acebook'
const media ='Facebook and Instagram are social media platforms'
const matches =media.match(medium)
console.log(matches)//['Facebook', index: 0, input: 'Facebook and Instagram are social media platforms',  groups: undefined]

const word4=/[Hh]ello/g
const txt ="Hello sir and hello  ma'am welcome aboard!"
const matches1=txt.match(word4)
console.log(matches1)//[ 'Hello', 'hello' ]

//Escape character(\) in RegExp.
const day =/\d/g
const birthday ='I was born in the year 2000, 24th of December'
const birthDay=birthday.match(day)
console.log(birthDay)//[ '2', '0', '0', '0', '2', '4' ]

const date=/\d+/g
const today ='The date today is 12, 05,2023'
const dateToday=today.match(date)
console.log(dateToday) //[ '12', '05', '2023' ]

//Period(.)
const fruits =/[a]./g
const types ='Mangoes and oranges are the type of fruits'
const mangoetypes =types.match(fruits)
console.log(mangoetypes) //[ 'an', 'an', 'an', 'ar' ]

const fruits1=/[a].+/g
const types1='Mangoes and oranges are the types of fruits.'
const fruitstypes=types1.match(fruits1)
console.log(fruitstypes)//[ 'angoes and oranges are the types of fruits.' ]

//zero or many times(*)
const fruits2=/[a].*/g
const types3 ='Mangoes and oranges are the types of fruits'
const fruittypes=types3.match(fruits2)
console.log(fruittypes) //[ 'angoes and oranges are the types of fruits' ]

//Zero or one times(?)
const txts = 'I am not sure if there is a convention how to write the word g-mail.\
Some people write it email others may write it as Gmail or G-mail.'
const patterns = /[Gg]-?mail/g  // ? means optional
match4 = txts.match(patterns)

console.log(match4)  // [ 'g-mail', 'Gmail', 'G-mail' ]

//Quantifier in RegExp
const yearMade='This product was made in China in the year 2022'
const pattern2= /\d{4}/g
const matches2=yearMade.match(pattern2)
console.log(matches2)//[ '2022' ]

const yearManufactured ='This  item was manafuactured in Jnauray 7, 1999'
const pattern4 =/\d{1,4}/g
const matches4=yearManufactured.match(pattern4)
console.log(matches4) //[ '7', '1999' ]

//Cart ^
const text1='This text was brought up in June 10,2016'
const pattern6=/^This/
const matches6= text1.match(pattern6)
console.log(matches6)




const dateMade='This item item was made in January 17,2019'
const pattern5=/[^A-Za-z,.]+/g
const matches5=dateMade.match(pattern5)
console.log(matches5)//['17', '2019']


//Exact match
let patTern =/^[A-Z][a-z]{3,12}$/
let matches8='Emmanuel'
let result2=patTern.test(matches8)
console.log(result2) //test