// Challenge A — Array spread
  numbers = [10, 20, 30];


// 1. Create a copy using spread.
// 2. Add 40 to the copied array.
// 3. Prove that the original array remains unchanged.
// 4. Merge these arrays:

 copy1 = [...numbers];
copy1.push(40);
console.log(numbers);
console.log(copy1); 

const a = [1, 2];
const b = [3, 4];
const c = [...a,...b];
console.log(c);

// Challenge B — Object spread

// 1. Create a copy.
// 2. Create a discounted product with a price of 54000.
// 3. Add a new property stock: 10.
// 4. Explain why the original product remains unchanged.

const product = {
    name: "Laptop",
    price: 60000,
    category: "Electronics"
};

copy2 = {...product};
copy2 = {...copy2,discountedPrice : 54000};
copy2 = {...copy2, stock : 10};
console.log("Product : \n",product);
console.log("Copy2 : \n",copy2);
// The original object (product) remains unchanged because the spread operator does a shallow copy of the source to the destination. Due to which only the modification of nested object changes, the introduction of new properties doesn't reflect in the original object.


// Challenge C — Rest destructuring

// Extract:
// - First score
// - Second score
// - Remaining scores into otherScores

const scores = [85, 92, 65, 95, 72];
const [firstScore, secondScore,...otherScores] = scores;
console.log("First : ",firstScore,"\tSecond : ",secondScore,"\treamining : ",otherScores);

// Challenge D — Rest parameters
// Create a function:

function calculateTotal(...prices) {
    return prices.reduce((acc,item)=>(acc+item),0);
}

console.log(calculateTotal(100, 200, 300)); // 600
console.log(calculateTotal(500, 1000));      // 1500

// Predict the output without executing:


const original = {
    name: "Ravi",
    address: {
        city: "Salem"
    }
};

const copy = { ...original };

copy.name = "Arun";
copy.address.city = "Chennai";

console.log(original.name);
console.log(original.address.city);

//'Ravi'
//'Chennai' because spread does shallow copy which affects the nested object but the parent properties