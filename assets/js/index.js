'use strict';
//create DB with image: квадратная, портретная, альбомная
const imagesDB = [
  'https://englishlib.org/dictionary/img/wlibrary/s/60478f3f2c4d63.37543295.jpg',
  'https://www.prototype-ui.com/wp-content/uploads/2017/03/pERnQ5-772x347.jpg',
  'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/calm-red-sea-1x1-hannes-cmarits.jpg'
];
//create slider
const slider = new Slider(imagesDB);
//img
const image = document.querySelector('.slide>img');
//prev, next
const [prevBtn, nextBtn] = document.querySelectorAll('.slider-conainer>button');

const btnSliderHandler = (direction='next') => ()=> {
  slider.currentIndex = slider[direction==='next'? 'nextIndex' : 'prevIndex'];
  updateView();
}

prevBtn.addEventListener('click', btnSliderHandler('prev'));
nextBtn.addEventListener('click', btnSliderHandler('next'));

function updateView(){
  image.setAttribute('src', slider.currentSlide);
}
updateView();




/*-----------------------------------------------*/


const unique = document.getElementById('unique');

function btnUniqueHandler(event){
  //элемент по которому кликнули
  console.log('target:', event.target);
  //элемент чей обработчик отработал
  console.log('currentTarget:', event.currentTarget)
  // unique.removeEventListener('click', btnUniqueHandler);
  // unique.disabled = true;
}

unique.addEventListener('click', btnUniqueHandler);
//unique.dispatchEvent(new MouseEvent('click'));

window.addEventListener('click', btnUniqueHandler);
document.addEventListener('click', btnUniqueHandler);
document.body.addEventListener('click', btnUniqueHandler);

//window.dispatchEvent(new MouseEvent('click'));


/*
на кнопку добавить обработчик события клик,
который будет логировать количество кликов на кнопку
после 3 кликов  - удалять обработчик с кнопки 
и делать кнопку некликабельной(disabled)
*/
