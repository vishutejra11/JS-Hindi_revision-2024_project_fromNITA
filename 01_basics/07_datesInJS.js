// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.group(myDate.toLocaleString());
// console.log(typeof myDate);// Object

// let myCreatedDate = new Date(2023,0,23);
// console.log(myCreatedDate.toString());
// let myCreatedDate = new Date(2023,0,23,5,4);
//  let myCreatedDate = new Date("2023-02-15");
 let myCreatedDate = new Date("10-15-2023");
// console.log(myCreatedDate.toLocaleString());
// console.log(myDate.getTime());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date("12-15-2020");

console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());
console.log(newDate.getDay());
// `today is ${date.getDay()}and time is ${}`

console.log(newDate.toLocaleDateString('default',{
    weekday:"long",
    hour:"2-digit"
}))





