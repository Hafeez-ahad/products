// ASSIGNMENT 05


// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// let city = prompt("enter your city name").toUpperCase();
// if(city === "KARACHI"){
//     document.write("welcome to city of lights")
// }
// else{
//     document.write("welcome")
// }


// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning

// let gender = prompt("enter your gender ").toLocaleLowerCase()

// if (gender == "male")
// {
//     document.write("welcome sir")
// }
// else if (gender == "female"){
//     document.write("welcome maa'm")

// }

// else {
//     document.write("error")
// }


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color

// let color = prompt("enter traffic color").toLowerCase()

// if (color == "red"){
//     document.write("Must stop")
// }

// else if (color == "yellow"){
//     document.write("ready to go")
// }

// else if(color == "green"){
//     document.write("go")
// }

// else{
//     document.write("error")
// }

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// let remaining_fuel = +prompt("enter remaining fuel in your car in liters");
// if (remaining_fuel < "0.25"){
//     document.write ("Please refill your fuel!");

// }
// else {
//     document.write ("ok! Drive carefully")
// }


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.


//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }   true



// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }   false


// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }   

// if (c === 13){
//     alert("condition 2 is true");
//     }
//  if (++c < 14){
//         alert("condition 3 is true");
//         }



//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }



// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// let marks_total = +prompt ("Enter total marks in three subjects");
// let obtained_total = +prompt("Enter total obtained marks in three subjects")
// let percentage = (obtained_total/marks_total*100) 


//  if (percentage > 100){
//     document.write ("wrong entery ")
// }
// else if (percentage >= 80  )
// {
//     document.write ("Total Marks:" + marks_total + "<br>")
// document.write ("Obtained Marks: " + obtained_total + "<br>")
// document.write (percentage  + "%" + "<br>")

//     document.write("Grade A-one" + "<br>")
//     document.write("Remarks: Excellent")


// }

// else if (percentage >= 70  )
// {
//     document.write ("Total Marks:" + marks_total + "<br>")
// document.write ("Obtained Marks: " + obtained_total + "<br>")
// document.write (percentage  + "%" + "<br>")

//     document.write("Grade A" + "<br>")
//     document.write("Remarks: Good")
 
// }

// else if (percentage >= 60)
// {
//     document.write ("Total Marks:" + marks_total + "<br>")
// document.write ("Obtained Marks: " + obtained_total + "<br>")
// document.write (percentage  + "%" + "<br>")

//     document.write("Grade b" + "<br>")
//     document.write("Remarks: You need improvement")
 
// }

// else if (percentage < 60)
// {
//     document.write ("Total Marks:" + marks_total + "<br>")
// document.write ("Obtained Marks: " + obtained_total + "<br>")
// document.write (percentage  + "%" + "<br>")

//     document.write("FAil" + "<br>")
//     document.write("Remarks: Sorry")
 
// }


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.



// let secret_number = 2 ;
// let input_number = +prompt("Guess the secret NO. ranging from 1 to 10");

//   if  (input_number == secret_number) {
//     document.write ("BINGO! Correct answere")

//  }
 
//  else if (input_number == --secret_number){
//     document.write ("You are close enogh to secret No.")
//  }

//  else {
//     document.write("Wrong Guess! Try it one more time ")
//  }

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// let number = +prompt("enter your number");
// let reminder = number % 3 

//  if (reminder == 0) {
//     document.write("Your number is divisible of 3")
//  }

//  else {
//     document.write("Your number is not a divisible of 3")
//  }

//  9. Write a program that checks whether the given input is an
// even number or an odd number.

// let number = +prompt("enter your number");
// let reminder = number % 2

//  if (reminder == 0) {
//     document.write("Your number is EVEN")
//  }

//  else {
//     document.write("Your number is ODD")
//  }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// let tem = +prompt("Enter temperature");

// if (tem > 40){
//     document.write("Its to hot outside")
// }
// else if (tem > 30 ){
//     document.write("The weather todya is normal")
// }

// else if (tem > 20 ){
//     document.write("Todya weather is cool")
// }
// else if (tem > 10 ){
//     document.write("OMG! todya weather is too cold")
// }

// else if (tem <= 10){
//     document.write("freeze")
// }

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number;
// c. Operation (+, -, *, /, %)
// Compute

let first_number = +prompt("enter first number")
let Second_number = +prompt("enter second number")
let operator = prompt("Enter sign (+, -, *, /, %)")

let add = first_number + Second_number ;
let sub = first_number - Second_number;
let mul = first_number * Second_number;
let div = first_number / Second_number;
let Mod = first_number % Second_number;

if (operator == "+" ) {
    alert(add)
}
else if(operator == "-") {
    alert(sub)
}
else if(operator == "*") {
    alert(mul)
}
else if(operator == "/") {
    alert(div)
}

else if(operator == "%") {
    alert(Mod)
}
