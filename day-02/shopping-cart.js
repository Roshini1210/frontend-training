const cart = [
    { id: 1, name: "Laptop", price: 60000, quantity: 1 },
    { id: 2, name: "Mouse", price: 800, quantity: 2 }
];

function addProduct(cart, product) {
    const index = cart.findIndex((item) => product.id === item.id);
    if (index != -1) {
        cart[index].quantity += 1;
    }
    else {
        const newProduct = {
            ...product,
            quantity: 1
        }
        cart.push(newProduct);
    }
}

function removeProduct(cart, productId) {
    const index = cart.findIndex((item) => item.id == productId)
    if (index != -1) {
        console.log(cart[index].name, " Removed!\n");
        cart.splice(index, 1);
    }
}

function updateQuantity(cart, productId, change) {
    const index = cart.findIndex((item) => item.id === productId);
    if (index != -1) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0)
            removeProduct(cart, cart[index].id);
    }

}

function calculateSubTotal(cart) {
    const subTotal = cart.reduce((acc, item) => (acc + (item.price * item.quantity)), 0);
    return subTotal;
}

function applyDiscount(subTotal,discountPercentage){
    const discountAmount = subTotal*(discountPercentage/100);
    return discountAmount;
}

function calculateFinalAmount(subTotal,discount){
    const total = subTotal-discount;
    return total;
}

function getSummary(cart,discountPercentage){
    const sub = calculateSubTotal(cart);
    const dis = applyDiscount(sub,discountPercentage)
    const summary = {
        itemCount : cart.reduce((acc,item)=>(acc+(item.quantity)),0),
        uniqueProducts : cart.length,
        subTotal : sub,
        discount : dis,
        finalAmount : calculateFinalAmount(sub,dis)
    }
    return summary;
}

const keyboard = {
    id: 3,
    name: "Keyboard",
    price: 1500
};

console.log(cart);

addProduct(cart, keyboard);
console.log(cart);


addProduct(cart, { id: 2, name: "Mouse", price: 800 });
console.log(cart)

addProduct(cart, { id: 1, name: "Laptop", price: 60000 });
console.log(cart)

console.log("\n\nAFter updation\n\n");

updateQuantity(cart, 2, 5);  // Mouse quantity increases
console.log(cart);

updateQuantity(cart, 1, 1); // Laptop quantity decreases
console.log(cart);

updateQuantity(cart, 3, -1); // Keyboard removed
console.log(cart);

const summary = getSummary(cart,10);
console.log("Cart Summary : \n",summary);