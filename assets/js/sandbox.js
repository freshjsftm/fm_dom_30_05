"use strict";

const user={
  info:{
    name:'Elon',
    contact:{
      phone: '123'
    }
  }
} 
//const phone = user.info.contact.phone;
const {info:{contact:{phone}}} = user;