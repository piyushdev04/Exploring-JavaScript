// 1. Mouse Events (Click & Double Click)
const clickBtn = document.getElementById("clickBtn");
const dblClickBtn = document.getElementById("dblClickBtn");

clickBtn.addEventListener("click", () => {
    alert("Button Clicked!");
});

dblClickBtn.addEventListener("dblclick", () => {
    alert("Button Double Clicked!");
});

// 2. Keyboard Events (keypress, keyup, keydown)
const inputBox = document.getElementById("inputBox");

inputBox.addEventListener("keydown", (e) => {
    console.log("Key Down:", e.key);
});

inputBox.addEventListener("keyup", (e) => {
    console.log("Key Up:", e.key);
});

inputBox.addEventListener("keypress", (e) => {
    console.log("Key Pressed:", e.key);
});

// 3. Form Events (Submit)
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(`Form Submitted! Name: ${document.getElementById("name").value}`);
});

// 4. Event Object Properties (Mouse Position)
document.addEventListener("mousemove", (e) => {
    document.getElementById("mousePosition").textContent = `Mouse Position: X: ${e.clientX}, Y: ${e.clientY}`;
});

// 5. Remove Event Listener
const removeClickBtn = document.getElementById("removeClick");

function handleClick() {
    alert("Click Event Active!");
}

clickBtn.addEventListener("click", handleClick);

removeClickBtn.addEventListener("click", () => {
    clickBtn.removeEventListener("click", handleClick);
    alert("Click event removed from 'Click Me' button!");
});