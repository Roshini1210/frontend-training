//Challenge A : Object destructuing

//Extract name and price.
//Extract price into a variable named cost.
// Extract category with a default value of "Unknown".
const product = {
    name : "Laptop",
    price : 60000,
    category: "Electronics"
};

// const { name, price } = product;
// const { price : cost , category = "Unknown"} = product;
// console.log("Name : ",name,"\nPrice : ",price , "\nCost : ",cost, "\nCategory : ",category);


//Challenge B ; Array destructing
//1. Extract the first and second scores
//2. Extract the irst and third scores, skipping the second.
//3. Extract the first score into highestScore and the remaining scores into otherSources

const scores = [85,92,65,95,72];
//const [first, second] = scores;
const [first, third ] = scores;
// I don't know the renaming 


// const [first, , third] = scores;
// const [highestScore, ...otherScores] = scores;



// Challenge C : Nested destructuring
//Extract name, age, and city into separate variables.

const user = {
    Name: "Ravi",
    profile: {
        age: 21,
        city: "Salem"
    }
};

const { Name , profile : { age,city}} = user;
console.log("Name : ",Name, "\n AGe : ",age, "\nCity : ",city);

//Challenge D — Explain this
function ProductCard({ name, price }) {
    console.log(name, price);
}
//Explain exactly what { name, price } means here.

//name and price are destructured variables which are deried from an object. 

// Correction task for incorrect in challenge B
// Challenge B
// Extract first and second
// Extract first and third, skipping second
// Extract first into highestScore and remaining into otherScores

const [First,sec] = scores;
const [First1 , , Third] = scores;
const [highestScore,...otherScores] = scores;

// Rewrite your destructuring into a single statement extracting:
// - name
// - price
// - cost (same price property)
// - category with default "Unknown"
// Send just those corrected snippets.
const { name, price, price : cost, category = "Unknown"} = product;

console.log("\nFIrst : ",First, "\nsec",sec,"\nFirst1 : ",First1,"\nThird  : ",Third,"\nhighestScore : ",highestScore,"\nOther Scores : ",otherScores );
console.log("\nName : ",name, "\nprice : ",price ,"\nCost : ",cost,"\nCategory : ",category);