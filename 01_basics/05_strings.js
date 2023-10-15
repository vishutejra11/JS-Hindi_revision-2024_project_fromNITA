let myName = 'Anil';
let repoCount = 5;

// templates-- String interpolation 
console.log(`My name is ${myName} and my repo count is ${repoCount}`);

const getName = new String("ShreeGanga");

// console.log(getName[2]);
console.log(getName.__proto__);
// __proto__ is set of all function of string like length,toUpperCase ,concat 

// console.log(getName.length);
// console.log(getName.toUpperCase());// uppercase conversion
// console.log(getName.charAt(2));// r- character at 2 index 
// console.log(getName.indexOf('G'));//5- index of G

const newString = getName.substring(0,5);// 5th index will not be count
// console.log(newString);// Shree

const nstr = getName.slice(-10,5);// if we give negative 
// value then it count from back
// console.log(nstr); // Shree

// trim eliminate white spaces and
// there is also a trimstart() and trimend() methods.  
const ak = "  AnilKumarPatidar  ";
console.log(ak.trim().length===ak.length);// false after trim 
                                         //  length of string will be cahnge
const url = "https://anilpatidar.com/anil%20patidar";

console.log(url.replace('%20','-'));
console.log(url.includes('anil'));// true or false 

const name1 = "Anil_Kumar_Patidar";
console.log(name1.split('_'));// return a splitted array 


