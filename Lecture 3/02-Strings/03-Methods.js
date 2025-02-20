/*
    String Methods:
    These are build-in functions to manipulate a string

        * str.toUpperCase()
        * str.toLowerCase()
        * str.trim() // removes whitespaces
        * str.slice(start, end?) // returns part of string
        * str1.concat(str2) // joins str2 with str1
        * str.replace(searchVal, newVal)
        * str.charAt(idx)
*/

// Define a sample string
let str = "   Hello, JavaScript!     ";

// 1. Convert to uppercase
let upperStr = str.toUpperCase();
console.log("Uppercase:", upperStr);

// 2. Convert to lowercase
let lowerStr = str.toLowerCase();
console.log("Lowercase:", lowerStr);

// 3. Trim whitespaces
let trimmedStr = str.trim();
console.log("Trimmed:", trimmedStr);

// 4. Slice part of the string (charaters from index 7 to 17)
let sliceStr = trimmedStr.slice(7, 17);
console.log("Sliced:", sliceStr);

// 5. Concatenation with another string
let greeting = "Welcome! ";
let combinedStr = greeting.concat(trimmedStr);
console.log("Concatenated:", combinedStr);

// 6. Replace 'JavaScript' with 'JS'
let replaceStr = trimmedStr.replace("JavaScript", "JS");
console.log("Replaced:", replaceStr);

// 7. Get character at a specific index
let charAtIndex = trimmedStr.charAt(7);
console.log("Character at index 7:", charAtIndex);