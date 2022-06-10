"use strict";

console.log('start');   ///sin
setTimeout(             ///sin
  ()=>{
  console.log('setTimeout');    //makro
},0);
const pr = new Promise((resolve, reject)=>{  ///sin
  console.log('start promise');   ///sin
  resolve();                      ///sin
  reject();                       ///sin
  console.log('end promise');     ///sin
});
pr                                ///sin
  .then(                          ///sin
    ()=>{                         //mikro
    console.log('resolve start');        ///sin
    setTimeout(()=>{
      console.log('setTimeout 2');    //makro
    },0);
    console.log('resolve end'); 
  })
  .catch(                          ///sin
    ()=>{                         //mikro
    console.log('reject')
  })
  .finally(                          ///sin
    ()=>{                         //mikro
    console.log('finally')
  })
console.log('end');                   ///sin
