// Scope of let , const and var
// In JAva script scope {} under loop, if else statement etc


var c = 5000;
 if(true)
 {
    let a = 10;
    const b = 20;
    var c = 100;
 }

//  console.log(a);// error  because let having local scope
//  console.log(b);// error beacuse const also having local scope 
//  console.log(c);// 100 because var has a global scope 
 // Initially the value of c is 5000 but it has global scope so the value updated by 100
// wherease 

let a = 5000;// global scope 

if(true){
    let a = 100;// local scope 
    const b = 200;
    console.log(`a : ${a} and b : ${b}` ); //100  200 
}

// console.log(b):// gives error -- b has a local scope inside if condition
console.log(a);// 5000 it does not effect the value of a inside if condition


// Finally 
// We can say that let and const have its local scope 
// and VAR has a global scope throughout the program 


// Part -02 ---- Nested Scope 

function one( ) {
    const username = "Hitesh";

    function two()// 
    {
        const website = "youtube";
        console.log(username);
    }
    console.log(website);// error
    two();
}

one();

// Child function can access the variable of parent function

if(true)
{
    const  username = "Anil";
    if(username=== "Anil")
    {
        const website = " Youtube";
        console.log(username + website);
    }
    // console.log(website);// error-- website is out of scope
}
console.log(username);// errror -- username is outof scope 


// ++++++++++++++++++ Interesting  ++++++++ 

console.log(add1(5));// 6 no error 
function add1(num)
{
   return num+1;
}
// add1(5);


addTwo(5);// gives error can not access "addTwo" before initialization
const addTwo= function(num)// called expression or function 
{
    return num+2;
}
// addTwo(5); 7 
