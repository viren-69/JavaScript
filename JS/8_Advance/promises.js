const promise1 = new Promise((resolve, reject)=>{
    // Do Async tasks
    // DB calls
    setTimeout(()=>{
        // console.log("Async task is complete");
        resolve(); // this connects the resolve with .then
    }, 1000)
});

promise1.then(()=>{
    // console.log('promise consumed');
})

new Promise(function(resolve, reject){
    setTimeout(() => {
        // console.log("Async task 2");
        resolve();
    }, 1000);
}).then(()=>{
    // console.log('async 2 resolved');
    
});

const promise2 = new Promise((resolve, reject )=>{
    setTimeout(() => {
        resolve({name: 'viren', age: 19});
    }, 1000);
})
promise2.then((user)=>{
    // console.log(user);
    
})

const promise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: 'viren', password: '123'})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})
promise3.then((user)=>{
    // console.log(user);
    return user.username;
}).then((username) => {
    // console.log(username); 
}).catch((error) => {
    // console.log(error);
}).finally(() => console.log(`the promise was either resolved or rejected`)
)

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users');
//         const data = await response.json(); // this to convert to json also takes time.
//         console.log(data);
//     } catch (error) {
//         console.log('E: ',error);     
//     }    
// }
// getAllUsers();

// Doing same with fetch().

fetch('https://api.github.com/users/viren-69')
.then((data) => {
    return data.json();
})
.then((finalData) => {
    console.log(finalData);
    
})
.catch((error) => {
    console.log(error);
    
})