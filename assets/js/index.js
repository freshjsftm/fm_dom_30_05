"use strict";
const root = document.getElementById('root');

const mapSocialClass = new Map();
mapSocialClass.set('www.facebook.com', "fa-facebook");


/**
 * 
 * @param {string} tag 
 * @param {object} options 
 * @param {string[]} options.classNames
 * @param {objects} children 
 * @returns 
 */
 function createElement(tag='div', {classNames=[],attributes={},events={}}, ...children){
  const element = document.createElement(tag);
  if(classNames.length){
    element.classList.add(...classNames);
  }
  for (const [nameAttr, valueAttr] of Object.entries(attributes)) {
    element.setAttribute(nameAttr, valueAttr);
  }
  for (const [typeEvent, handlerEvent] of Object.entries(events)) {
    element.addEventListener(typeEvent, handlerEvent);
  }
  element.append(...children);
  return element;
}

function createCard(actor){
  // const url = new URL(user.contacts[0]);
  // const a = document.createElement('a');
  // a.classList.add(mapSocialClass.get(url.hostname));
  // console.log(a)
  return createElement('article',{}, document.createTextNode(actor.firstName) );
}


fetch("./data.json")
  .then((response) => response.json())
  .then((actors) => {   
    const cards = actors.map((actor)=>createCard(actor));
    root.append(...cards);
  })
  .catch((error) => {
    document.body.prepend(document.createTextNode('500'));
    if (error instanceof TypeError) {
      console.error("Ошибка соединения: ", error);
    }else if (error instanceof SyntaxError) {
      console.error("Проверь запятые: ", error);
    }else{
      console.error(error);
    }
  })
