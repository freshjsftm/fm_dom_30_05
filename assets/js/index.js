"use strict";

const user = {
  name:'Elon',
  sname:'Musk',
  age:50,
  getFullName(){
    return `${this.name} ${this.sname}`;
  },
  isMale:true,
  pet: undefined,
  isUkraine: null,
  [Symbol('test')]:123,
  children:['one','two'],
  cars:{
    car1:{color:'red'},
    car2:{color:'pink'},
  },
}
console.log(user);
const serializeUser = JSON.stringify(user);
console.log(serializeUser);

const deserializeUser = JSON.parse(serializeUser);
console.log(deserializeUser);
