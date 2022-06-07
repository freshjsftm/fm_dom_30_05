"use strict";
const messages=[];
const form = document.forms.rootForm;
const list = document.getElementById('list');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = e.target.elements.inputText.value.trim();
  if(inputValue){
    messages.push(inputValue);
    e.target.reset();
  }
  //HOMEWORK
  //рендерить в список list все сообщения из массива  
  //console.log(messages);
});

