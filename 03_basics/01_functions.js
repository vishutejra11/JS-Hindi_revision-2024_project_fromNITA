// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S"); // if we've to do 10 times then 
// console.log("H");

function myFuction () {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S"); 
    console.log("H");
}
// myFuction();

// function addTwoNumbers (a,b) { // parameters 
//     console.log(a + b);
// }
// addTwoNumbers();// NaN -- 
// addTwoNumbers(4,6); // 10 // 4,6 arguements
// addTwoNumbers(3,"4");// 34 
// addTwoNumbers(3,"a");//3a
// addTwoNumbers(3,null);// 3

// const result = addTwoNumbers(3,5); 
// console.log(result);// Undefined -- because function returnning anything 

function addTwoNumbers (a,b) { // parameters 
//   let result = a + b;
//   return result;
  return a+b;
}

const result = addTwoNumbers(3,7);
// console.log(result);// 10 

function loginUserMessage(username){
    return `${username} just logged in`;
}

// console.log(loginUserMessage());//undefined just logged in-- we ve not passed argument 
// console.log(loginUserMessage("Anil"));//Anil just logged in

function loginUserMessage(username){

    if(username===undefined)// if(!username)
    {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage());// Please enter a username
// console.log(loginUserMessage("Anil")) // Anil just logged in 


// when we declared some value in parameter then it is default we not pass any argument 
// If we pass argument then value will be override by argument
function myNameIs(username="Anil") {  
   return `My name is ${username}`;
}

console.log(myNameIs());// My name is Anil
console.log(myNameIs("Vishal"));// My name is Vishal

// -- Part - 2 

// how to handle multiple arguments with one parameter
// ans - using rest operator 

// function calculateCartPrice (num)
// {
//    return num;
// }
// console.log(calculateCartPrice(200));// 200

// when we'Ve handle multiple arguments 
// function calculateCartPrice (...num)
// {
//    return num;
// }
// console.log(calculateCartPrice(200,400,500));//array --[ 200,400,500]

// or 
function calculateCartPrice (val1,val2,...num)
{
   return num;
}

// console.log(calculateCartPrice(200,400,600,800,1200));// num = [600,800,1200]
// val1 = 200 , val2 = 400 num = 600,800,1200]

const user = {
    username :"Anil",
    price : 199
}

function handleObject (anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user);// Username is Anil and price is 199

// direct object passing in function call 
handleObject({
    username:"Sammy",
    price:399
});  
// expected output 
// Username is Anil and price is 199

const arr = [100,200,400,6000]

function returnSecondValue (getarry)
{
    return getarry[1];
}

// console.log(returnSecondValue(arr));// 200

// Direct passing of array in function calling 

console.log(returnSecondValue([100,20,3000]));//20