/*
    Map:
    Creates a new array with the results of some operation. The value its callback returns are
    used to form new array

    arr.map(callbackFnx(value, index, array))

    let newArr = arr.map((val) => {
        return val*2;
    })

*/

// Example 1: Doubling Numbers
const numbers = [1, 2, 3, 4, 5];

// Using map to create a new array with doubled values
const doubledNumbers = numbers.map((num) => {
    return num * 2;
});

console.log("Original Array:", numbers);
console.log("Doubled Array:", doubledNumbers);


// Example 2: Converting Celsius to Fehrenheit
const celsiusTemps = [0, 10, 20, 30, 40];

// Using map to convert temperatures to Fahrenheit
const fahrenheitTemps = celsiusTemps.map((celsius) => {
    return (celsius * 9/5) + 32;
});

console.log("Celsius:", celsiusTemps);
console.log("Fahrenheit:", fahrenheitTemps);


// Example 3: Extracting Names from an Array of Objects
const users = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
];

// Using map to extract just the names
const names = users.map((user) => {
    return user.name;
});

console.log("Names:", names);