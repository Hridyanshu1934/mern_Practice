// ------- OBJECT CLONE------

let src = {
    age:23,
    height:6,
    weight:80
}

let dest = {...src};
src.age = 32;
console.log(src);
console.log(dest);

let dest2 = {};
for(let key in src){
    dest2[key] = src[key];
}
console.log(dest2);