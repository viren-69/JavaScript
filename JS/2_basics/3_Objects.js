// Singleton When you create using 'new' keyword.
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

// // Jsuser.greeting = function(){
//     // console.log("hello");
// }
// // console.log(Jsuser.greeting());
// // console.log(Jsuser.greeting);

// // Jsuser.greeting2 = function(){
//     // console.log(`hello ${this.name}`);
// }
// // console.log(Jsuser.greeting2());
// console.log(Jsuser.greeting2);

const user = {              
    email: "some@gmail.com",
    personal_Info: {
        name: {
            firstName: "viren",
            lastname: "lande"
        },
        age: 19,
        address: {                  // you can n no. of nested objects
            city: "pune",
            state: "Maharashtra",
            country: "India"
        }
    }
}
// console.log(user);
// console.log(user.personal_Info.age); // you can access any value by '.' operator.
// console.log(user.personal_Info.address);

const target = {
    1: "a",
    2: "b",
    3: "c"
}
const source = {
    1: "a",
    2: "b",
    3: "c"
}

// const obj = {target, source};
// const obj = Object.assign({}, target, source);
const obj = {...target, ...source}
// console.log(obj);

// when you get an array of objects then you can access it this way
const user2 = [
    {
        id: 1,
        
    },
    {
        id: 2,
        
    },
    {
        id: 3,
        
    }
]
user2[1].id; //

// This will be used when you'll work with values from database.
// console.log(Object.keys(Jsuser)); // it gives all the keys in the Array type, So you can put loop on it and use it in various ways later.
// console.log(Object.values(Jsuser)); //Returns an array of values of the enumerable own properties of an object
// console.log(Object.entries(Jsuser)); //Returns an array of key/values of the enumerable own properties of an object

// console.log(Jsuser.hasOwnProperty('mail')); //Determines whether an object has a property with the specified name.

const course = {
    sub: "JS",
    cost: 1000,
    instructor: "xyz"
}

//De-Structuring
course.instructor;
const {instructor: ins} = course // just another syntax to access the value.
console.log(ins);

// API(JSON format)
// {
//     "name": "viren",
//     "age": 29,
//     "work": "student"
// }

[
    {},
    {},
    {},
]