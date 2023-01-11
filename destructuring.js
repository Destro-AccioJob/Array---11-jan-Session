// Array Destructuring and Spread operator(already done)
// Iterators on arrays

// Higher order functions
// Map, filter and reduce
// Sort, forEach, find etc

// Strings basics and templating
// Important string methods
// RegEx introduction
// String comparisons



// indexOf(), lastIndexOf 
// slice()
// splice()
// split join reverse


// let arr = [10,20,30]

// let a = arr[0]
// let b = arr[1]
// let c = arr[2]

// let [a,b,c] = arr
// let [a,,c] = arr
// console.log(a,c)


// Object Destructing: 

let obj = {
    name: "Ramesh",
    age: 20,
    address: "Delhi"
}

// let name = obj.name
// let age = obj.age

let {name, address:b, age:c} = obj

console.log(name,b,c)


// let arr = [
// {name: "Abhishek", age: 26}, 
// {name: "Ramesh", age: 20},
// {name: "Rahul", age: 30}
// ]

// let [{name:a1, age:a2},b,c] = arr

// console.log(a1,a2)

// let {name, age} = a
// console.log(name, age)

// console.log(a.name, a.age)
// console.log(a,b,c)