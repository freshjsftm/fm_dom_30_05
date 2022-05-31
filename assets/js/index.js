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

prevBtn.addEventListener('click', ()=>{
  slider.currentIndex = slider.prev();
  updateView();
});
nextBtn.addEventListener('click', ()=>{
  slider.currentIndex = slider.next();
  updateView();
});

//установить путь в атрибут src
function updateView(){
  image.setAttribute('src', slider.currentSlide);
}
updateView();
