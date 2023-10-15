
const marvel_heros = ["thor","Ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);// dc_heros pushed inside marvel_heros as element

marvel_heros.concat(dc_heros); //dc_heros as element will be pushed 
// console.log(marvel_heros);


// when we want to merge two array

// const newArr = marvel_heros.concat(dc_heros);
// console.log(newArr);

// adding element of two array using spread operator

// const all_new = [...marvel_heros,...dc_heros];
// console.log(all_new);

// let arr1 = [1,2,3,[4,5,6],7,[8,9,[10,11]],12];
// let real = arr1.flat(Infinity);
// console.log(real);

// console.log(Array.isArray("Hitesh"));// true if array // false output
// console.log(Array.from("Hitesh"));// Covert string to array 

let n1 = 100
let n2 = 200 
let n3 = 300 

console.log(Array.of(n1,n2,n3));// create array from multiple values 
