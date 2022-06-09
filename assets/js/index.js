"use strict";

function loadImage(path){
  const image = new Image();
  image.src = path;

  return new Promise((resolve, reject)=>{
    image.addEventListener('load', ()=>{
      resolve(image);
    });
    image.addEventListener('error', ()=>{
      reject(new Error('path invalid'));
    });
  });
}

loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg/1200px-Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg')
  .then((image)=>{document.body.prepend(image)})
  .catch((err)=>{console.log(err)})






