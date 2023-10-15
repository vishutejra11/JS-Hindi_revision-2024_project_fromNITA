// Arrays 

// console.log("This is Array Section");

let arr = [1,2,3,4,"Hitesh",true];// mix data type can be in array 
// console.log(arr[4]);


const myHero = ["Shaktimaan","Naagraj"];// 

const newArr = new Array(1,2,3,4,5);// Defination of array

// Some array methods
newArr.push(6);
newArr.push(7);
newArr.pop();
// console.log(newArr);

newArr.unshift(0);// add element at front of array // O(n) operation 
newArr.unshift(1);
newArr.shift();// Remove element from front of array // O(n) operation 
// console.log(newArr);

// console.log(newArr.includes(9));// return true if 9 present in array 
// console.log(newArr.indexOf(3));// return -1 if elements is not present in array

// const myArr = newArr.join();
// console.log(newArr);
// console.log(myArr);
// console.log(typeof myArr);// string join() method covert array to string

// slice() , splice()

console.log("A ",newArr);

const myn1 = newArr.slice(1,3);
console.log("B ",newArr);
console.log(myn1);

const myn2 = newArr.splice(1,3);
console.log("C" , newArr);
console.log(myn2);




