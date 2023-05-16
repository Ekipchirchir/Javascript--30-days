//Defining a class
class Child{

} //Already defined a class but it has nothing inside.

//Class instantiation.
class Children{

}
const child =new Children()
console.log(child) //Children {}

//Class constructor 
class Student{
    constructor(firstName,lastName){
        console.log(this)
        this.firstName =firstName
        this.lastName=lastName
    }
}
const student =new Student()
console.log(student) //Student { firstName: undefined, lastName: undefined }

class Teacher{
    constructor(firstName,lastName){
        console.log(this)
        this.firstName =firstName
        this.lastName=lastName
    }
}
const teacher =new Teacher('Emmanuel','Kipchirchir')
const teacher1=new Teacher('John','Karanja')
const teacher2=new Teacher('Paul','Wendo')
console.log(teacher) //Teacher { firstName: 'Emmanuel', lastName: 'Kipchirchir' }
console.log(teacher1) //Teacher { firstName: 'John', lastName: 'Karanja' }
console.log(teacher2) //Teacher { firstName: 'Paul', lastName: 'Wendo' }

class Laptop{
    constructor(name,yearMade,countryMadeIn,storage,ram){
        console.log(this)
        this.name =name
        this.yearMade=yearMade
        this.countryMadeIn=countryMadeIn
        this.storage=storage
        this.ram=ram
    }
}
const laptop =new Laptop('HP EliteBook',2017,'China',500,16)
console.log(laptop) //Laptop {name: 'HP EliteBook',yearMade: 2017,countryMadeIn: 'China',storage: 500,ram: 16}

//Default values with constructor
class Phone{
    constructor(
        name='Samsung',
        yearMade=2022,
        countryMadeIn='China',
        storage=128,
        ram=8
    ){
        this.name =name
        this.yearMade=yearMade
        this.countryMadeIn=countryMadeIn
        storage=storage
        ram=ram
    }
}
const phone1=new Phone()
const phone2 =new Phone('Infinix',2020,'Japan',64,4)
console.log(phone1) //Phone { name: 'Samsung', yearMade: 2022, countryMadeIn: 'China' }
console.log(phone2) //Phone { name: 'Infinix', yearMade: 2020, countryMadeIn: 'Japan' }

//Class Methods
class Lecturer{
    constructor(firstName,lastName,school,home){
        this.firstName=firstName
        this.lastName=lastName
        this.school=school
        this.home=home
    }
    getFullName(){
        const fullName=this.firstName +' '+this.lastName
        return fullName
    }
}
const lecturer1=new Lecturer('Jane','Mwaniki','UON','Kibra')
const lecturer2=new Lecturer('Joshua','Mbugua','TUK','Roysambu')
console.log(lecturer1.getFullName()) //Jane Mwaniki
console.log(lecturer2.getFullName()) //Joshua Mbugua

//Properties with initial value
class Lecturer1{
    constructor(firstName,lastName,school,home){
        this.firstName=firstName
        this.lastName=lastName
        this.school=school
        this.home=home
        this.score=0
        this.skills=[]
    }
    getFullName(){
        const fullName=this.firstName +' '+this.lastName
        return fullName
    }
}
const lecturer3=new Lecturer1('Jane','Mwaniki','UON','Kibra')
const lecturer4=new Lecturer1('Joshua','Mbugua','TUK','Roysambu')
console.log(lecturer3.score)//0
console.log(lecturer4.score)//0

console.log(lecturer3.skills)//[]
console.log(lecturer4.skills)//[]

//Getter Method
class Lecturer2{
    constructor(firstName,lastName,school,home){
        this.firstName=firstName
        this.lastName=lastName
        this.school=school
        this.home=home
        this.score=0
        this.skills=[]
    }
    getFullName(){
        const fullName=this.firstName +' '+this.lastName
        return fullName
    }
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills
    }
}
const lecturer5=new Lecturer2('Jane','Mwaniki','UON','Kibra')
const lecturer6=new Lecturer2('Joshua','Mbugua','TUK','Roysambu')
console.log(lecturer5.getScore)//0
console.log(lecturer6.getScore)//0
console.log(lecturer5.getSkills)//[]
console.log(lecturer6.getSkills)//[]

//Setter Method
class Lecturer3{
    constructor(firstName,lastName,school,home){
        this.firstName=firstName
        this.lastName=lastName
        this.school=school
        this.home=home
        this.score=0
        this.skills=[]
    }
    getFullName(){
        const fullName=this.firstName +' '+this.lastName
        return fullName
    }
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills
    }
    set setScore(score){
        this.score+=score
    }
    set setSkill(skill){
        this.skills.push(skill)
    }
}
const lecturer7=new Lecturer3('Jane','Mwaniki','UON','Kibra')
const lecturer8=new Lecturer3('Joshua','Mbugua','TUK','Roysambu')

lecturer7.setScore = 1
lecturer7.setSkill = 'Web designing'
lecturer7.setSkill = 'App development'
lecturer7.setSkill = 'Django workframing'

lecturer8.setScore = 1
lecturer8.setSkill = 'Teaching'
lecturer8.setSkill = 'Developing'
lecturer8.setSkill = 'Programming'

