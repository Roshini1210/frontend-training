/*
Exercise 1 — Calculator callback
Create a function:
calculate(a, b, callback)


Requirements:
- Add a and b.
- Pass the result to the callback.
- Print the result inside the callback.
*/

function calculate(a,b,callback){
    const result = a+b;
    callback(result);
}

calculate(10,20,(result)=>{
    console.log("The result is : ",result);
})

/*
Exercise 2 — Delayed user information
Create a function:
getUser(callback)


Requirements:
- Wait 2 seconds using setTimeout.
- Create an object containing name and age.
- Pass the object to the callback.
- Print the user's name and age inside the callback.
Expected output after 2 seconds:
Name: Roshini
Age: 20
*/

function getUser(callback){
    setTimeout(()=>{
        const user = {
            Name : "Roshini",
            Age : 19
        };
        callback(user);
    },2000);
}

getUser((user)=>{
    console.log("Name : ",user.Name,"\nAge : ",user.Age);
})