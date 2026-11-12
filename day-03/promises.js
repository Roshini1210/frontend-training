/*
Exercise 1 – Product Availability Promise
Beginner
Requirement
Create a Promise that checks product availability.
- If stock > 0, resolve with "Product available".
- Otherwise, reject with "Product out of stock".
- Use .then() to display the success message.
- Use .catch() to display the failure message.
- Use .finally() to display "Check completed".
*/

const stock = -5;

const pro = new Promise((resolve,reject)=>{
    if(stock>0)
        resolve("Product available");
    else
        reject(new Error("Product out of stock"));
});

pro.then((message)=>console.log("Success message : ",message))
.catch((error)=>console.log("Failure message : ",error.message))
.finally(()=>console.log("Check completed"));

/*
Exercise 2 – Promise Chaining
Intermediate
Requirement
Start with Promise.resolve(100).
1. Multiply the value by 2.
2. Subtract 50.
3. Print the final result.
4. Print "Calculation completed" using .finally().
*/

const newPro = new Promise((resolve,reject)=>{
    resolve(100);
})

newPro.then((num)=>(num*2))
.then((num)=>num-50)
.then((num)=>(console.log(num)))
.catch(()=>console.log("some error occured"))
.finally(()=>console.log("Calculation completed"));
