// Custom console to display logs in the UI
const consoleOutput = document.getElementById('consoleOutput');

// Override console.log to display in our custom console
const originalConsoleLog = console.log;
console.log = function(...args) {
    originalConsoleLog.apply(console, args);
    const message = document.createElement('div');
    message.className = 'console-message info';
    message.textContent = '>' + args.join(' ');
    consoleOutput.appendChild(message);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
};

// Modify Attributes
function modifyAttributes() {
    const box = document.getElementById("mainBox");

    if (!box) return console.log("Main box is not available.");

    box.classList.add("modified");
    box.setAttribute("data-info", "modified");
    box.innerText = "Attributes Modified!";
    console.log("Attributes successfully modified!");
}

// Change Style (Bug Fixed)
function changeStyle() {
    const box = document.getElementById("mainBox");

    if (!box) return console.log("Main box is not available.");

    box.style.backgroundColor = "#ff9800";
    box.style.color = "#fff";
    box.style.fontSize = "20px";
    box.style.boxShadow = "0 8px 15px rgba(255, 152, 0, 0.3)";

    console.log("Styles successfully changed!");
}

// Add Elements
function addElements() {
    const container = document.getElementById("extraElements");
    container.innerHTML = "";

    ["Prepended Box", "Append Box", "Before Box", "After Box"].forEach((text, index) => {
        let newDiv = document.createElement("div");
        newDiv.textContent = text;
        newDiv.className = "box new-element";
        container.appendChild(newDiv);
    });

    console.log("New elements successfully added!");
}

// Remove Element
function removeElement() {
    const box = document.getElementById("mainBox");
    if (box) box.remove();
    console.log("Main Box removed!");
}

// Reset Playground
function resetPlayground() {
    location.reload();
}