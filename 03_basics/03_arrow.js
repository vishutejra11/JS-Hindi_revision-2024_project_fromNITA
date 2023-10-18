// thus Keyword ---
// this keyword refers to the current context of local scope 

const user = {
    username:"Hitesh",
    price:999,

    welcomemessage: function()
    {
        console.log(`Hello ${this.username} , welcome to SGA`);
        console.log(this);// current context object
    }

}
// console.log(user.welcomemessage());// Hello Hietsh , welcome to SGA
// user.username = "Sammy";
// console.log(user.welcomemessage());// Hello Sammy , welcome to SGA
// console.log(this);// current context object 

// after that if()
console.log(this);// { } it refers to the blank objects
// But when we write console.log(this) into the browser then we find 
// Window objects as a output ---
// In browser the global object is a window object so that we find this 
//  as a window object in browser console 
// wherease in node platform the global object is blank {} object so that we find it on node js machines 


/// ------------Arrow Function -------------

// function chai() 
// {
//     let username = "Anil";
//     console.log(this.username);// Undefined
// }
// chai(); // Bahut kuch ayega op -- 

// const chai = () =>{
//   console.log(this);// {} Empty object
// }
//  chai();

// const addTwo = (num1 , num2) =>{
//  return num1 + num2;
// }
// console.log(addTwo(3,4));// 7 

// Implicit return 
// const addTwo = (num1 , num2) =>   num1 + num2; // curly braces and return kewyword has removed 
// console.log(addTwo(3,4));// 7 
// also as implicit return
// const addTwo = (num1 , num2) =>   (num1 + num2);  
// console.log(addTwo(3,4));// 7 
const objectReturn = () => ({username :"Anil"}); //function returning a object
console.log(objectReturn());



