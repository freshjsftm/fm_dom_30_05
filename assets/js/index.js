'use strict';
const cardsList = document.getElementById('cards-list');
const HTMLCards = actors
                    .filter(({name,photo})=>name && photo)
                    .map((actor)=>createCard(actor));

function createCard(actor){
  const h2 = createElement('h2',{classNames:['card-fullname']},
    document.createTextNode(actor.name || 'Noname')
  );
  const p = createElement('p',{classNames:['card-description']},
    document.createTextNode(actor.birthdate || 'Month d, YYYY')
  )
  const article = createElement('article',{classNames:['card-container']},
    createWrapper(actor),h2,p);
  return createElement('li',{classNames:['card-wrapper']}, article );
}

cardsList.append(...HTMLCards);
/**
 * 
 * @param {string} tag 
 * @param {object} options 
 * @param {string[]} options.classNames
 * @param {objects} children 
 * @returns 
 */
function createElement(tag, {classNames}, ...children){
  const element = document.createElement(tag);
  element.classList.add(...classNames);
  element.append(...children);
  return element;
}

function createImage({id, photo, name}){
  const img = document.createElement('img');
  img.classList.add('card-photo');
  img.setAttribute('src', photo);
  img.setAttribute('alt', name);
  img.dataset.id = `wrapper-${id}`;
  img.addEventListener('error', photoErrorHandler);
  img.addEventListener('load', photoLoadHandler);//добавили картинку родителю
}

function createWrapper(actor){
  const {id, name} = actor;
  const photoWrapper = document.createElement('div');
  photoWrapper.classList.add('card-photo-wrapper');
  photoWrapper.setAttribute('id', `wrapper-${id}`);

  const initials = document.createElement('div');
  initials.classList.add('card-initials');
  initials.style.backgroundColor = stringToColour(name);
  initials.append(document.createTextNode(name[0]|| 'NN')); /* home work */

  photoWrapper.append(initials);
  createImage(actor);
  return photoWrapper;
}

function photoLoadHandler({target}){
  const parent = document.getElementById(target.dataset.id);
  parent.append(target);
}

/* handler */
function photoErrorHandler({target}){
  target.remove();
  return;
}

/* utilits */
function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).slice(-2);
  }
  return colour;
}
