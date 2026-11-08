/*
Exercise 1 — Counter
Create createCounter() that:
- Starts at 0.
- Returns a function.
- Each call increments and returns the counter value.
*/

function createCounter(){
    let count = 0;
    return function()
    {
        count++;
        console.log(count);
    }
}

const counter = createCounter();
counter();
counter();
counter();

/*
Exercise 2 — Private Password
Create a function createPasswordManager(password) that returns an object containing:
- checkPassword(input) → returns true/false.
- changePassword(oldPassword, newPassword) → changes password only if the old password matches.
The password must not be directly accessible outside.
*/

function createPasswordManager(){
    let pw = "This is my Password";

    return{
        checkPassword(password) {return password == pw?true:false},
        changePassword(old,newP) 
        {
            if(old==pw)
               { pw = newP;
                console.log("The password is changed!");}
            else        
                console.log("Incorrect old password, therefore password updation failed!");
        }
    }
}

const pass = createPasswordManager();
console.log(pass.checkPassword("Hello"));
console.log(pass.checkPassword("This is my Password"))
pass.changePassword("Hello","Changed one");
pass.changePassword("This is my Password","Changed one");

/*
Exercise 3 — Independent Counters
Create two counters and prove that changing one does not affect the other.
*/

//I'm using the old createCounter function for doing this exercise

const counter1 = createCounter();
const counter2 = createCounter();

counter1();
counter1();

counter2();

/*
What I want you to focus on
Don't memorize the definition.

Understand these three things:
1. Where is the variable created?
2. Why does it survive after the outer function finishes?
3. Why do separate function calls maintain separate variables?
*/

//1. The variables are created inside the outer function
//2. It survives even after the outer function finishes because the the access to view or modify the variable is granted to the function call by returning the functions/statements that modifies or prints that variable. 
//e. Because each function call of different variables creates a new lexical scope of the same variable which do not affect one another.