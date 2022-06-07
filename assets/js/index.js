"use strict";
const messages=[];
const form = document.forms.rootForm;
const list = document.getElementById('list');

//const pattern = /^([A-Z][a-z]+ [A-Z]\.)|([А-Я][а-я]+ [А-Я]\.)$/;
const pattern = /^(19[2-9][0-9])|(20([01][0-9]|2[0-2]))$/;
//шаблон проверки валидного названия файла

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = e.target.elements.inputText.value.trim();
  if(pattern.test(inputValue)){
    messages.push(inputValue);
    e.target.reset();
  }
  //HOMEWORK
  //рендерить в список list все сообщения из массива  
  console.log(messages);
});


