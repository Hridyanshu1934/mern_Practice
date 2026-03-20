/** -------------OBJECTS---------- */
let personalDetails = {
    age: 25,
    name: "Hridyanshu Khattar",
    height: "6ft",
    weight: 95,
}
// console.log(personalDetails.age);
/** -------------ARRAYS---------- */
let arr = ["Hridyanshu",1,2,3,true];
copyArr = new Array("Hridyanshu",1,2,3,true);
// copyArr.push(false); // add element to right side of array
// console.log(copyArr);
// copyArr.pop(); // remove element from right side of array
console.log(copyArr);
let arr1 = [10,20,30,5,7];
let ansArr1 = arr1.map((num)=>{
    return num*num;
})
console.log(ansArr1);

let evenArr1 = arr1.filter((num) =>{
    if(num%2 == 0){
        return true;
    }
    else{
        return false;
    }
})
console.log(evenArr1);