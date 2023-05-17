//converting JSON to javascript object.
//JSON.parse()
const userDetails=`{
    "users":[
        {
            "firstName":"Emmanuel",
            "lastName":"Kipchirchir",
            "age":24,
            "email":"manuuchirchir50@gmail.com"
        },
        {
            "firstName":"Jack",
            "lastName":"Martin",
            "age":35,
            "email":"jackmartin@gmail.com"
        },
        {
            "firstName":"Faith",
            "lastName":"Joy",
            "age":28,
            "email":"faithjoy@gmail.com"
        }
    ]
}`
const usersObj=JSON.parse(userDetails,undefined,4)
console.log(usersObj)
/*{
    users: [
      {
        firstName: 'Emmanuel',
        lastName: 'Kipchirchir',
        age: 24,
        email: 'manuuchirchir50@gmail.com'
      },
      {
        firstName: 'Jack',
        lastName: 'Martin',
        age: 35,
        email: 'jackmartin@gmail.com'
      },
      {
        firstName: 'Faith',
        lastName: 'Joy',
        age: 28,
        email: 'faithjoy@gmail.com'
      }
    ]
  }*/

//Using a reviver function with JSON.parse()-Reviver function is used as a formatter.
const usersDetails=`{
    "users":[
        {
            "firstName":"Emmanuel",
            "lastName":"Kipchirchir",
            "age":24,
            "email":"manuuchirchir50@gmail.com"
        },
        {
            "firstName":"Jack",
            "lastName":"Martin",
            "age":35,
            "email":"jackmartin@gmail.com"
        },
        {
            "firstName":"Faith",
            "lastName":"Joy",
            "age":28,
            "email":"faithjoy@gmail.com"
        }
    ]
}`

const usersObjs=JSON.parse (usersDetails,(key,value)=>{
    let newDetails=
    typeof value =='string' && key!='email'? value.toUpperCase():value
    return newDetails
})
console.log(usersObjs)
/*{
    users: [
      {
        firstName: 'EMMANUEL',
        lastName: 'KIPCHIRCHIR',
        age: 24,
        email: 'manuuchirchir50@gmail.com'
      },
      {
        firstName: 'JACK',
        lastName: 'MARTIN',
        age: 35,
        email: 'jackmartin@gmail.com'
      },
      {
        firstName: 'FAITH',
        lastName: 'JOY',
        age: 28,
        email: 'faithjoy@gmail.com'
      }
    ]
}*/

//Converting Object to JSON

const students={
    Mike:{
        email:'mike@gmail.com',
        skills:['Python','HTML','CSS'],
        age:28,
        inSession:true,
        score:70
    },
    Jade:{
        email:'jade@gmail.com',
        skills:['JavasScript','HTML','CSS'],
        age:25,
        inSession:true,
        score:65
    },
    Joel:{
        email:'joel@gmail.com',
        skills:['Python','HTML','CSS','JavaScript'],
        age:24,
        inSession:false,
        score:55
    },
    Lynne:{
        email:'lynne@gmail.com',
        skills:['Python','HTML','CSS','React','JavaScript'],
        age:40,
        inSession:true,
        score:79
    },
    Caren:{
        email:'caren@gmail.com',
        skills:['Python','HTML','CSS','React','Redux'],
        age:23,
        inSession:true,
        score:66
    },
    Susan:{
        email:'susan@gmail.com',
        skills:['Python','HTML','CSS','JavaScript','React','Redux'],
        age:28,
        inSession:true,
        score:70
    },
    Lincon:{
        email:'lincon@gmail.com',
        skills:['Python','HTML'],
        age:19,
        inSession:true,
        score:33
    }
}
const studentsDetails=JSON.stringify(students,undefined,4)
console.log(studentsDetails)
/*{
    "Mike": {
        "email": "mike@gmail.com",
        "skills": [
            "Python",
            "HTML",
            "CSS"
        ],
        "age": 28,
        "inSession": true,
        "score": 70
    },
    "Jade": {
        "email": "jade@gmail.com",
        "skills": [
            "JavasScript",
            "HTML",
            "CSS"
        ],
        "age": 25,
        "inSession": true,
        "score": 65
    },
    "Joel": {
        "email": "joel@gmail.com",
        "skills": [
            "Python",
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 24,
        "inSession": false,
        "score": 55
    },
    "Lynne": {
        "email": "lynne@gmail.com",
        "skills": [
            "Python",
            "HTML",
            "CSS",
            "React",
            "JavaScript"
        ],
        "age": 40,
        "inSession": true,
        "score": 79
    },
    "Caren": {
        "email": "caren@gmail.com",
        "skills": [
            "Python",
            "HTML",
            "CSS",
            "React",
            "Redux"
        ],
        "age": 23,
        "inSession": true,
        "score": 66
    },
    "Susan": {
        "email": "susan@gmail.com",
        "skills": [
            "Python",
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 28,
        "inSession": true,
        "score": 70
    },
    "Lincon": {
        "email": "lincon@gmail.com",
        "skills": [
            "Python",
            "HTML"
        ],
        "age": 19,
        "inSession": true,
        "score": 33
    }
}*/

//Using a Filter Array with JSON.stringify
const student ={
    firstname:'Emmanuel',
    lastName:'Kipchirchir',
    country:'Kenya',
    city:'Nairobi',
    email:'manuuchirchir50@gmail.com',
    skills:['HTML','CSS','Python','JavaScript'],
    age:22,
    inSesssion:true,
    score:78
}
const studentDetails =JSON.stringify(student,['firstname','lastName','country','city','age'],4)
console.log(studentDetails)
/*{
    "firstname": "Emmanuel",
    "lastName": "Kipchirchir",
    "country": "Kenya",
    "city": "Nairobi",
    "age": 22
}*/