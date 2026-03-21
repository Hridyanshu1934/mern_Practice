// ----------- CLASSES -----------
class human{
    age = 23;
    #weight = 80;
    height = 6;

    // Default functions 
    constructor(newAge,newHeight){
        this.age = newAge;
        this.height = newHeight;
    }

    walking(){
        console.log("I am walking");
    }
    running(){
        console.log("I am running");
    }
    printer(){
        console.log(this.#weight);
    }
    getWeight(){
        return this.#weight;
    }
}
var Hridyanshu = new human(16,7);
console.log(Hridyanshu.age);
console.log(Hridyanshu.height);
Hridyanshu.walking();
Hridyanshu.running();
Hridyanshu.printer();
// console.log(Hridyanshu.#weight);
console.log(Hridyanshu.getWeight());


// -------DEFAULT PARAMETERS FOR FUNCTION-----
function f1(firstName = "NA" , secondName = "NA" ){
    console.log("My name is :", firstName,secondName );
}

f1();