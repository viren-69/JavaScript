const user = { // Object Literal
    username: 'viren',
    age: 19,
    email: 'virenlande35@gmail.com',

    getUserData: function() {
        // console.log('got user details from database');
        // console.log(`username: ${this.username}`);
        // console.log(this); // this prints current context.     
    }
}
// console.log(user.email);
// console.log(user.getUserData());

// Constructor Function: 

function user2(username, age, isLoggedIn){
    this.username = username;
    this.age = age;
    this.isLoggedIn = isLoggedIn;

    return this
}
const result = new user2('viren', 19, true);
const result2 = new user2('spiderman', 23, false);
console.log(result);// over here the value of result is being over-written.This is a problem
// To solve this problem 'new' keyword is used.
console.log(result2);
