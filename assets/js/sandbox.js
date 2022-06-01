'use strict';

let i = 123;

function createCounter1(){
  //debugger
  let i = 0; //closure
  return function counter(){
    return ++i;
  }
}

function createCounter2(initial = 0){//closure - initial
  return function counter(){
    return ++initial;
  }
}



const counter = createCounter2(10); //let initial = 10;
console.log(counter());
console.log(counter());





