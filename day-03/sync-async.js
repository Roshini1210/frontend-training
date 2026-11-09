/*
Exercise 1
Create a function called greetUser.

Requirements:
- Print "Welcome!" immediately.
- After 2 seconds, print "Hope you have a great day!".
- Print "Let's start learning JavaScript" immediately after scheduling the timer.
*/

console.log("Welcome");
setTimeout(()=>{console.log("Hope you have a greate day!")},2000);
console.log("Let's start learning JavaScript");

/*
Exercise 2
Create a countdown starting from 5.

Requirements:
- Print 5, 4, 3, 2, 1 at one-second intervals.
- After 1, print "Time's up!".
- Stop the interval after the countdown completes.
*/
let count = 5;
const interval = setInterval(()=>{
    console.log(count);
    count--;
    if(count===0)
    {
        console.log("Time's up!");
                clearInterval(interval);
        
    }
},1000)