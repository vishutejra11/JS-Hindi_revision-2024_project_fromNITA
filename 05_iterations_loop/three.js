// Forof loops --- 

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5];

// for (const val of arr) { // forof loop 
//     // console.log(val);
// }

const greetings = "Hello World";

// for (const greet of greetings) {
//     console.log(`Char : ${greet}`)
// }

// Maps -- Contains unique values -- 
const map = new Map();
map.set("In" , "India");
map.set("USA" , "United state of America");
map.set("Fr" , "France");
map.set("In" , "India");

// console.log(map);
// Expeceted output -- 
// Map(3) {  //  map(3) means 3 is the size of map 
//     'In' => 'India',
//     'USA' => 'United state of America',
//     'Fr' => 'France'
//   }

for (const [key,value] of map) {
    console.log(key,':=>', value);
}

const obj1 = {
    g1 : "NFS",
    g2 : "S3D",
}

// for (const [key,value] of obj1) {
//     console.log(key,'->',value);
// } No output no error // hence we can not iterate object through forof loop , to do this there are different method is available
// Not iterable type of error 

// 






