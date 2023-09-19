// for of loop

// ["", "", ""]
// [{}, {}, {}]

// example of array  +++++++++++++++

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

// example of string  +++++++++++++

const name = "Raju Manjhi";

for (const nam of name) {
  // console.log(`The name is ${nam}`)
}

// Maps ++++++++++++++++++++ (It is Object and holed key value pair)

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

// console.log(map)

// set forof loop in map
for (const [key, value] of map) {
  // console.log(`key, ':-' value`)
}



// example of Object  +++++++++

const myObject = {
  game1: "NFS",
  game2: "Superman",
};

// for (const [key, value] of myObject) {
//   console.log(key, value)
// }
