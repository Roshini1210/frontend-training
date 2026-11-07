// Exercise A — Function conversion
// Write the same function in all three forms:
// - Function declaration
// - Function expression
// - Arrow function
// Function: calculateSquare(number)

//1. Function declaration

function calculateSquare(number)
{
    console.log("The square value of ",number," is ",number*number);
}

//2. function expression
const calculateSquare1 = function(number)
{
    console.log("The square value of ",number," is ",number*number);   
}

//3.Arrow function

const calculateSquare2 = (number)=>{   
    console.log("The square value of ",number," is ",number*number);
}

const calculateSquare3 = number => console.log("The square value of ",number," is ",number*number);

const calculateSquare4 = number => {
    console.log("The square value of ",number," is ",number*number);
}

calculateSquare(5);
calculateSquare1(10);

// Exercise B — Return vs log
// Predict the output before running:
// function calculate(a, b) {
//     console.log(a + b);
// }

// const result = calculate(10, 20);

// console.log(result);

//Output is undefined because the call statement expects a value to return, but the function just prints a number without returning anything. Therefore the function returns undefined.





/*Exercise C — Discount calculator
Write an arrow function calculateDiscount(price, discountPercentage).

Requirements:
- Calculate the discount amount.
- Return the final price after discount.
- Do not print inside the function.*/

const calculateDiscount = (price,discountPercentage) => {
    const disAmount = (100-discountPercentage)*0.01*price;
    return disAmount;
}

console.log("Discount is " ,calculateDiscount(1000, 10)); // 900
console.log("Discount is : ",calculateDiscount(2000, 25)); // 1500


/*
Exercise D — Default parameters
Create a function greetUser(name = "Guest").

Expected:
greetUser("Roshini"); // Hello Roshini
greetUser();          // Hello Guest
*/

function greetUser(name = "Guest")
{
    console.log(`Hello ${name}`);
}

greetUser("Roshini"); // Hello Roshini
greetUser();          // Hello Guest

/*
Exercise E — Challenge 🧠
Create an arrow function getGrade(mark).

Rules:
- 90 or above → "A"
- 80–89 → "B"
- 70–79 → "C"
- 60–69 → "D"
- Below 60 → "F"
Test it with at least 5 different marks, including boundary values.
*/

const getGrade = mark =>{
    if(mark>=90)
        return 'A';
    else if(mark>=80)
        return 'B';
    else if(mark>=70)
        return 'C';
    else if(mark>=60)
        return 'D';
    else return 'F';
}

console.log("Grade : ",getGrade(50));
console.log("Grade : ",getGrade(60));
console.log("Grade : ",getGrade(75));
console.log("Grade : ",getGrade(80));
console.log("Grade : ",getGrade(90));
console.log("Grade : ",getGrade(95));