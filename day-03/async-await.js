async function getNumber() {
    return 100;
}

let res = await getNumber();
console.log(res);

await getNumber().then((val)=>console.log("First console : ",val))
console.log("Second console : ",getNumber());
console.log("\n\nWithout await\n\n")
setTimeout(()=>{
     getNumber().then((val)=>console.log("First console : ",val))
    console.log("Second console : ",getNumber());

},1000)


/*
7. Coding Exercises
Exercise 1 — Async Greeting
Beginner
Requirements:
1. Create an async function called greetUser.
2. Inside it, await a Promise that resolves after 2 seconds.
3. Resolve the Promise with "Welcome, Rose!".
4. Print the returned message.
5. Print "Program completed" outside the async function.
*/

const Prom = new Promise((resolve)=>{
    setTimeout(()=>{
       resolve("Welcome Rose!")
    },500)
})
async function greetUser(){
    let msg = await Prom;
    console.log(msg);
}
console.log("Program completed");

/*
Exercise 2 — Product Price Calculation
Intermediate
Requirements:
1. Create a function getProductPrice() that returns Promise.resolve(2000).
2. Create an async function calculateFinalPrice().
3. Await the product price.
4. Add 18% GST to the price.
5. Print the final price.
Expected output:
2360
*/

function getProductPrice(){
    return Promise.resolve(2000);
}
async function calculateFinalPrice()
{
    let price = await getProductPrice();
    price = price * (1 + 18/100);
    console.log("Final price : ",price);
}

calculateFinalPrice();

/*
Exercise 3 — Sequential Asynchronous Operations
Intermediate
Requirements:

Create these two functions:
- getUser() → returns a Promise resolving to { id: 1, name: "Rose" } after 2 seconds.
- getUserOrders() → returns a Promise resolving to ["Laptop", "Mouse"] after 1 second.
Inside displayUserDetails():
1. Await getUser().
2. Print the user's name.
3. Await getUserOrders().
4. Print the orders.
Expected output:
Rose
Laptop
Mouse


Total waiting time should be approximately 3 seconds.

Challenge: Why does it take approximately 3 seconds instead of 2 seconds?
*/

function getUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
       resolve({id : 1, name : "Rose"});
    },2000)
    })
}
function getUserOrder(){
   return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(["Laptop","Mouse"]);
    },1000)
   }) 
}

async function displayUserDetails(){
    const userName = await getUser();

    console.log(userName.name);
    const order = await getUserOrder();
    console.log(order);
}

displayUserDetails();

/*
Final Challenge — Order Processing System
Intermediate | Interview + Practical
Requirements
Create the following functions:
1. getProduct() → returns a Promise resolving to { name: "Laptop", price: 50000 } after 2 seconds.
2. getDiscount() → returns a Promise resolving to 10 after 1 second.
3. calculateOrder() → an async function that:
   - Awaits the product.
   - Awaits the discount.
   - Calculates the discounted price.
   - Returns the final price.
4. Call calculateOrder() and print the returned price.
*/

async function getProduct(){
    return new Promise (resolve=>{
        setTimeout(()=>{
           resolve( {
                name : "Laptop",
                price : 80000
            })
        },2000)
    })
}

async function getDiscount() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(10);
        },1000)
    })
}
async function calculateOrder(){
    const product = await getProduct();
    const discount = await getDiscount();
    const finalPrice = product.price*((100-discount)/100);
    return finalPrice;
}
calculateOrder().then((val)=>console.log("Final price : ",val));

