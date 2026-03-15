let numberPrinter=(num)=>{
    for(let i = 1 ; i<= num ; i++){
        if(i == 69){
            continue;
        }
        console.log(i);
    }
}
let numbersToBePrinted = 100;
numberPrinter(numbersToBePrinted);