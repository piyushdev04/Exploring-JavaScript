// Prototype Inheritance Chain

let grandParent = { surname: "Smith"};
let parent = { __proto__: grandParent};
let child = { __proto__: parent};

console.log(child.surname); // "Smith" (inherited from grandParent)