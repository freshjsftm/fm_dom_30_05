'use strict';
const cardsList = document.getElementById('cards-list');
const HTMLCards = actors
                    .filter(({name,photo})=>name && photo)
                    .map((actor)=>createCard(actor));

function createCard(actor){
  const card = document.createElement('li');
  card.classList.add('card-wrapper');

  const container = document.createElement('article');
  container.classList.add('card-container');

  const fullname = document.createElement('h2');
  fullname.classList.add('card-fullname');
  fullname.append(document.createTextNode(actor.name || 'Noname'));

  const description = document.createElement('p');
  description.classList.add('card-description');
  description.append(document.createTextNode(actor.birthdate || 'Month d, YYYY'));

  container.append(createWrapper(actor), fullname,description);

  card.append(container);
  return card;
}

cardsList.append(...HTMLCards);

function createImage({photo, name}){
  const img = document.createElement('img');
  img.classList.add('card-photo');
  img.setAttribute('src', photo);
  img.setAttribute('alt', name);
  img.addEventListener('error', photoErrorHandler);
  return img;
}

function createWrapper(actor){
  const {name} = actor;
  const photoWrapper = document.createElement('div');
  photoWrapper.classList.add('card-photo-wrapper');

  const initials = document.createElement('div');
  initials.classList.add('card-initials');
  initials.style.backgroundColor = stringToColour(name);
  initials.append(document.createTextNode(name[0]|| 'NN')); /* home work */

  photoWrapper.append(initials, createImage(actor));
  return photoWrapper;
}


/* handler */
function photoErrorHandler({target}){
  target.remove();
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
