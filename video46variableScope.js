// -------- GLOBAL SCOPE ----------
var age = 23;

function f1(){
    console.log(age);
}

// --------- FUNCTION SCOPE ---------

function f2(){
    var age2 = 32;
}

console.log(age2);

// -------- BLOCK SCOPE -----------

{
    let age3 = 54;
}

console.log(age3);

// ----------- TEMPORAL DEAD ZONE ----------

console.log(name);
var name = "Hridyanshu";
console.log(name);

console.log(surName);
let surName = "Khattar";
console.log(surName);