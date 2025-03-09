class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptpassword(){
        return `${this.password}abc`
    }
}
const obj1 = new User("viren", "virenlande@gmail.com","133");
console.log(obj1.encryptpassword());
