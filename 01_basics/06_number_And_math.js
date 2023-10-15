const score = 400;
// console.log(score);

const n = new Number(100);
// console.log(n);

// console.log(n.toString().length);//3 
// console.log(n.toFixed(2));// 100.00 // decimal palces values 

const balance = 123.6999;
// console.log(balance.toPrecision(4)); // precision should be known 

const rs = 1000000;
// console.log(rs.toLocaleString('en-IN'));// for problem in 0 counting

// const st = MIN_VAL;// MAX_VAL // MAX_SAF_INT

//******************MATH**********************/

// console.log(Math); // go to broweser -->inspect -> MATH -- Methods
// console.log(Math.abs(-4));//4
// console.log(Math.abs(5)); // 5
// console.log(Math.round(4.6));//5
// console.log(Math.round(4.2));//4
// console.log(Math.ceil(4.6));//5
// console.log(Math.ceil(4.1));//5
// console.log(Math.floor(4.9));//4
// console.log(Math.floor(4.3));//4
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random());// value between 0 and 1 
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);// value between 1 to 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);// gives values between 10 and 20 








