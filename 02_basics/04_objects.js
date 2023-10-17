// const tinderUser = new Object()// Singleton Object -- constructor form 

// console.log(tinderUser); // { }

const tinderUser = {};
// console.log(tinderUser); // {}

tinderUser.id = "123Anc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); 

const regularUser = {
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Anil",
            lastName: "Patidar"
        }
    }
}

// console.log(regularUser.fullName);// return a fullName Object { userFullName: { firstName: 'Anil', lastName: 'Patidar' } }
console.log(regularUser.fullName.userFullName.firstName);// Anil
console.log(regularUser.fullName.userFullName.lastName);// Patidar

const obj1 = { 1:"a",2:"b"};
const obj2 = {3:"c" ,4:"d"};

// const obj3 = {obj1,obj2};
// console.log(obj3); --> in one object there is two object

const obj3 = Object.assign(obj1,obj2);
// console.log(obj3);  // expected Output -- { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// Similar work of -- 
const obj4 = Object.assign({}, obj1 ,obj2);
// console.log(obj3);// expected Output -- { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// if we will not write {} inside assign method then all object will assign to the first --obj1 
// console.log(obj3==obj1);// true because in line no 33 obj2 assignrd to obj1 and obj1 assigned to obj3 
// if we do like Object.assign({},obj1,obj2,obj3); // all assign to empty object 

const obj5 = {5:"a" , 6:"b"};

const obj6 = Object.assign({},obj1,obj2,obj5);
// console.log(obj6);
// console.log(obj6===obj1); // false --- 

const obj7 = {...obj1,...obj2}; // spread of objects 
// console.log(obj7);


// when data render from database  -- it will in the form of array 
const user = [
    {
        id:'1',
        email:"ak1@gmail.com"
    },
    {
        id:'2',
        email:"ak2@gmail.com"
    } ,
    {
        id:'3',
        email:"ak3@gmail.com"
    },
    {
        id:'4',
        email:"ak4@gmail.com"
    }
]

// Way to Access data from array of object in javascript  
// console.log(user[1].email);// ak1@gmail.com 

// console.log(Object.keys(tinderUser)); // All key of object will be display in the form of ARRAY
// console.log(typeof Object.keys(tinderUser)); // Array its typeof will be object
// console.log(Object.values(tinderUser)); // All values of object will be display in the form of ARRAY
// console.log(Object.entries(tinderUser));// Every key value pair forms a array inside a single array 
// Expected output -- [ [ 'id', '123Anc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// To check key is exist in object or not we have 
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));// true if exist otherwise false-- 



//----------------------- Object Part -3-----------
const course = {
    courseName : "Js Hindi",
    price:"999",
    courseInstructor:"Hitesh",
} 

// couse.courseInstructor
//Object de - structure 

//  const {courseInstructor} = course;
//  console.log(courseInstructor);// Hitesh 
// or  we can name according to us 
const {courseInstructor:instructor} = course;
console.log(instructor);// Hitesh 

// API's Concept 
// from backend some values are back ,,iniatially they comes in XML 
// But now they comes in JSON format 
// Json--- 
// {
//   name:"Hiesh",
//   courseName:"Js In hIndi",
//   price:"free",
// }
 // Some time response from API comes in the form of Arrays

//  [
//     {},
//     {},
//     {},
//  ]
// we can udersttod it with help of json formatter --- website



