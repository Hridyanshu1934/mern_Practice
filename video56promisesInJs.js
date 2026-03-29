// Promises are used to run the async code in a sync way which has two functions either reject or resolve(i.e. fulfilled)

let promise1 = new Promise((resolve,reject)=>{
    let success = false;
    if(success == true){
        resolve('This is resolved this means success is true');
    }
    if(success == false){
        reject('This is an error '+ SyntaxError);
    }
});

promise1.then((message)=>{
    console.log('This happens when there is a resolve message  ' + message);
}).catch((error)=>{
    console.error(error);
}).finally((message)=>{
    console.log("I will always run because i am final")
})