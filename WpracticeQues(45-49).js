//Video 45 — Functions Practice

/**Q1. Even or Odd Function
Write a function checkEvenOdd(n) that prints "Even" or "Odd".*/
function checkEvenOdd(n){
    if(n%2 == 0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
checkEvenOdd(23);

// Q2. Factorial Function
// Create factorial(n) using loop.
    let answer = 1;

function factorial(n){
    for(let i = n;i>=1;i--){
        answer = answer*i;
    }
    return answer;
}
console.log(factorial(3));

// Q3. Sum of N Numbers
// Function sumN(n) → returns sum from 1 to n.
function sumN(n){
    let sum = 0;
    for(let i=1 ; i<= n ; i++){
        sum = sum + i;
    }
    return sum;
}
console.log(sumN(4))

// Q4. Prime Check Function
// Function isPrime(n) → return true/false.
function isPrime(n){
    for(let i = 2 ; i<= n/2 ; i++){
        if(n%i== 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(37));

// Video 46 — Arrays Practice

// Q6. Find Maximum in Array
// Input: [3,7,2,9,5] → Output: 9

let arr = [3,7,4,2,9,5];
let a;
console.log(Math.max(...arr));

// Q7. Reverse Array (without reverse())\

let arr2 = [];
let j = 0;
for(let i = arr.length-1 ;i>=0; i--){
    arr2[j] = arr[i];
    j++;
}
console.log(arr2);

// Q8. Count Even Numbers in Array
let evenCount = 0;
for(let i = 0 ; i< arr.length ; i++){
    if(arr[i]%2 == 0){
        evenCount++;
    }
}
console.log(evenCount)
