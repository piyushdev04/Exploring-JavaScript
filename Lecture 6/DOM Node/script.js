// Select the container element
const container = document.getElementById("container");

// Get first and last child
console.log("First Child:", container.firstChild); // Might return text node (whitespace)
console.log("Last Child:", container.lastChild);   // Might return text node (whitespace)

// Get first and last element child (ignoring text nodes)
console.log("First Element Child:", container.firstElementChild); // <p>
console.log("Last Element Child:", container.lastElementChild);   // <span>

// Get all child nodes (includes text, elements, comments)
console.log("All Child Nodes:", container.childNodes);

// Loop through child nodes and check their types
container.childNodes.forEach(node => {
    if (node.nodeType === 1) {
        console.log("Element Node:", node.tagName);
    } else if (node.nodeType === 3 && node.textContent.trim() !== "") {
        console.log("Text Node:", node.textContent.trim());
    } else if (node.nodeType === 8) {
        console.log("Comment Node:", node.nodeValue);
    }
});
