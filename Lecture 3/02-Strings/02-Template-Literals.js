/*
    Template Literals:
    A way to have embedded expressions in strings

            `this is a template literal`


    ------------------------------------
    String Interpolation
    
    To create strings by doing substitution of placeholders

        `string text ${expression} string text`
*/

// let specialString = `This is a template literal`;
// console.log(specialString);
// console.log(typeof specialString);

// Example
let obj = {
    item: "pen",
    price: 10,
};

// problem
console.log("the cost of", obj.item, "is", obj.price, "rupees");

// solution
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// escape characters
console.log("Piyush\nBafna"); // "\n": next line
console.log("Piyush\tBafna"); // "\t": tab space