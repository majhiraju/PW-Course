const score = 300
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.4322

// console.log(otherNumber.toPrecision(6));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 2, 5, 7));
// console.log(Math.max(4, 3, 5, 7));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

// Trick and formula

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)