function setuserName(username) {
    // Complex DB calls
    this.username = username;
    console.log("called")
}

function createUser(username, email, pwd){
    setuserName.call(this,username)
    this.email = email;
    this.pwd = pwd;
}

const chai = new createUser("chai", "Chai@fb.com", "123")
console.log(chai)