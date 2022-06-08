"use strict";

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  //while(true){}
});

// console.log(1);
// setTimeout(()=>{console.log(3)},0);
// console.log(2);

const logNumberWithDelay = function(){
  let count = 0;
  const identificator = setInterval(
  ()=>{
    console.log(count++);
    if(count>10){
      clearInterval(identificator);
    }
  },
  500);
}
logNumberWithDelay();

//clearInterval(identificator);

/*
написать функцию, которая выводит в консоль числа от 0 до 10 с интервалом в 300мс
*/


// const identificator1 = setInterval(function (){
//   for(let i = 0; i<10; i++){
//     console.log(i);
//   }
// }, 3000);