const clock = document.querySelector('#clock')


setInterval(() => {
    let date = new Date();
    // console.log(date.toLocaleTimeString); // this will display time in console.
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)
