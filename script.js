'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const contextText = document.querySelector('.contextText');
console.log(contextText);
const CONTEXT_TEXTS ={
  JS1: "JavaScript syntax is similar to other programming languages like Java and C++, making it accessible to many developers",

  JS2: " Language: It runs on the user's browser, enabling dynamic updates without requiring a page reload.",

  JS3: "The standard that JavaScript follows is ECMAScript. ES6 (ECMAScript 2015) introduced significant enhancements like arrow functions, classes, and template literals." ,

  JS4: " Use var, let, or const to declare variables. let and const were introduced in ES6." ,

  JS5: "JavaScript has dynamic typing, meaning variables can hold values of any type. Common data types include numbers, strings, and booleans." ,

  JS6: " You can declare functions using the function keyword or use arrow functions introduced in ES6." ,

  JS7: " Objects are collections of key-value pairs, and arrays are ordered lists. Both are fundamental data structures." ,

  JS8:"  JavaScript interacts with the Document Object Model (DOM) to manipulate the content and structure of web pages dynamically. " , 

  JS9: "JavaScript uses callbacks, promises, and async/await for handling asynchronous operations, making it suitable for tasks like fetching data from servers. " ,

  JS10: " There are popular libraries like jQuery and powerful frameworks like React, Angular, and Vue.js that simplify and enhance JavaScript development. "
}




const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeModalEsc = function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
}

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden'); 
    const valueText = Object.values(CONTEXT_TEXTS);
    contextText.textContent = `${valueText[i]}`
   

  });

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown',closeModalEsc );
