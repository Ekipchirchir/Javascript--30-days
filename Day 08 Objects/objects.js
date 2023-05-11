//creating an object with values.
const triangle ={
    height:10,
    width:13
}
console.log(triangle) //{ height: 10, width: 13 }

const compProperties ={
    Ram: 8,
    Storage: 256 
}
console.log(compProperties) //{ Ram: 8, Storage: 256 }

const person ={
    firstName:'Emmanuel',
    lastName: 'Kipchirhcir',
    countryOfResidence :'Kenya',
    age :23,
    language:'English and Swahili',
    school:'Technical University of Kenya',
    home :'Kapsabet',
    isMarried :false 
}
console.log(person) //{firstName: 'Emmanuel',lastName: 'Kipchirhcir',countryOfResidence: 'Kenya',age: 23,language: 'English and Swahili',school: 'Technical University of Kenya',home: 'Kapsabet',isMarried: false}
 
//Getting values from an object.
const person1 ={
    firstName:'Lynne',
    lastName:'Gilberts',
    countryOfResidence: 'kenya',
    age:25,
    language:'English,French and Swahili',
    school: 'Technical University of Mombasa',
    isMarried:true,
    children: 2,
   ' phone number': '+2547 333 444 555',
}
//using . followed by key name if the key-name is a one word
console.log(person1.children)//2
console.log(person1.school) //Technical University of Mombasa

//using square bracket and a quote
console.log(person1['countryOfResidence'])//kenya
console.log(person1['lastName']) //Gilberts
console.log(person1['isMarried']) //true
console.log(person1[' phone number']) //+2547 333 444 555

//creating object methods.using THIS key word.
const student= {
    firstName:'James',
    lastName: 'Jimmy',
    age: 36,
    getFullName:function(){
        return`${this.firstName} ${this.lastName}`
    }
}
console.log(student.getFullName()) //James Jimmy

//settimg new key for an object.
const person2 ={
    firstName:'Emmanuel',
    lastName: 'Kipchirhcir',
    getFullName:function(){
        return `${this.firstName} ${this.lastName}`
    },
    countryOfResidence :'Kenya',
    age :23,
    skills: [
        'JavaScript',
       ' HTML',
       ' CSS'
    ],
    language:'English and Swahili',
    school:'Technical University of Kenya',
    home :'Kapsabet',
    isMarried :false 
    
}
person2.nationality ='Kenyan'
person2.skills.push('Python')
person2.skills.push('C++')
person2.title='student'


person2.getPersonInfo = function(){
    let skillsWithoutPushSkills =this.skills.splice(0, this.skills.length -1) .join(',')
    let lastSkill =this.skills.splice(this.skills.length -1)[0]

    let skills =`${skillsWithoutPushSkills}, and ${lastSkill}`
    let fullName =this.getFullName()
    let statement =`${fullName} is a ${this.title}.He lives in ${this.home}. He is learning ${skills}.`
    return statement
}
console.log(person2.getPersonInfo()) //Emmanuel Kipchirhcir is a student.He lives in Kapsabet. He is learning JavaScript, HTML, CSS,Python, and C++.

const teacher ={
    firstName :'Erick',
    lastName: 'Keen',
    getFullName:function(){
        return `${this.firstName} ${this.lastName}`
    },
    countryOfResidence:'China',
    age:30,
    isMarried:true,
    skills:[
        "Web development",
        'Graphics design',
        'App development',
        'Data engineering'
    ],
    title:'lecturer'
}
teacher.nationality='Chinese'
teacher.skills.push('Data visualization')
teacher.skills.push('Video editing')
teacher.getTeacherInfo=function(){
    let skillWithoutPushSkills =this.skills.splice(0,this.skills.length -1) .join(',')
    let lastAddedSkill =this.skills.splice(0,this.skills.length -1)[0]

    let addedSkills =`${skillWithoutPushSkills}, and ${lastAddedSkill}`
    let fullName =this.getFullName()
    let fullStatement =`${fullName} is a ${this.title}. He lives in ${this.countryOfResidence}.He is skilled in ${this.skills}`
    return fullStatement
}
console.log(teacher.getTeacherInfo()) //Erick Keen is a lecturer. He lives in China.He is skilled in Video editing

//Object methods.
// using Object.assign. -to copy an object without modfitying the original object.
const details ={
    firstName:'Emmanuel',
    lastName: 'Kipchirchir',
    countryOfResidence :'Kenya',
    age :23,
    language:'English and Swahili',
    school:'Technical University of Kenya',
    home :'Kapsabet',
    isMarried :false ,
    getFullDetails:function(){
        return `I am ${this.firstName} ${this.lastName}, aged ${this.age} and I live in ${this.home},${this.countryOfResidence}.`
}
}
  //Object methods: Object.assign, Object.keys, Object.values, Object.entries
  //hasOwnProperty
  
const copyPerson4 = Object.assign({}, details)
console.log(copyPerson4)

//Getting object keys using Object.keys()
const keys = Object.keys(copyPerson4)
console.log(keys) //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo'] //['firstName','lastName','countryOfResidence','age','language','school','home','isMarried','getFullDetails']


//Getting object values using Object.values()
const values = Object.values(copyPerson4)
console.log(values) //['Emmanuel','Kipchirchir','Kenya',23,'English and Swahili','Technical University of Kenya','Kapsabet',false,[Function: getFullDetails]]

//Getting object keys and values using Object.entries()
const entries = Object.entries(copyPerson4)
console.log(entries)//[[ 'firstName', 'Emmanuel' ],[ 'lastName', 'Kipchirchir' ],[ 'countryOfResidence', 'Kenya' ],[ 'age', 23 ],[ 'language', 'English and Swahili' ],[ 'school', 'Technical University of Kenya' ],[ 'home', 'Kapsabet' ],[ 'isMarried', false ],[ 'getFullDetails', [Function: getFullDetails] ]]

//Checking properties using hasOwnProperty()
console.log(copyPerson4.hasOwnProperty('name')) //false
console.log(copyPerson4.hasOwnProperty('score')) //false
console.log(copyPerson4.hasOwnProperty('fullName')) //fasle
console.log(copyPerson4.hasOwnProperty('age')) //true