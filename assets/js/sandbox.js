"use strict";

let i = 123;

function createCounter() {
  let i = 0; //closure
  return {
    increment() {
      return ++i;
    },
    decrement() {
      return --i;
    },
  };
}

const counter = createCounter();
console.log(counter.increment());
console.log(counter.decrement());

const counter2 = createCounter();

function createCounter1() {
  let i = 0; //closure
  return function counter() {
    return ++i;
  };
}

function createCounter2(initial = 0) {
  //closure - initial
  return function counter() {
    return ++initial;
  };
}

// function createAdder(n) {
//   //let sum = n; //closure
//   return function adder(m) {
//     return (n += m);
//   };
// }

// function createAdder(n){
//   return (m)=> n+=m;
// }

const createAdder = (n=0) => (m=0) => (n += m);


const adder = createAdder(100);
console.log(adder(15)); // 115
console.log(adder(50)); // 165
console.log(adder(10)); // 175

// const createAdder = ((n) => ((m=0) => n+=m))
// const adder = createAdder(100)
// adder(15)
// adder(150)
// console.log(adder(0))
