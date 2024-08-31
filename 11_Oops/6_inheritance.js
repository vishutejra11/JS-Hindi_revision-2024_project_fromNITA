class User {
    constructor (username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,email, pwd){
        super(username)
        this.email = email;
        this.pwd = pwd;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`)
    }
}

const chai = new Teacher("chai","chai@gmail.com", "123")
// chai.addCourse();
// chai.logMe();

const masalaChai = new User('a','B', 'C');
masalaChai.logMe()

console.log (masalaChai instanceof User)

