class User {
    constructor(email , pwd ){
        this.email = email;
        this.pwd = pwd;
    }
    get email(){
        return this._email.toUpperCase();
    }

    set email(val){
        this._email = val
    }
    get pwd(){
        return `${this._pwd}akakak`;
    }
    set pwd(value){
          this._pwd = value
    }
}

const hitesh = new User('h1@.com', '123')
console.log(hitesh.pwd)
console.log(hitesh.email)