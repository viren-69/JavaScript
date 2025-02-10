const one = ()=> {
    const username = "viren"
    console.log(`your name is ${username}.`);
    
}
// one();


// const addTwo = (num1,num2)=> {   // when you use "{}" these you have to write return keyword.
//     return num1+num2;
// }

const addTwo = (num1,num2) => (num1+num2); // implicit return.  // when you use '()' these no need to write return keyword.

// when you need to return an object like this.
const add = (num1,num2) => ({username: "viren"}); // you have to wrap it in '()' these other wise it will throw an error. 
console.log(addTwo(2,4));
console.log(add(2,4));
