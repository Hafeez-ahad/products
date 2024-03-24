// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

let a = +prompt('enter your number');
console.log("the value of a is: " + a );
console.log("--------------------------")

let b = ++a;
console.log ("the value of ++a is:" + b);
console.log("the value of a is now:" + a + "\n\n" );

let c = a++;
console.log  ("the value of a++ is: " + c);
console.log  ("the value of a is: " + a + "\n\n");

let d = --a;
console.log ("the value of --a is: " + d  );
console.log ("the value a is now: " + a + "\n\n")

let e = a--;
console.log ("the value of a-- is: " + e);
console.log ("the value of a is now " + a)


let a = 2;
let b = 1;
let result = --a - --b + ++b + b--;
             
console.log ("result " + result);



// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.

// let sub_1 = prompt("enter your subject  name")
// let sub_2 = prompt("enter your subject  name")
// let sub_3 = prompt("enter your subject  name")

// let marks_sub01 = +prompt("enter marks of subject " + sub_1)
// let marks_sub02 = +prompt("enter marks of subject " + sub_2)
// let marks_sub03 = +prompt("enter marks of subject " + sub_3)

// let t_marks = 100

// let percentage_1 = (marks_sub01/100*100)
// let percentage_2 = (marks_sub02/100*100)
// let percentage_3 = (marks_sub03/100*100)

// let total_obtained = (marks_sub01 + marks_sub02 + marks_sub03)  
// let total_percentage = (total_obtained*100/300)


// document.write(
//     "<table>" + 
//     "<tr><th>Subject</th><th>obtained marks</th><th>total percentage</th><th>percentage</th></tr>"+ 
//     "<tr><td>" + sub_1 + "</td><td>" + marks_sub01 + "</td><td>100</td>" + "<td>" + percentage_1 + "%</td></tr>" +
//     "<tr><td>" + sub_2 + "</td><td>" + marks_sub02 + "</td><td>100</td>" + "<td>" + percentage_2 + "%</td></tr>" +
//     "<tr><td>" + sub_3 + "</td><td>" + marks_sub03 + "</td><td>100</td>" + "<td>" + percentage_3 + "%</td></tr>" +
//     "<tr><th></th><th>" + total_obtained + "</th><th>300</th><th>" + total_percentage + "%</th></tr>"
// )