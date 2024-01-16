// Residtrstion Form

const accountId = 12345;
let accountEmail = "manjhiraju07@gmail.com";
var accountPassword = "123345";
accountCity = "Shaktifarm";
let accountState;

//Invatigation

// accountId = 2 //not allowed

accountEmail = "manjhi2@gmail.com";
accountPassword = "231243";
accountCity = "Bangaluru";

console.log(accountId);

/*
prefer not to use var 
becouse of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
