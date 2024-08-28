class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`welcome ${this.username}`);
    }

    static createId(){
        return "123";
    }
}

const chai = new User('Anil');
// chai.logMe();
// console.log(chai.createId());

class admin extends User{
   constructor(username, email){
    super(username)
    this.email = email;
   }

}

const earBuds = new admin("Ak", "realme.com");
earBuds.logMe();
console.log(earBuds.createId())


// so when we declared static properties and methods with static 
// we can not access outside the class 