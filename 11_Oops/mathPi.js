const chai = {
    name : "ginger tea",
    price: 240,
    isAvail: true,
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, 'name', {
    writable:false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key , value] of Object.entries(chai)){
    console.log(`${key} ::${value}`)  // so we have changed the property of object
    // name it is not iterable and writable
}

chai.name = "Anil" // not work no error 
// console.log(chai.name)

const data = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(data)