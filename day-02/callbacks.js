/*
Exercise 1 — Calculator
Create a function called calculator that accepts:
- Two numbers
- A callback function
Use the callback to perform addition, subtraction, multiplication, or division.
*/

function calculator(a,b,cbfunction)
{
    return cbfunction(a,b);
}
const add = calculator(5,10,(x,y)=>x+y);
const sub = calculator(5,10,(x,y)=>x-y);
const mul = calculator(5,10,(x,y)=>x*y);
const div = calculator(5,10,(x,y)=>x/y);

console.log("Add : ",add);
console.log("Sub : ",sub);
console.log("Mul : ",mul);
console.log("Div : ",div);

/*
Exercise 2 — Student filtering
Create a function called processStudents that accepts:
- An array of students
- A callback function
Use the callback to filter students.
*/

 students = [
    { name: "A", mark: 90 },
    { name: "B", mark: 65 },
    { name: "C", mark: 80 },
    { name: "D", mark: 45 }
];

function processStudents(arr,callback){
    return callback(arr);
}

const callback = function(arr){
    return arr.filter((stu)=>stu.mark>=80);
}

console.log(students);
students = processStudents(students,callback);
console.log(students);
//how to modify the array within the function(like passing address in cpp, how to change the original within local scope)
//Ans is, modifying existing array, affects the original, while replacing the entire array with another value doesn't modify the original array, it doesn't behave lika cpp references.

/*
Exercise 3 — Your own callback
Create a function executeOperation that accepts a callback and executes it.

Pass an arrow function that prints:
Learning JavaScript callbacks!
*/

function executeOperation(callback){
    callback();
}
function callback1()
{
    console.log("Learning JavaScript callbacks!");
}

executeOperation(callback1);

/*
3. One challenge before closures
Try this without AI assistance:
const cart = [
    { name: "Laptop", price: 60000 },
    { name: "Mouse", price: 800 }
];

function addProduct(cart, product) {
    // Add product to the original cart
}

function removeProduct(cart, productName) {
    // Remove the product from the original cart
}


Requirements:
1. Add a Keyboard priced ₹1500.
2. Remove Mouse.
3. Print the original cart after each operation.
*/

const cart = [
    { name: "Laptop", price: 60000 },
    { name: "Mouse", price: 800 }
];

function addProduct(cart, product) {
    cart.push(product);
}

function removeProduct(cart, productName) {
    cart = cart.filter((item)=>item.name!=productName);
  
}

addProduct(cart,{name : "Keyboard", price : 1500});
console.log(cart);
removeProduct(cart,"Mouse");
console.log(cart);
// I can't modify by removing, because filter creates a new array, but const keyword doesn't allow modifying it. 
