//----- EVENT LISTENER--------

let fpara = document.getElementById('fpara');
function abc(event){
    console.log(event);
    fpara.textContent = "Hello Hridyanshu This Side";
}

fpara.addEventListener('dblclick',abc)

// ----- CHANGING DEFAULT ACTION OF A TAG -------

let fanchor = document.getElementById('fanchor');
function abc2(event){
    event.preventDefault();
    fanchor.textContent = "No more anchor tag because change in the default action";
}
fanchor.addEventListener('click',abc2);

// ------ ADDING LISTENERS TO THE SAME PARAGRAPH-------

    // --- APPLYING EVENT LISTENER USING LOOP---
let paras = document.querySelectorAll('p');

function paraAlert(event){
    alert('You Have Clicked on ' + event.target.textContent);
}

for(let i = 0 ;  i<paras.length;i++){
    paras[i].addEventListener('click',paraAlert);
}

    // ------ APPLYING EVENT LISTENER USING DIV-------

let paraDiv = document.getElementById('paraDiv');

paraDiv.addEventListener('dblclick',paraAlert);