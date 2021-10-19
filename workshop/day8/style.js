// var username;

// username = "\"test user\"";

// console.log(username);

// console.warn("something is wrong here");

// // console.error("OPPA! Page content failed to load!");

// // constant
// const USER = "subodh";

// // USER = "change name";

// console.log(USER);

// // let
// let firstName = "Subodh";
// let lastName  = "Shrestha";

// //concatenation, here + workas a concatenation operator, which joins two strings 
// console.log(firstName + lastName);

// //data types
//     // Number
//     // Boolean
//     // undefined
//     // null
//     // String
//     // Object
//     //symbol

// var firstNumber = 10;
// var secondNumber = 20;

// console.log(firstNumber + secondNumber);
// console.log(typeof 52);
// console.log(typeof "subodh");
// console.log(typeof 1.1);
// console.log(typeof false);

// let programmer = true;
// let learn = false;
// console.log(programmer);
// console.log(learn);

// //bug that is not improve
// var firstValue = null;
// console.log(firstValue);
// console.log(typeof firstValue);

// const userDetail={
//     firstName:"subodh",
//     lastName : "shrestha",
//     age : "20",
//     tel : "222-222-2222"
// };
// console.log(typeof userDetail);

// const countryPrimeMinister={
//     nepal : "nepal pm",
//     pakistan: "pakistan pm"
// };

// console.log(countryPrimeMinister.nepal)



//day 8

// input/output (prompt, confirm, console.log(), alert())

// let msg= prompt("Please enter the pin code to continue.");
// console.log(msg);

// let is_sure = confirm("are you sure");
// console.log(is_sure);

// alert("log in sucessfull");

// console.log("sda", 23, {});

//conditionals
// if (true) {
//     console.log("the code rain");
//     console.log("123");
// }

// if (false) {
//     console.log("the code rain");
// }
// else {
//     console.log("next");
// }

// let has_pc = true;
// if(has_pc){
//     console
// }
// else{
//     console.log();
//     console.log();
// }

// if ...elseif....else

// let user_name = "subodh";
// if(user_name == "stha") {
//     console.log("matched");
// }
// else{
//     console.log("opps! sth went wrong");
// }

// if....else if.... else

// let pin_code = 111;

// if (pin_code == 900) {
//     console.log(900 + "is pin");
// } else if(pin_code==100) {
//     console.log(100 + "is pin");
// } else if(pin_code==300) {
//     console.log(300 + "is pin");
// }  else if(pin_code==111) {
//     console.log("matched");
// } else {
//     console.log("sorry, try again");
// }

//scenario
/*
    1. deposited Rs.500 in bank account
    2. get Rs. 50 as a interest
    3. government took 
*/
// let main_blc = parseInt(prompt("enter main balance"));
// let main_blc = 10000;
// let interest_earn = 0;

// if (main_blc==2000){
//     interest_earn=20;
// }
// else if(main_blc==10000){
//     interest_earn= 100;
// }
// else if(main_blc==50000){
//     interest_earn= 500;
// }
// else if(main_blc==3000){
//     interest_earn= 30;
// }
// else{
//     alert("invalid main balance to give interest");
// }

// alert("you erned Rs."+ interest_earn +"as an interst");



// switch case
// let my_fav_color = "red";

// switch (my_fav_color){
//     case "yellow":
//         console.log("wow, it match, yellow great");
//         break;
//     case "green":
//         console.log("wow, it match,green is nice one");
//         break;
//     case "teal":
//         console.log("wow, it match, accepatable");
//         break;
//     case "red":
//         console.log("wow, i found it");
//         break;
//     default:
//         console.log("Try next one");
// }

// let age = 22;
// switch(age){
//     case 10:
//         console.log("your age is 10");
//     break;
//     case 20:
//         console.log("your age is 20");
//         break;
//     case 22:
//         console.log("your age is 22");
//         break;
//     default:
//         console.log("no age matched")
// }

// switch(new Date().getDay()){
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Sautrday");
//         break;
//     default:
//         console.log("Invalid input")
// }

//loop

//for loop
// for (let i = 0; i < 10; i++) {
//     // console.log("subodh");
//     console.log(i);
// }

//while loop
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

//do while
// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while (i <=10);

//for in loop

// let person = {
//     name: "subodh",
//     email: "shresthasubodh73@gmail.com",
// }

// for(let prop in person) {
//     console.log(prop);
// }

//for of loop

// let  arr=["subodh", "shresthasubodh73@gmail.com"];
// for (let val in arr) {
//     console.log(val);
// }

//use of continue
for (let i = 0; i <10; i++) {
    if (i==5){
    continue;
    }
    console.log(i);
}