// Q1: Modify H2 heading text
// Select the <h2> element
const heading = document.getElementById("heading");

// Append additional text
heading.textContent += " from Apna College students";

// Q2: Modify multiple divs with class "box"
// Select all divs with the class "box"
const boxes = document.querySelectorAll(".box");

// Add unique text to each div
boxes.forEach((box, index) => {
    box.textContent = `Box ${index + 1}`;
});