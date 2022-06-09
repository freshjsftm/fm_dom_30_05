"use strict";

// const promise = fetch('./assets/js/data.json');

// promise.then((response)=>{
//   console.log('ok');
//   const jsonPromise = response.json();
//   jsonPromise.then((data)=>{
//     console.table(data)
//   })
// });

fetch('./assets/js/data.json')
  .then((response)=>response.json(), (err)=>{console.log(err)})
  .then((data)=>{
    data.forEach((user)=>{console.log(user.name)})
  }, (err)=>{console.log(err)})
