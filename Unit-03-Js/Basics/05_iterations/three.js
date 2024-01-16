// forof loop +++++++++++++++++++++

["", "", ""]
[{}, {}, {}]


// example for Number

const arr = [1, 2, 3, 4, 5, 6, 7]

for (const num of arr) {
  // console.log(num);
}

// example for String

const name  = ["raju", "rajesh", "anup", "hitesh sir"]

for (const nam of name) {
// console.log(`value is ${nam}`);
}


const greeting = "Hello World!"

for (const greet of greeting) {
  // console.log(`Each char is ${greet}`)
}


// Maps ++++++++++++++++++++++++++++++++++++++

 const map = new Map()
 map.set('IN', 'India')
 map.set('Fr', 'france')
 map.set('USA', 'United States of America')

//  console.log(map);

 for (const [key, value] of map) {
  // console.log(key, ':-', value);
 }


//  example of Object


const myObject = {
  'game1': 'FootBall',
  'game2': 'cricket'
}

for (const [key, value] of myObject) {
  console.log(key, ':-', value)
}

// object not iteratable
