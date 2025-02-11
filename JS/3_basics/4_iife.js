// IIFE (Immediately Invoked Function Expression)

(function one(){
    // NAMED IIFE
    console.log("hello"); // we use this syntax to sovle the problem created by pollution of global scope
    
})(); // you have to put ';' for this to end this method.

( (name) => {
    console.log(`my name is ${name}`);    
}) ('viren');