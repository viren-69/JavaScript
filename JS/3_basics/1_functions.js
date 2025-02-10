function greeting(){
    console.log("hello");
}
// greeting();

function sum ( num1, num2){
    // console.log(num1+num2);
    
}
const result = sum(1,2);
// console.log(result); // it gives undifined because the function is not returning any value.
// sum(1,"2");

function sum ( num1, num2){
    return num1+num2;   
    
}
const result2 = sum(1,2);   // now the function will return the value.
// console.log(result2);


function calculateCartPrice(...num1){   // Rest operator(...)
    return num1;
}
// console.log(calculateCartPrice(100,200,500,4738));

// Handling Objects
const user = {
    username: "viren",
    price: 199
}

function handleObjects(anyObject){
    console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`);
}

// handleObjects(user);
handleObjects({
    username: "rohan",
    price: 899
});