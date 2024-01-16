// Primitive

// 7 Types : String, Number, Boolean, null, Undefined, symbol, Bigint

// JavaScript dynamic type language

// Number type
const score = 100
const scoreValue = 100.3

//Boollean type
const isLoggedIn = false

//null type
const outsideTemp = null


// Undefined type
let userEmail;

// symbol type
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

//symbol type, String Type
// const id = symbol('123')
// const anotherId = symbol('123')
// console.log(id === anotherId);

// Bigint types
// const bigNumber = 123435421321344n


// Reference (Non Prinitive) ****************

// Array, objects, Functions

//Array Type
const heros = ["shaktiman", "Nagraj", "Doga" ];

//Objects type
let myObj = {
    name: "Raju",
    age: 22,
}

// Functions type
const myFunction = function(){
    // console.log("Hello world");
}

// How to know any value datatype
// console.log(typeof myFunction);


//++++++++++++++++++++++++++++++++++++

// How to work memory in js

// Stack(Primitive),Heap(reference or Non-Primitive)
let myYoutubename = "manjhirajudotcom"
// How to change value
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
      email: "user@google.com"
}

let userTwo = userOne

userTwo.email = "raju@google.com"

console.log(userOne.email);
console.log(userTwo.email);

