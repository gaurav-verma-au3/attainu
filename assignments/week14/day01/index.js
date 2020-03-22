let shoppingCart = [
    { productTitle: "Functional Programming", type: "books", amount: 10 },
    { productTitle: "Kindle", type: "eletronics", amount: 30 },
    { productTitle: "Shoes", type: "fashion", amount: 20 },
    { productTitle: "Clean Code", type: "books", amount: 60 }
]

let myFilter = order => order.type == "books";
let myMap = order => order.amount;
let mySum = (acc, amount) => acc + amount;

let total = cart => {
    return cart.filter(myFilter).map(myMap).reduce(mySum);
}

console.log(total(shoppingCart))
