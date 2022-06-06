"use strict";
const [link] = document.links;
link.addEventListener("click", (e) => {
  e.preventDefault();
});

const form1 = document.getElementById("rootForm");
const form2 = document.forms["rootForm"];
const form = document.forms.rootForm;
//const inpText = document.forms.rootForm.elements.inputText;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.elements.inputText.defaultValue);
  console.dir(e.target.elements.inputText.value);
});
