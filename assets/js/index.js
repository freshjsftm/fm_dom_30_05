'use strict';
const cardsList = document.getElementById('cards-list');
const HTMLCards = actors
                    .filter(({name,photo})=>name || photo)
                    .map((actor)=>createCard(actor));

function createCard(actor){
  const card = document.createElement('li');
  card.classList.add('card-wrapper');

  const container = document.createElement('article');
  container.classList.add('card-container');

  const photoWrapper = document.createElement('div');
  photoWrapper.classList.add('card-photo-wrapper');

  const initials =  document.createElement('div');
  initials.classList.add('card-initials');
  initials.style.backgroundColor = stringToColour(actor.name);
  initials.append(document.createTextNode(actor.name[0]|| 'NN')); /* home work */

  const photo = document.createElement('img');
  photo.classList.add('card-photo');
  photo.setAttribute('src', actor.photo);
  photo.setAttribute('alt', actor.name);
  photo.addEventListener('error', photoErrorHandler);

  photoWrapper.append(initials, photo);

  const fullname = document.createElement('h2');
  fullname.classList.add('card-fullname');
  fullname.append(document.createTextNode(actor.name || 'Noname'));

  const description = document.createElement('p');
  description.classList.add('card-description');
  description.append(document.createTextNode(actor.birthdate || 'Month d, YYYY'));

  container.append(photoWrapper,fullname,description);

  card.append(container);
  return card;
}

cardsList.append(...HTMLCards);

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
