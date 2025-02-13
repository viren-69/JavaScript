// For-Loop

for (let i = 0; i < 10; i++) {
    // console.log(i);
    ;
    
}

//All tables from 1 to 10
for(let i = 1; i <= 10; i++){
    for(let j = 1; j<= 10; j++){
        // console.log(i + "*" + j + " = " + i*j)
    }
}

let arr = ["a", "b", "c", "d", "e" , "f"];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
    
}

// Break and Continue
for (let i = 0; i < 20; i++) {
    if(i == 7){
        // console.log(`7 is detected`);
        break;//gets out of loop
    }
    console.log(i);
}

for (let i = 0; i < 20; i++) {
    if(i == 7){
        // console.log(`7 is detected`);
        continue;// does not get out of loop
    }
    console.log(i);
}

// While-Loop
let i = 0;
while (i != 10) {
    // console.log(i);
    i++;
}

//Do-While-Loop
let score = 1;  //DoWhile loop atlest runs one time.
do {
    console.log(`my score is: ${score}`);
    score++;
} while (score < 11);