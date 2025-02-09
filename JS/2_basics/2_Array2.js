const marvel = ["ironMan", "Thor", "Spiderman"];
const dc = ["Superman", "Flash", "Batman"];
// marvel.push(dc);

// console.log(marvel); // We expect that elements of dc should get added in marvel array,
//  But as array takes data type as input it took whole dc array as input.

const result = marvel.concat(dc);
// console.log(result);

// Spread

const result2 = [...marvel, ...dc];
// console.log(result2);

const new_arr = [1,2,3,[4,5,6],7,8,[4,6,[4,7,8,[3,4,10]]]];
const simplified_new_arr = new_arr.flat(Infinity);
// console.log(simplified_new_arr);


// console.log(Array.isArray("viren"));
// console.log(Array.from("viren")); // it converts any string to array.
// console.log(Array.from({name: "viren"})); // it cannot convert this. So it returns empty array.

// you can create an Array of diff. variables

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

console.log(Array.of(score1,score2,score3,score4));
