// Singleton -- we can not create further instances of this type of object---
// Object.create



// Interview Qn -- 
// How symboltypes element  used inside a Object 
// Step 1 -- First Decalre Symbol type variable outside like--
const mySymbol = Symbol("Key1");
// Step 2 -- then define inside object like -- [mySymbol] : "myKey1" -- inside square braces 
// Step 3 -- for access Sybol type elements -- myObj[mySymbol]
// Object literals
const myObj = {
    name:'Anil',
    "fullName":"Anil_Kumar_Patidar",//Another way to declare -- it can be access only by --  myObj["fullName"]
    [mySymjfibol]: "myKey1", // we can not do like --- mySybol:"myKey1" then it treated as string 
    age : 24,
    location:"Jaipur",
    email:"Anil@google.com",
    isLoggedIn: false,
}
// Incause of object js treates key as a string and we have two ways to acces elements of object
// console.log(myObj.email);// First way -- o/p -  Anil@google.com
// console.log(myObj["email"]);// Second way -- best way -- how actually js works behind the scene for obj.key --o/p -  Anil@google.com
// console.log(myObj["fullName"]); // o/p--- Anil_Kumar_Patidar
// console.log(myObj[mySymbol]);// myKey1
// console.log(typeof mySymbol);// Symbol

// Updatation in the value of key ---two way 
myObj.email = "Anil@amazon.com"; // email is updated 
myObj["age"] = 18 ;// age is updated from 24 to 18
// console.log(myObj);// full Object will be display

// ----IMP---->>>> You can freez any object -- if you dont want to change further in object key values 
// Object.freeze(myObj);// After freezing no midification will be done in object elements 
// myObj.email = "Anil@Samsung.com"; // No error after freezing but value will not be update 
// console.log(myObj);

myObj.greeting = function ()
{
    console.log("Hello Js User ");
}
// console.log(myObj.greeting);// Function(annonymous -- full function will be display)
myObj.greetingTwo = function ()
{
    // console.log(`Hello Js User ${myObj["fullName"]}`);
    console.log(`Hello Js User ${this["fullName"]} ,Invitation sent to ${this.email}`);

}
console.log(myObj.greeting());
console.log(myObj.greetingTwo());





