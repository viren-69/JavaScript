class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    get password(){
       return this.newPassword.toUpperCase();
    }

    set password(value){
        this.newPassword = value;
    }

}
const viren = new User("Viren", "abdu");
console.log(viren.password);
