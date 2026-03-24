let mydiv = document.querySelector('#mydiv');

let element = document.createElement('h1');

element.textContent = "hey";

mydiv.insertAdjacentElement("beforebegin",element);