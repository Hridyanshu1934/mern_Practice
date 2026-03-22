// ------- COMPILE TIME ERROR-----------

//console.log(1;


// -------- RUNTIME ERROR-------------

console.log(X);


// ---------- ERROR HANDLING -----------

try{
    // block which may contain an error
    console.log(x);
}
catch(error1){
    // block which contains what to do when error in try block 
    console.log("Your have not defined the variable");
    throw new Error ("Variable Custom error");
}
finally{
    console.log("This will run regardless")
}