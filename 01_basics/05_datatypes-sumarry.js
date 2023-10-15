// Primitive -- data Types 
// 1. String 2. Number 3. Boolean 4. null 5. undefined 6.symbol 7. BigInt

// Qn comes here -- IS Js is static type language or dynamic typed language ?????
// Js is dynamic typing language -- 
// Beacuse we declare variable without specifying its data types ex--

let str = "Anil";
const val = 100.3;// not like const val:Number = 100.53 -- as typescript
const bool = true;
let nl = null; 
let userEmail = undefined; // same as--->  let userEmail;
let id = Symbol('123'); // symbol is a data having unique values 
let anotherId = Symbol('123');

console.log(id===anotherId);// false both of symbol cant be same they are unique 

let bign = 378749889498921n;// BigInt

console.table([typeof str,typeof val ,
    typeof bool,typeof nl,typeof userEmail,typeof id,typeof bign]);

// Reference (Non Primitive Data types) 
// 1. Arrays 2. Objects 3. Functions 

let arr = [123,"Anil",24,26];
// console.log(arr[1]);

let obj = {
    name:"Anil",
    age:24
    // inside object there can be array ,function, another Obejct
}

let myFunc = function()
{
    console.log("Hello World");
}
// myFunc();

console.table([typeof arr,typeof obj,typeof myFunc]);// object,object, function



