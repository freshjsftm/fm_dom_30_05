"use strict";


const myPromise = new Promise(executor);
function executor(resolve, reject){
  Math.random()>0.5?resolve('ok'):reject('(((');
}
myPromise
  .then((response)=>{console.log(response)})
  .catch((error)=>{console.log(error)})






