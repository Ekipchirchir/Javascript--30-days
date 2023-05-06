const now= new Date()
console.log(now.getFullYear()) //2023 -the year today is 2023
console.log(now.getMonth()) //4 -the moonth is May which is the 5th month of the year
console.log(now.getDate()) //6 -the date today is 6th, May 2023
console.log(now.getHours()) // 12 -it is 12 noon
console.log(now.getMinutes()) //8 -is it the 8th minute past noon
console.log(now.getSeconds()) //46 -getting seconds now
console.log(now.getMilliseconds()) // 718 -the miliseconds right now
console.log(now.getTime()) //1683364256321 -getting number of seconds passed since January 1, 1970
console.log(now.getDay()) //6 -the day of the week is saturday which is the 7th day

const date=now.getDate()
const month=now.getMonth()
const year =now.getFullYear()
const hours=now.getHours()
const minutes =now.getMinutes()
const seconds=now.getSeconds()
console.log(`${month},${year} ${hours}:${minutes}:${seconds}`) //4,2023 12:26:51