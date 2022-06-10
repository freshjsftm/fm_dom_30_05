"use strict";

function timeout(ms){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve('hi from timeout')}, ms);
  });
}

timeout(2000)
  .then((info)=>{console.log(info)})
  .catch((info)=>{console.error(info)})



