// Singleton
// Object.create;

// Object literals
const sym = "key1";
const Jsuser ={
    name: "viren",
    "Full name": "viren lande",
    age: 19,
    mail: "viren@google.com",
    sym: "key2" // this is how you use a symbol in object, [sym].
}
// console.log(Jsuser.name);
// console.log(Jsuser["Full name"]);
// console.log(Jsuser[sym]); // this is how you print it.

// how to change the values of an object
// Jsuser.mail = "viren35.gmail.com";

// how to make sure you cannot make changes in the values of an object
// Object.freeze(Jsuser);
// Jsuser.mail = "viren35.meta.com";

// console.log(Jsuser);

//functions

Jsuser.greeting = function(){
    console.log("hello");
}
console.log(Jsuser.greeting());
console.log(Jsuser.greeting);

Jsuser.greeting2 = function(){
    console.log(`hello ${this.name}`);
}
console.log(Jsuser.greeting2());
console.log(Jsuser.greeting2);