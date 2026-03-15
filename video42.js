/** for(let i = 0 ; i<10 ; i++){
    console.log("Hello World");
}**/
/**FOR LOOP */
/**for(let j = 8 ; j>0 ; j--){
    if(j== 7){
        continue;
    }
    else{
        console.log(j);
    }
}*/
/**----------- WHILE LOOP ---------- */
let i = 1;
while(i<=10){
    if(i==5){
        i++;
        continue;
    }
    else{
    console.log(i);
    i++;
    }
}
/** --------- STRINGS --------- */
let name = "Hridyanshu Khattar";
let newName = "My name is Hridyanshu Khattar";
// console.log(name);
// console.log(newName);
let concatenateNames = `${name} ${newName}`;
console.log(concatenateNames.toUpperCase());
console.log(name.substring(0,11));
// Here 0th character is included but 11th is not included
let splittedName = newName.split(' ');
let jointName = splittedName.join('-');
console.log(jointName);