"use strict";
const state=[];
const form = document.getElementById('rootForm');
const list = document.getElementById('list');
const pattern = /^[A-Z][a-z]{1,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {target, target:{elements:{inputText}}} = e;
  const inputValue = inputText.value.trim();
  if(pattern.test(inputValue) && !state.includes(inputValue)){
    state.push(inputValue);
    target.reset();
    const li = createElement('li',{classNames:['item']},document.createTextNode(inputValue));
    const btn = createElement('button',
    {typeEvent:'click', 
    handlerEvent:deleteBtnHandler.bind(li),
    dataValue:inputValue},
    document.createTextNode('x'));
    li.append(btn);
    list.append(li);
  }
});

function deleteBtnHandler({target}){
  state.splice(state.indexOf(target.dataset.idValue), 1);
  this.remove(); //this привязали с помощью bind
}

/**
 * 
 * @param {string} tag 
 * @param {object} options 
 * @param {string[]} options.classNames
 * @param {string} options.typeEvent
 * @param {function} options.handlerEvent
 * @param {objects} children 
 * @returns 
 */
 function createElement(tag, {classNames=[],typeEvent='',handlerEvent=null,dataValue=''}, ...children){
  const element = document.createElement(tag);
  if(classNames.length){
    element.classList.add(...classNames);
  }  
  if(dataValue){ 
    element.dataset.idValue = dataValue;
  }
  if(handlerEvent){
    element.addEventListener(typeEvent, handlerEvent);
  }
  element.append(...children);
  return element;
}


