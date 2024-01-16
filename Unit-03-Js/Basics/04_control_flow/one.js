// +++++++++++ Logic ++++++++++++++++


// if statement 

const isUserLoggedIN = true
const temperature = 41

// if ( temperature === 41 ) {
//     console.log("less than 50");
// } else {

//     console.log("temperature greater than 50");
// }
// console.log("execute")

// comparision operator
// 3 != 2
// 3 == "3"
// >, <, <=, >=, ==, !=, ===, !== 


// scope related

// const score = 300

// if (score > 200) {
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`)




// Short hand notation

const balance = 2000

// if (balance < 3000) console.log("test");


// Nesting

const bal = 400

// if (bal < 300) {
//     console.log("less than 300")
// } else if (bal < 350) {
//     console.log("less than 350")
// } else if (bal < 390) {
//     console.log("less than 390");
// } else {
//     console.log("less than 500");

// }




// real uses and work

const userLoggedIN = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIN && debitCard && 3==3) {
    // console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("Allow to buy course");

}



