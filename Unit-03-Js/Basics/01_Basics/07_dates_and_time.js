// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//Spacefic dates

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-13")
let myCreatedDate = new Date("02-16-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// How to change value in second

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// Internationalization
newDate.toLocaleDateString('default', {
    weekday: 'long'
})

