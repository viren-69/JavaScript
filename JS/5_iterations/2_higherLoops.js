// For-of loop
const arr = [1,2,3,4,5,5,4,4,4,3,1]

for (const i of arr) {
    // console.log(i);
}

const greeting = "hello world"
for (const greet of greeting) {
    // console.log(`Each char of greeting ${greet}`);
    
}

//Maps
const map = new Map();
map.set("IN", "India")
map.set("IN", "India")
map.set("FR", "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key," :- ", value);
}

// For-Each loop (it doesn't return a value)

arr.forEach((i, index, arr) => {
    // console.log(i,index,arr);
    
});

// for each loop to access an array of objects
const arr2 =[
    {
        name: "viren",
        age: 19
    },
    {
        name: "yash",
        age: 18
    },
    {
        name: "rahul",
        age: 20
    },
    {
        name: "aditya",
        age: 22
    },
] 

arr2.forEach(item => {
    // console.log(item.name);
});

// Filter(it returns the value)
const num = [1,2,3,4,5,6,7,8,9,10];

const result = num.filter( (n)=> {
    return n > 5;
})
// console.log(result);

// Map
const myNum = [1,2,3,4,5,6,7,8,9];
const ans = myNum.map( (num) => num + 10 )
                    .map((num) => num + 1)  // Chaining.
                    .filter((num) => num % 2 == 0);
// console.log(ans);

// reduce()
 const myTotal = myNum.reduce( (acc, curr) => {
    console.log(`acc: ${acc} curr: ${curr}`);
    
    return acc + curr;
 },0)
 console.log(myTotal);
 