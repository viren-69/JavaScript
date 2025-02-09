function greeting(){
    console.log("hello");
}
// greeting();

function sum ( num1, num2){
    console.log(num1+num2);
    
}
const result = sum(1,2);
console.log(result); // it gives undifined because the function is not returning any value.
// sum(1,"2");

function sum ( num1, num2){
    return num1+num2;   
    
}
const result2 = sum(1,2);   // now the function will return the value.
console.log(result2);
