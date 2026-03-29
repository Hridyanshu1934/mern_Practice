let counterButton = document.getElementById('counterButton');
let counterDisplay = document.getElementById('counterDisplay');
let a = 0;
function counter(){
    a++;
    counterDisplay.textContent = 'Count: '+ a;
}
counterButton.addEventListener('click',counter);
console.log(counter);
let resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click',function reset(){
    a = 0;
    counterDisplay.textContent = 'Count: 0';
})