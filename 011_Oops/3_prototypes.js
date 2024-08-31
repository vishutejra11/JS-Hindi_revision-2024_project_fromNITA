let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : 'hamer',
    spiderman : 'sling',

    getSpiderPower : function (){
        // console.log(`spider power is ${this.spiderman}`)
    }
}

Object.prototype.anil = function() {
    // console.log('Anil is present in all object')
}

// object is parent of all array, list and string 
// so if we define a new proto for object it will be accesible for all object string and array
heroPower.anil();// accessible 
myHeros.anil();

Array.prototype.heyanil = function (){
    // console.log('Hey Anil !! ')
}

myHeros.heyanil();// correct
// heroPower.heyanil();// Not accesible because object cant access the proto of array (its a child)
// But if define a proto of Object then accessible by array


// Inheritance 

const user = {
    name : "chai",
    email : "chai@email.ocm"
}
const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvail : false,
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = user;

console.log(Teacher.email)// chai@email.ocm
console.log(TASupport.makeAssignment)// JS Assignment


// new Synatx for Inheritance -- modern Syntax 

Object.setPrototypeOf(TeachingSupport, user)
console.log(TeachingSupport.email)//chai@email.ocm

let anotherUser = "chaiAurCode       "
String.prototype.trueLength = function () {
    console.log(this)
    console.log(`true length is ${this.trim().length}`);
}

anotherUser.trueLength();
"anil            ".trueLength();















