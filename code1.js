
//Pass by value
/*let x = 10;
let y = x;
x = 20;
console.log(y); */

/*Let students = ["Usman", "Ali", "Nouman"];
students[5] = "Zeeshan";
console.log(students); */

/*var students = ["Usman", "Ali", "Nouman"];
let searchstudents = students.find(findAli);
console.log(searchstudents);
function findAli(std){
    if(std == "Ali") return true;
    else return false;
} */

/*students.splice(1,0,... ["Zahid", "Anwar"]);
console.log(...students);
function findAli(std){
    if(std == "Ali") return true;
    else return false;
} */
//pass by refernce
/*let x = {value:10}
let y = x;
x.value = 20;
console.log(y); */ 

var students = ["Usman", "Ali", "Nouman"];
//let searchstudents = students.findIndex(findAli);
//students[5] = "Zeeshan";
//students.sort();
students.splice(1,0, ... ["Zahid", "Anwar"]);
console.log(...students);
function findAli(std){
    if(std == "Ali") return true;
    else return false;
}
