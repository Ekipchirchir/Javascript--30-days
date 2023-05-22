//Getting elements by tag name.
const allHeadings =document.getElementById('h1');
console.log(allHeadings) //HTMLCollection(4) [h1#first-heading.title, h1#second-heading.title, h1#third-heading.title, h1, first-heading: h1#first-heading.title, second-heading: h1#second-heading.title, third-heading: h1#third-heading.title]
console.log(allHeadings.length)//4
for (let i = 0; i < allHeadings.length; i++){
  console.log(allHeadings[i])
} //Prints each item in the HTML collection.
/*<h1 class='title' id='first-heading'>First Heading</h1>
     <h1 class='title' id='second-heading'>Second Heading</h1>
     <h1 class='title' id='third-heading'>Third Heading</h1>
     <h1></h1>*/


//Getting elements by class name.
const allHeadings3 =document.getElementsByClassName('head');
console.log(allHeadings)//HTMLCollection(3) [h1#first-heading.head, h1#second-heading.head, h1#third-heading.head, first-heading: h1#first-heading.head, second-heading: h1#second-heading.head, third-heading: h1#third-heading.head]
console.log(allHeadings.length)//4
for (let i = 0; i < allHeadings.length; i++){
  console.log(allHeadings[i])
} //Prints each item in the HTML collection.
/*<h1 class='title' id='first-heading'>First Heading</h1>
     <h1 class='title' id='second-heading'>Second Heading</h1>
     <h1 class='title' id='third-heading'>Third Heading</h1>
     <h1></h1>*/

//Getting an elemnt by id.
let firstHeading = document.getElementById('first-heading')
console.log(firstHeading)//<h1 class='head' id='first-heading'>First Heading</h1>

//Getting elements by using querySelector methods.
let firstHeading1 = document.querySelector('h1'); // <h1 class='head' id='first-heading'>First Heading</h1>
let firstHeading2 = document.querySelector('#first-heading'); //select id with first-heading
let firstHeading3 = document.querySelector('.heading'); //select the first available h2 element with class

//querySelectorAll.
const allHeadings1 =document.querySelectorAll('h1');
console.log(allHeadings1.length)//4
for (let i = 0; i < allHeadings1.length; i++){
  console.log(allHeadings1[i])
};
allHeadings1.forEach(heading => console.log(heading))
const allHeadings2 =document.querySelectorAll('.headings')

//Adding attribute
const heads =document.querySelectorAll('h1');
heads[3].class = 'heading'; //heading
heads[4].id ='fourth-heading'; //fourth-heading

//Adding attribute using setAttribute
const heads1 =document.querySelector('h1');
heads1[3].setAttribute('class', 'heading');
heads1[3].setAttribute('id', 'fourth-heading');

//Adding an attribute without setAtribute
heads[3].className = 'heading'; //headiing
heads[3].id ='fourth heading'; //fourth heading

//Adding class using classList
heads[3].classList.add('heading', 'header-heading');

//Removing class using remove.
heads[3].classList.remove('heading', 'header-heading');

//Adding an text to HTML element.
//1. Adding text content using textContent
const heads2 = document.querySelectorAll('h1');
heads2[3].textContent ='Fourth Heading'; //Fourth Heading

//Adding Style Color
const heads3 = document.querySelectorAll('h1');
heads3.forEach((heads,i) =>{
  heads.style.fontSize = '24px'
  if (i % 2 === 0){
    heading.style.color ='green';
  } else {
    heading.style.color='red';
  }
})

//Adding style background color
const heads4 = document.querySelectorAll('h1')
heads4.forEach((heads, i)=>{
  heads.style.fontSize = '24px'
  if (i % 2 === 0){
    heads.style.backgroundColor ='green'
  }else {
    heads.style.backgroundColor = 'red'
  }
})

//Adding style font size
const heads5 = document.querySelectorAll('h1')
heads5.forEach((heads, i) => {
  heads.style.fontSize = '24px'
  if (i % 2 ===0){
    heads.style.fontSize ='20px'
  }else{
    heads.style.fontSize = '30px'
  }
})




