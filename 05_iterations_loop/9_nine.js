const myNum = [1, 2, 3];

// const totalVal = myNum.reduce( function (acc , currval) {
//     console.log(`Acc: ${acc} And currVal : ${currval}`);
//     return acc + currval;
// },0);
//  o/p---
// Acc: 0 And currVal : 1
// Acc: 1 And currVal : 2
// Acc: 3 And currVal : 3

// console.log(totalVal); // 6

// Same as above using arrow function -- 
const myTotal = myNum.reduce( (acc,curr) => acc+curr);
// if we will not pass any initial value then it treated as 0 
const myTotal1 = myNum.reduce( (acc,curr) => acc+curr,0);
const myTotal2 = myNum.reduce( (acc,curr) => acc+curr,10);

console.log (myTotal);// 6
console.log (myTotal1);// 6
console.log (myTotal2);// 16


// Syntax of reduce() method --
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce((accumulator, currentValue) => 
// accumulator + currentValue, initialValue);

// console.log(sumWithInitial);
// // Expected output: 10


const shoppingCart = [
    {
        itemName : "Js Course",
        price : 2999
    },
    {
        itemName : "Python course",
        price : 4999
    },
    {
        itemName : "MobileDev Course",
        price : 8999
    },
    {
        itemName : "Data Science Course",
        price : 12999
    },
]

const totalCartVal= shoppingCart.reduce( (acc,item) => acc + item.price , 0 );
console.log(totalCartVal);// 
