"use strict";

fetch("./data.json")
  .finally(() => {
    console.log("start");
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    document.body.prepend(document.createTextNode('500'));
    console.dir(error);
    if (error instanceof TypeError) {
      console.error("Ошибка соединения");
    }
  })
  .finally(() => {
    console.log("end");
  });
