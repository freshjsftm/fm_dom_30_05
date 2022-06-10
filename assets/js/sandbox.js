"use strict";

// try {} catch{}
// try {} finally{}

console.log("start");
try {
  console.log("try 1");
  if (true) {
    throw new Error("error!!!");
  }
  if (true) {
    throw new Error("error 2!!!");
  }
  console.log("try 2");
} catch (error) {
  if (error instanceof TypeError) {
    console.error("TypeError: ", error);
  } else if (error instanceof SyntaxError) {
    console.error("SyntaxError: ", error);
  } else {
    console.error(error);
  }
} finally {
  console.log("finally");
}
console.log("end");
