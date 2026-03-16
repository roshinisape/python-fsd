// const header = document.getElementById('header');
// console.log(header);
// header.style.color = 'blue';
// // header.style.background = 'red';

// // const classSelector = document.getElementsByClassName('classSelector');
// // console.log(classSelector);
// // classSelector[0].style.color = 'blue';
// // classSelector[1].style.color = 'blue';
// //classSelector[2].style.color = 'blue';
// //    const arr = Array.from(classSelector);
// //    console.log(classSelector);
// //    for(let i=0; i<arr.length; i++){
// // arr[i].style.color = 'blue';
// //    }
// //    const h3Selector = document.getElementsByTagName('h3');
// //    arr.forEach((element) => {
// // element.style.Color = 'blue';
// // element.style.background = 'red';
// //    });
// //const classSelector = document.querySelector('.classSelector');
// //  console.log(classSelector);
// //classSelector.style.color = 'blue';

// //  const h3 = document.querySelectorAll('h3');
// //  console.log(h3);

// //      h3.style.color = 'blue';
// // const classSelectorAll = document.querySelectorAll('.classSelector');
// //classSelectorAll.forEach((element) => {
// //  element.style.color = 'blue';
// //});
// //const h3= document.querySelectorAll('h3');
// //h3.forEach((element) => {
// //  element.style.color = 'blue'; 
// //})

// const header = document.querySelector('header');
// const main = document.getElementById('main');
// header.textContent = "Hello Mister!, how are you?"
// main.innerHTML = '<p> This is inner html </p>';

// const inner=document.createElement("div")

// inner.innerHTML="<p>hello</p>"

// outerHeight.approchChild(inner)
const submitBtn=document.getElementById("submitBtn");
const output=document.getElementById("output");
console.log(userName)

//input event
submit.Btn.addEventListener("click",(e)=>{
  const username=document.getElementById("username").Value;
e.preventdefault();
output.innerHTML=username
})