// object literal 
const user1 = {
    username: "anil",
    loginCount : 8 ,
    signedIn : true,
    getDetail : function (){
        console.log(`username is ${this.username}`)
    }
}

// this -- refers to the current context of object 

// user.getDetail();

// constructor Function
// new keyword is actual constructor function which 
// help to create a new context ex --
// const pr = new Promise()
// date = new Date()

 function user(username, loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    return this;
}

// now when you write like -- 
// const userOne = user("Anil", 7, true)
// const userTwo = user("vishal", 6 , false)
// then userOne values overriden by userTwo 
// to resolve this problem
// we use new -- constructor function

const userOne = new user("Anil", 7, true)
const userTwo = new user("vishal", 6 , false) 

console.log(userOne)
console.log(userTwo)


// 1. when we write a new keyword then empty object will create
// 2. new keyword call a constructor function set all the arguments
// 3. all the arguments will inject in 'this' keyword
// 4. we will find it in function as above example

console.log(userOne.constructor) // reference of userOne itself
// check instanceof from google 




