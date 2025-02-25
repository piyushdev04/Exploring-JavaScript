/*
    Qs1. Create a new button element. Give it a "click me", background color of red & text color of white.
    Insert the button as the first element inside the body tag.
*/

let newBtn = document.createElement("button");
newBtn.innerText = "click me";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "orange";

document.querySelector("body").prepend(newBtn)

/*
    Qs2. Create a <p> tag in html, give it a class & some styling.
    Now create a new class in CSS and try to append this class to the <p> element.

    Did you notice, how you overwrite the class name when you add a new one?
    Solve this problem using classList.
*/

function modifyClass() {
    let para = document.getElementById("myParagraph");

    para.classList.add("newClass");

    console.log("Class List:", para.classList);
}