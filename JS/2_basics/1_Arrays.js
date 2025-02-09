// Arrays

const arr = [1,2,3,4,true,"viren"]
const arr2 = new Array(1,2,3,4);

// console.log(arr[2]);

// Methods.

// arr2.push(5);
// console.log(arr2);
// arr2.pop(5);
// console.log(arr2);

// Slice, Splice methods.

const arr3 = [1,2,3,4,5,6,7];

console.log(arr3.slice(1,4)); // should print [2,3,4]
console.log(arr3);

console.log(arr3.splice(1,4)); // should print [2,3,4,5]
console.log(arr3);
// The main diff. b/w slice and splice is that 
//  slice --> does not manipulate the orignal array. But SPLICE does.
