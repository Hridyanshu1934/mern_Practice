// Write a function that divides two numbers. Use try...catch to handle division by zero.

function divideTwoNums(a,b){
    try {
      return a/b;  
    } catch (error) {
        if(b==0){
            console.log("Zero is in the denominator so infinity");
        }
    }
}
console.log(divideTwoNums(10,0));