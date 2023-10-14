let score = "33";

console.log(typeof score);// string 

let scoreToInt = Number(score);
console.log(typeof scoreToInt);// Number 

let sc = "33abc";
console.log(Number(sc),typeof Number(sc));//NaN ,Number -- Not a Number and sc = 33 assigned 

let sc1 = true ;
console.log(Number(sc1)); // 1 if true -- 0 if False

let sc2 = null;
console.log( Number(sc2)); // 0 -- typeof number 

let sc3 = undefined;
console.log(typeof Number(sc3));

/* Notes --- Coversion to Number 
   "33 " --> 33 - a Number 
   "33abc" --> NaN , but type is Number 
   true -->  1 
   false --> 0 
   undefined -- NaN -- typeof Number 
   null -- 0 -- typeof Number 
 */ 


let newName = "Anil";
let newName1 = Boolean(newName);
console.log(newName1);// true , if newName = "" then it will be false 

// Conversion to Boolean --
/* 
"" ==> false
"Hitesh" ==> true
1 ==> true
0 ==> false 
*/

let num1 = 44;
let stringNum1 = String(num1);
console.log(stringNum1);// 33 
console.log(typeof stringNum1); // string 

// Coversion to string 

//  44 --> "44" 

// we can also convert a  string to a number --
 let str = "55";
 console.log(typeof +str);// Number 
 // Or a number to string like 
 let a = 27;
  a = a + " ";
  console.log(typeof a );// string 


// Operations -- 
console.log("****Operations****");

let value = 3;
let negvalue = -value;
// console.log(negValue); // -3 

// console.log(2+2); // 4 
// console.log(2-2); // 0 
// console.log(2*2); // 4 
// console.log(2/2); // 1 
// console.log(2**2); // 4 2 to the power 2
// console.log(2**3); // 8 2 to the power 3
//console.log(2%3); // 2 remainder 

let str1 = "hello ";
let str2 = "Hitesh";

let str3 = str1 + str2;
// console.log(str3) // Hello Hitesh 

// console.log("1" + 2); // string 12 
// console.log(1 + "2"); // string 12
// console.log(1 + 8 + "2"); // 92 a string first two number will add and then converted to string  
// console.log("1" + 1 + 1); // // string 111
// console.log((3+4)*5%3);// 2 

// console.log(+true); // 1
// console.log(+""); // 0 
// console.log(true+); // error 

let n1,n2,n3;
n1 = n2 = n3 = 100;

let gameCounter = 100;
gameCounter++; // or ++gamecounter
console.log(gameCounter);

// prefix and postfix js mdn 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let g = 3;
const h = ++g;

console.log(`g:${g}, h:${h}`);
// Expected output: "a:4, b:4"


let x1 = 3;
const y1 = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n


let x4 = 3;
const y4 = ++x;
// x4 is 4; y4 is 4

let x5 = 3n;
const y5 = ++x2;
// x5 is 4n; y5 is 4n


