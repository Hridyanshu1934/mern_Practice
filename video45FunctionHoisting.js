// Normal Function Decalaraion
function sayMyName(name){
    console.log(name);
}
sayMyName("Heisenberg")

// Function Hoisting
// Calling of a function can be done before Declaration of the funciton 

sayMyName("Heisenberg")
function sayMyName(name){
    console.log(name);
}


// ----------CLASSES AND OBJECT-------- 
class abc{
// this is a class 
}
const a = new abc();
// this is a object

// ----------FUNCTION AS A STACK----------

function greet(){
    console.log("Hello");
}
function greetMe(greet,name){
    greet();
    console.log("My name is ",name);
}
greetMe(greet,"Hridyanshu");

// ---------- FUNCITONS AS AN ARRAY----------

const arr1 = [
    function (a,b){
        return a+b;
    } ,
    function (a,b){
        return a-b;
    } ,
    function (a,b){
        return a*b;
    } ,
    function (a,b){
        return a/b;
    }
];
let addd = arr1[0];
console.log(addd(1,2));