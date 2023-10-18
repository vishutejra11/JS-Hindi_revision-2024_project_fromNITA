const myObj = {
    js:"JavaScript",
    cpp:"C++",
    rb : "ruby",
    swift:"Swift by app"
}

for (const key in myObj) {
//    console.log(myObj[key]); values only
//  console.log(`${key} shortcut for ${myObj[key]}`);
}// Expected output 
// js shortcut for JavaScript
// cpp shortcut for C++
// rb shortcut for ruby
// swift shortcut for Swift by app


// ForIn Loop incause of array 
const myarr = [1,2,3,4,5];

// for (const key in myarr) {
//     console.log(key);
// }
// for in loop just gives the index of array as its key
// It means for in loops works as key value pair for array also
// if we have a array [1,2,3,4,5]
// then 
/*
key  value 
0      1
1      2 
2      3
3      4 
4      5
*/ 

const map = new Map();
map.set("In" , "India");
map.set("USA" , "United state of America");
map.set("Fr" , "France");
map.set("In" , "India");

for (const [key,value] in map) {
    console.log(key, ":-", value);
}// No output no error 
// Map is not iterable --- 

