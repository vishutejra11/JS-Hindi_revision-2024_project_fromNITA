// class User{
//     constructor(username, pwd, email){
//         this.username = username;
//         this.pwd = pwd;
//         this.email = email;
//     }

//     encryptpassword(){
//         return `${this.pwd}abc`
//     }
    
//     changeuserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("Chai", "123", "chai@gmail.com");

// console.log(chai.encryptpassword());
// console.log(chai.changeuserName());

//behind the scene 

function User(username,pwd,email){
    this.username = username;
        this.pwd = pwd;
        this.email = email;
}

User.prototype.encryptpassword=  function() {
    return `${this.pwd}abc`
}

User.prototype.changeuserName= function () {
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "123", "tea@gmail.com");

console.log(tea.encryptpassword())
console.log(tea.changeuserName())
