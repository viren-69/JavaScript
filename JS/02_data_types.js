"use strict"; // this treats all the code of JS as newer vesion.

// alert("hello"); // we are using node.js NOT browser.
let score = "33abc"; // for null --> 0; for undefined --> NaN.; for Boolean --> 0,1;

// console.log(typeof score);
// console.log(typeof (score));

let valueInNum = Number(score); // wrapper class.
// console.log(typeof valueInNum);
// console.log(valueInNum); // it will convert it to number but print as NaN(Not a Number).

let LoggedIn = 0;

let BooleanLoggedIn = Boolean(LoggedIn); // same way you can convert anything to string using 'String' keyword
console.log(BooleanLoggedIn);
// 1 => true
// 0 => false
// Any other number => true
// "" => false
// "viren" => true
