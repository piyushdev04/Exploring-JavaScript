// Selecting elements using different methods

// Selecting by ID
const heading = document.getElementById("heading");

// Selecting by class (returns HTMLCollection, like an array)
const paragraphs = document.getElementsByClassName("info");

// Selecting by tag name (returns HTMLCollection)
const allParagraphs = document.getElementsByTagName("p");

// Query selector (selects the first matching element)
const firstParagraph = document.querySelector(".info");

// Query selector all (selects all matching elements as a NodeList)
const allParagraphsNodeList = document.querySelectorAll(".info");


// DOM Manipulation

// Changing text using innerText
document.getElementById("changeTextBtn").addEventListener("click", function() {
    heading.innerText = "DOM Manipulation is Fun!";
});

// Changing style using class selection
document.getElementById("changeColorBtn").addEventListener("click", function() {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "red";
    }
});

// Logging different properties
console.log("Tag Name:", heading.tagName);
console.log("Inner Text:", heading.innerText);
console.log("Inner HTML:", heading.innerHTML);
console.log("Text Content:", heading.textContent);