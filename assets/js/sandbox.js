"use strict";

function handlePromise(promise) {
  return promise
    .then((data) => {
      console.log("in func: ", data);
    })
    .catch((err) => {
      console.error("in func: ", err);
    });
}

const number = 45;

// const numberPromise = new Promise((resolve, reject)=>{
//   resolve(number);
// })

handlePromise(Promise.resolve(number));
handlePromise(Promise.reject('error'));