console.log(lecturer7.score) //1
console.log(lecturer8.score) //1

console.log(lecturer7.skills) //[ 'Web designing', 'App development', 'Django workframing' ]
console.log(lecturer8.skills) //[ 'Teaching', 'Developing', 'Programming' ]

class Instructor {
    constructor(firstName,lastName,age,city,country){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
        this.country=country
        this.city=city
        this.score=0
        this.skills=[]
    }
    getFullName(){
        const fullName=this.firstName+' '+this.lastName
        return fullName
    }
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills
    }
    set setScore(score){
        this.score+=score
    }
    set setSkill(skill){
        this.skills.push(skill)
    }
    getInstructorInfo(){
        let fullName=this.getFullName
        let skills =
        this.skills.length>0 &&
        this.skills.slice(0,this.skills.length -1).join(', ')+
        `and ${this.skills[this.skills.length-1]}`
        let formattedSkills =skills?`He know ${skills}`:''
        let info =`${fullName} is ${this.age}.He lives in${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
}
const instructor1=new Instructor('Emmanuel','Kipchirchir',25,'Nairobi','Kenya')
const instructor2=new Instructor('Will','Kimani',26,'Kampala','Uganda')
const instructor3=new Instructor('Mesh','John',30,'Mogadishu','Somali')
instructor1.setScore=1
instructor1.setSkill='Python'
instructor1.setSkill='Java'
instructor1.setSkill='C++'

instructor2.setScore=1
instructor2.setSkill='Wed programming'
instructor2.setSkill='Video editing'
instructor2.setSkill='Web application and designing'


console.log(instructor1.getScore)//1
console.log(instructor2.getScore)//1

console.log(instructor1.getSkills)
console.log(instructor2.getSkills)
console.log(instructor3.getSkills)

console.log(instructor1.getInstructorInfo())
console.log(instructor2.getInstructorInfo())
console.log(instructor3.getInstructorInfo())

class Instructor1{
    constructor(firstName,lastName,age,country,city){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
        this.country=country
        this.city=city
    }
    getFullName(){
        const fullName=this.firstName+' '+this.lastName
        return fullName
    }
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.getSkills
    }
    set setScore(score){
        this.skills.push(skill)
    }
    getInstructorInfo(){
        let fullName=this.getFullName()
        let skills=
           this.skills.length>0 &&
           this.skills.slice(0,this.skills.length -1).join(', ')+
              `and ${this.skills[this.skills.length-1]}`
        let formattedSkills=skills? `He knows $:skills` :''
        let info =`${fullName} is  ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
    static favoriteSkill(){
        const skills =['Web programming','HTML', 'CSS', 'JavaScript']
        const index=Math.floor(Math.random()*skills.length)
        return skills[index]
    }
    static showDateTime(){
        let now =new Date()
        let year=now.getFullYear()
        let month =now.getMonth()
        let date=now.getDate()
        let hours =now.getHours()
        let minutes=now.getMinutes()
        if (hours <10){
            hours='0'+ hours
        }
        if(minutes<10){
            minutes='0'+minutes
        }
        let dateMonthYear =date +'.'+month+'.'+year
        let time =hours +':'+minutes
        let fullTime=dateMonthYear+' '+time
        return fullTime
    }
}
console.log(Instructor1.favoriteSkill())//CSS
console.log(Instructor1.showDateTime()) //16.4.2023 08:20

//Inheritance
//Creating a student child from Instructor class
class Student extends Instructor1{
    saySomething(){
        console.log('I am student of the Instructor class')
    }
}
const student1=new Student('Emmanuel', 'Kipchirchir', 'Kenya', 24,'Nairobi')
console.log(student1)
console.log(student1.saySomething())
console.log(student1.getFullName())
console.log(student1.getersonInfo())

//Overriding methods
class Student1 extends Instructor1{
    constructor(firstName,lastName,age,country,city ,gender){
        super(this.firstName,lastName,age,country,city)
    }
    saySomething(){
        console.log('I am a student of Instructor1')
    }
    getInstructorInfo(){
        let fullName=this.getFullName()
        let skills=
           this.skills.length>0&&
           this.skills.slice(0,this.skills.length -1).join (',')+
           `and ${this.skills[this.skills.length-1]}`
        let formattedSkills=skills? `He knows ${skills}`:''
        let pronoun =this.gender=='Male'?'He ':'She'
        
        let info =`${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}.${formattedSkills}`
        return info
    }

}
const student2=new Student(
    'Emmanuel',
    'Kipchirchir',
    24,
    'Kenya',
    'Nairobi',
    'Male'
)
const student3=new Student('Lidiya', 'Chemutai',36,'Uganda','Kampala','Female')
student1.setScore=1
student1=setSkill='Python'
student1='JavaScript'
student1='HTML'

student3.setScore=1
student3.setSkill='Planning'
student3.setSkill='Design'
student3.setSkill='Programming'

console.log(student1)

console.log(student1.saySomething())
console.log(student1.getFullName())
console.log(student1.getInstructorInfo())

console.log(student2.saySomething())
console.log(student2.getFullName())
console.log(student2.getInstructorInfo())