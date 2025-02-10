let a = 10;
const b = 20;
var c = 30; // we dont use var to declare variables because of its scope problem.

if(true){
    var d = 10; // this is called block scope and everything outside this block is global scope.
}

// console.log(d); // it gives output 10. but it should not return 10.
// As we know if we declare any variable inside a method it should be accessable only inside that method.

function one(){
    const username = "viren";

    function two(){
        const cost = 89;
        // console.log(username); // this will be accessable inside function two coz function two is inside the block of function one.
        
    }
    // console.log(cost); // you cannot access this coz its outside the function two's block.
    
    two();
}
one();

// You can declare functions in two ways.

console.log(addOne(5)); // here it will execute even if it is called before the function.
function addOne(num){
    return num+1;
}
addOne(3);

//addTwo(8); // but here it will give error, this is coz of hoisting we'll learn about it in future.
const addTwo = function(num){
    return num+2;
}
addTwo(5);