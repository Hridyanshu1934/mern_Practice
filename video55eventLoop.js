function sayMyName(){
    console.log("Hridyanshu Khattar");
}

// Sync Code
console.log("Start");

// Async Code

setTimeout(sayMyName,5000);

/* This async code is handled by evnet loop in JavaScript
This means that this part runs when all the sync code has been run */

// Sync Code
console.log("End");
