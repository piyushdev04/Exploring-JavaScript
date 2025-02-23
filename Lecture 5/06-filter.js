/*
    Filter:
    Creates a new array of elements that  give true for a condition/filter.
    Eg: all even elements

    let newArr = arr.filter((val) => {
        return val % 2 === 0;    
    })
*/

// Example 1: Filtering Even Numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to get only even numbers
const evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
});

console.log("Original Array:", numbers);
console.log("Even Numbers:", evenNumbers);


// Example 2: Filtering Out Words with More Than 5 Letters
const words = ["apple", "banana", "Kiwi", "grape", "mango", "pineapple"];

// Using filter to get words with lenght <= 5
const shortWords = words.filter((word) => {
    return word.length <= 5;
});

console.log("Short Words:", shortWords);


// Example 3: Filtering Students Who Passed
const Students = [
    {name: "Alice", score: 85},
    {name: "Bob", score: 40},
    {name: "Charlie", score: 65},
    {name: "David", score: 90},
];

// Filtering students who scored >= 50 (pass)
const passedStudents = Students.filter((student) => {
    return student.score >= 50;
});

console.log("Passed Students:", passedStudents);