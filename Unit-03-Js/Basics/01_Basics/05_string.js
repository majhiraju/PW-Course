const name = "raju";
const repoCount = 50;

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Raju-Manjhi-S')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 3)
// console.log(newString);

const anotherString = gameName.slice(-8, 2)
console.log(anotherString);

const newStringOne = "    Raju   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://raju.com/raju%20manjhi"
console.log(url.replace('%20', '-'));

console.log(url.includes('raju'))

console.log(gameName.split('-'));
