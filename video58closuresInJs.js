//---- CLOSURES------

function outerfunction(){
    let name = "Hridyanshu";
    function innerfunction(){
        console.log(name);
    }
    return innerfunction;
}
let inner = outerfunction();
inner();

// Here we can see that even after the outerfunction has ended and the value of name variable is freed then also the innerfunction is binded to the reference of the variable name 