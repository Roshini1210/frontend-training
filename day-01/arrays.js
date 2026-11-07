const numbers = [5,10,15,20,25];

const num1 = numbers.map((item)=>item*2);
console.log(num1);

const num2 = numbers.filter((item)=>item>12);
console.log(num2);

const num3 = numbers.reduce((acc,item)=>acc+item,0);
console.log(num3);

const students = [
    { name: "Arun", mark: 85 },
    { name: "Priya", mark: 92 },
    { name: "Kavin", mark: 65 },
    { name: "Meena", mark: 95 },
    { name: "Ravi", mark: 72 }
];

// Implement:
// 1. Get the names of all students.
// 2. Get students who scored at least 80.
// 3. Calculate the average mark.
// 4. Find the student with the highest mark.
// 5. Create a new array containing student names and their grades.

function getGrade( n)
{
    if(n>=90)
        return "A";
    else if(n>=80)
        return "B";
    else if(n>=70)
        return "C";
    else return "D";
}

const names = students.map((item)=>item.name);
console.log(names);

const ScoreAbove80 = students.filter((item)=>item.mark>80);
console.log(ScoreAbove80);

const avg = students.reduce((acc,item)=>acc+item.mark/students.length,0);
console.log(avg);

const highest = students.reduce((acc,item)=>(
    acc.mark>item.mark ? acc : item
));
console.log(highest);

const gradeStudents = students.map((item)=>({...item,grade : getGrade(item.mark) }));
console.log(gradeStudents);

const products = [
    { id: 1, name: "Laptop", price: 60000, category: "Electronics" },
    { id: 2, name: "Mouse", price: 800, category: "Electronics" },
    { id: 3, name: "Shoes", price: 2500, category: "Fashion" },
    { id: 4, name: "Keyboard", price: 1500, category: "Electronics" },
    { id: 5, name: "T-Shirt", price: 500, category: "Fashion" }
];

console.log(products);
const nameAndPrice = products.map((item)=>({name : item.name,price : item.price}));
console.log("Name and Price : ",nameAndPrice);

const category = products.filter((item)=>(item.category==="Electronics"));
console.log("Category wise : ",category);

const below2000 = products.filter((item)=>item.price<2000);
console.log("Price below 2000 : ",below2000);

const tot = products.reduce((acc,item)=>acc+item.price,0);
console.log("Total : ",tot);


// mplement these independently:
// 1. Get all product names.
// 2. Filter products below ₹2,000.
// 3. Calculate the total catalogue value.
// 4. Find the most expensive product.
// 5. Get only Electronics products.
// 6. Calculate the total value of Electronics products.
// 7. Create a new array containing product names and their discounted prices (10% discount).

const discounted = products.map((item)=>({name : item.name, discount : 0.9*item.price }));
console.log("Discounted : ",discounted);

const mostExpensive = products.reduce((acc,item)=>(acc.price>item.price?acc:item));
console.log("Most Expensive : ",mostExpensive);

const electronicValue = products.filter((item)=>item.category==="Electronics").reduce((acc,item)=>acc + item.price,0);
console.log("Total electronics cost : ",electronicValue);

// const products = [
//     { id: 1, name: "Laptop", price: 60000, category: "Electronics" },
//     { id: 2, name: "Mouse", price: 800, category: "Electronics" },
//     { id: 3, name: "Shoes", price: 2500, category: "Fashion" },
//     { id: 4, name: "Keyboard", price: 1500, category: "Electronics" },
//     { id: 5, name: "T-Shirt", price: 500, category: "Fashion" }
// ];

// Before we move to Day 2, complete these without AI assistance:
// 1. Find the cheapest product.
// 2. Calculate the average price of Fashion products.
// 3. Return only product names costing above ₹1,000.
// 4. Create a summary object containing:
//    - Total products
//    - Total price
//    - Average price
//    - Most expensive product name
//    - Cheapest product name
// Important: Explain why you chose map, filter, or reduce for each operation.

const cheapest = products.reduce((acc,item)=>acc.price<item.price?acc:item);
console.log("Cheapest : ",cheapest);
// I chose reduce because the final answer is a single object, not filtered one or a modified (map) one. 

const Fashion = products.filter((item)=>item.category==="Fashion");
const avgFashion = Fashion.reduce((acc,item)=>acc+item.price,0)/Fashion.length;
console.log("AVerage of Fashion  : ",avgFashion);
// I don't know how to merge both of them using chain funciton, because i may not get the length of the fashion array alone

const nameAvobe1000 = products.filter((item)=>item.price>1000).map((item)=>(item.name));
console.log("Name Above 1000 : ",nameAvobe1000);
// I used filter becaue i want to reduce the number of objects based on a constraint

const summary = {
    totalProduct : products.length,
    totalPrice : products.reduce((acc,item)=>acc+item.price,0),
    averagePrice : products.reduce((acc,item)=>acc+item.price,0)/products.length,
    mostExpensive : mostExpensive.name,
    cheapestProduct : cheapest.name
}

console.log(summary);

