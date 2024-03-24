// assignment no 06


// // 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// Uppercase letters: ASCII values 65 to 90
// Lowercase letters: ASCII values 97 to 122
// Numbers: ASCII values 48 to 57

// let value = prompt("enter any value string or no")
// let ascii = value.charCodeAt(0)

// if (ascii> 47 && ascii<= 57){
//     console.log(`Given value is a Number `)
// }

// else if (ascii > 64 && ascii <= 90 ){
//     console.log (`Given value is uppercase alphabet`)
// }

// else if (ascii > 96 && ascii <= 122 ){
//     console.log (`Given value is lowercase alphabet`)
// }


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// let a = +prompt(`enter your first integer`)
// let b = +prompt(`enter your second integer `)

// if (a>b){
//     console.log(`your first integer is larger`)
// }

// else if (a<b){
//     console.log(`your second integer is larger`)
// }
// else {
//     console.log (  `your intgers are EQUAL`)
// }

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// let number = +prompt(`enter any number`)

// if (number > 0){
//     console.log(`number is positive`)
// }
// else if (number < 0){
//     console.log (`number is negative`)
// }
// else {
//     console.log(`number is zero`)
// }

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

//  var string = prompt(`enter any string of length 1`).toLocaleLowerCase()
//   if (string === "a"|| string === "e"|| string === "i"|| string === "o"|| string === "u" ){
//     console.log (`you enter a vowel`)
//   }
//   else {
//     console.log (  `your enter value is not a vowel`)
//   }


// var greeting;
// var hour = 13;
// if (hour < 18) {
// console.log (greeting = "Good day");}
// else{
// console.log (greeting = "Good evening");
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// let  password = "abc"
// let userPassword = prompt(`Enter your password`)

// if (userPassword !== "" && userPassword !== null){

//     if(userPassword == password){
//         console.log (`Corrrect password`)
//     }
//     else {
//         console.log(`your password is incorrect`)
//     }
// }

// else {
//     console.log (`Please enter password`)
// }


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

let userTime = +prompt(`enter time in 24 hours format`)

if (userTime > 1200 && userTime < 2500){
    time = userTime-1200;
    time_pm = time/100
    console.log(`${time_pm}pm`)
}
else if (userTime <= 12 ) {
    console.log(`${userTime}am`)

}

else if (userTime > 12 &&  userTime < 100){
    console.log(`error`)
}
else if (userTime => 100){
   time =  userTime/100
    console.log(`${time}am`)
}


else{
    console.log(`error`)
}