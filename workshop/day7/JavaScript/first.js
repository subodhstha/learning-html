var username;

username = "\"test user\"";

console.log(username);

console.warn("something is wrong here");

// console.error("OPPA! Page content failed to load!");

// constant
const USER = "subodh";

// USER = "change name";

console.log(USER);

// let
let firstName = "Subodh";
let lastName  = "Shrestha";

//concatenation, here + workas a concatenation operator, which joins two strings 
console.log(firstName + lastName);

//data types
    // Number
    // Boolean
    // undefined
    // null
    // String
    // Object
    //symbol

var firstNumber = 10;
var secondNumber = 20;

console.log(firstNumber + secondNumber);
console.log(typeof 52);
console.log(typeof "subodh");
console.log(typeof 1.1);
console.log(typeof false);

let programmer = true;
let learn = false;
console.log(programmer);
console.log(learn);

//bug that is not improve
var firstValue = null;
console.log(firstValue);
console.log(typeof firstValue);

const userDetail={
    firstName:"subodh",
    lastName : "shrestha",
    age : "20",
    tel : "222-222-2222"
};
console.log(typeof userDetail);

const countryPrimeMinister={
    nepal : "nepal pm",
    pakistan: "pakistan pm"
};

console.log(countryPrimeMinister.nepal)