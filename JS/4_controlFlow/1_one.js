// IF-ELSE

const score = 100;
// if(score > 35) console.log("you have passed"); // this is called implicit IF the scope is not required but it has to be executed in one single line only and must end with a ';'.
// BUT not a good practice

// ELSE-IF

const balance = 1000;

if(balance < 500){
    // console.log("less than 500");
    
}else if(balance < 800){
    // console.log("less than 800");

}else{
    // console.log("more than 800");
    
}

const userLoggedIn = true;
const creditCard = true;
const LoggedInFromGoogle = true;
const LoggedInFromEmail = false;

if(userLoggedIn && creditCard && LoggedInFromEmail || LoggedInFromGoogle){
    // console.log("it works");
    
}else{
    // console.log("it does not work");
    
}

//Switch Case

const month = 3;
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("Invalid month");
        
        break;
}