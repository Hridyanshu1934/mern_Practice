function abc(){
     console.log('I am inside a timeout block in an async function');
}
// ---- THIS IS MANUAL CREATION OF AN ASYNC FUNCTION----

async function aiweHi(){
    setTimeout(abc,3000);
}
aiweHi();

// FETCHING API IS A ASYNC FUNCTION SO IT NEEDS TO FETCH FIRST AND THEN PRINT IT SINCE PRINT IS A SYNC FUNCITON 
// HENCE WE USE AWAIT KEYWORD TO TURN AN ASYNC FUNCTION TO SYNC FUNCTION

async function getData(){
    // async part:-

    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    let parsedResponse = await response.json();

    // sync part:-

    console.log(parsedResponse);
}
getData();