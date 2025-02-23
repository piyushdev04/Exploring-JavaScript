/*
    Reduce:
    Performs some operations &  reduces the array to a single value. It returns
    that single value.
*/

// Example 1: Sum of All Numbers in an Array
const numbers = [1, 2, 3, 4, 5];

// Using reduce to sum all numbers
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("Sum:", sum);


// Example 2: Find the Maximum Value in an Array
const values = [10, 5, 20, 8, 30];

// Using reduce to find the maximum number
const max = values.reduce((acc, val) => {
    return val > acc ? val : acc;
}, values[0]);

console.log("Maximum Value:", max);


// Example 3: Counting Occurrences of Items in an Array
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// Using reduce to count occurrences
const fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log("Fruit Count:", fruitCount);


// Example 4: Total Price of Products in a Cart
const cart = [
    {item: "Laptop", price: 50000},
    {item: "Mouse", price: 1500},
    {item: "Keyboard", price: 3000}
];

// Using reduce to calculate total price
const totalPrice = cart.reduce((acc, product) => {
    return acc + product.price;
}, 0);

console.log("Total Price:", totalPrice);