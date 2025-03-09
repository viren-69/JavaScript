class User{
    constructor(username){
        this.username = username;
    }
    isLoggedIn(){
        console.log(`USERNAME IS: ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`new course was added by ${this.username}`);
        
    }
}

const obj1 = new Teacher("viren", "viren@gmail.com", "123")
obj1.addCourse();
