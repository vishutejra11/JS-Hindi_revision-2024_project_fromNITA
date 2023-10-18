// For loop -- 

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
// }

// console.log(element);// error out of scope 

// for (let i = ; i <= 10; i++) {
//     // console.log(`Outer loop ${i}`);
//     console.log(`Table of ${i}::`)
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop ${j} for ${i}`)  ;
//         console.log(i + '*' + j + ' = ' + i*j);      
//     }
// }

let myArray = ["flash","batman","superman"];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// Keywords
// Break and Continue 

for (let i = 1; i <= 29; i++){
console.log(`Value of i is ${i}`);
   if(i === 5) continue;
   else if(i===10) break;
}
