function User(email, pwd )
{
    this._email = email;
    this._pwd = pwd;

    Object.defineProperty(this, 'email', {
        get: function(){
           return this._email.toUpperCase()
        },
        set : function(val){
            this._email = val
        }
    })

    Object.defineProperty(this, 'pwd', {
        get: function(){
           return this._pwd.toUpperCase()
        },
        set : function(val){
            this._pwd = val
        }
    })
}

const chai = new User("chai.com", "123")
console.log(chai.email)