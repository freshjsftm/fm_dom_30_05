"use strict";
const state=[];
const form = document.getElementById('rootForm');
const list = document.getElementById('list');
const pattern = /^[A-Z][a-z]{1,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {target, target:{elements:{inputText}}} = e;
  const inputValue = inputText.value.trim();
  if(pattern.test(inputValue)){
    state.push(inputValue);
    target.reset();
    const li = createElement('li',{classNames:['item']},document.createTextNode(inputValue));
    /* Добавить в li кнопку с крестиком */
    list.append(li);
  }
});

/**
 * 
 * @param {string} tag 
 * @param {object} options 
 * @param {string[]} options.classNames
 * @param {objects} children 
 * @returns 
 */
 function createElement(tag, {classNames=[]}, ...children){
  const element = document.createElement(tag);
  if(classNames.length){
    element.classList.add(...classNames);
  }  
  element.append(...children);
  return element;
}


