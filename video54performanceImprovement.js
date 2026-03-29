// ------------CODE 1----------
// this is slower because each para is reflowed and repainted
const t1 = performance.now();
function generatePara(){
    for(let i = 1 ; i<101 ; i++){
    let para = document.createElement('p');
    para.textContent = 'This is Para No. ' + i;
    document.body.appendChild(para);
    }
}
generatePara();
const t2 = performance.now();
console.log(t2-t1);

// ------------CODE 2----------
// this is faster because only 1 div is reflowed and repainted
const t3 = performance.now();
let newDiv = document.createElement('div');
function generatePara1(){
    for(let i = 1 ; i<101 ; i++){
    let para1 = document.createElement('p');
    para1.textContent = 'This is Para No. ' + i;
    newDiv.appendChild(para1);
    }
    document.body.appendChild(newDiv);
}
generatePara1();
const t4 = performance.now();
console.log(t4-t3);