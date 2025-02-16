document.getElementById('images').addEventListener('click', (e)=> {
    console.log("clicked inside image");
    
    //type, timestamp, defaultPrevented
    //target, toElement, srcElement, currentTarget
    //clintX, clintY, screenX, screenY
    //altKey, ctrlkey, shiftkey, keycode
}, false) // thired parameter...(event proposition) false --> event bubbling True --> event capturing

document.getElementById('image1').addEventListener('click', (e)=> {
    console.log("image1 was clicked");
    e.stopPropagation(); //TO STOP PROPOGATION.
}, false) 
// when its false its in bubbling mode means it will go from inside to outside.
// first image1 will be clicked v.i.z inside the ul, then the images will be clicked.
// DEFAULT IS FALSE.
//But when it is true it will be in event capturing mode it will go from outside to inside
// TO STOP PROPOGATION...it has a method on 'e'.