// singleton

// singleton make to consteructor


// object literals

// Symbol declaration
const mySym = Symbol("key1")



const JsUser = {
    name: "Raju",
    "full name": "Raju Manjhi",
    [mySym]: "mykey1",
    age: 19,
    location: "Shaktifarm",
    email: "manjhiraju000@gmail.com",
    isLoggedIn: "false",
    lastLoginDays: ["Manday", "Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["location"]);
// console.log(JsUser["full name"]);

// console.log(JsUser.mySym)

JsUser.email = "manjhiraju0122@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "manjhiraju@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



