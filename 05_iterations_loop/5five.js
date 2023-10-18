const coding = ["js","ruby","java","python","cpp"];

// way 1 
// coding.forEach(function (item){
//     console.log(item);
// });

// way 2 using arror function
// coding.forEach( (item) => console.log(item));

// way 3 using normal function passed to foreach method
// function printMe(item) {
//   console.log(item)
// }
// coding.forEach(printMe);

// This foreach method having three parameters item , index and the whole aaray
coding.forEach((item,index,arr) => {
//  console.log(item,index,arr);
}); // expected output --- 
/*
Value    ind             array
s         0      [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby      1      [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java      2      [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python    3      [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp       4      [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/


const myCoding = [
    {
        lanName :"JS",
        file: "js"
    },
    {
        lanName :"java",
        file: "java"
    },
    {
        lanName :"C++",
        file: "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item.lanName);
}); //Output --  js java c++ 


// Note --  forEach method take a function as argument 