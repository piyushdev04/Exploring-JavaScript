// Setting a Prototype Using "__proto__"

// Parent object (Prototype)
let animal = {
    eats: true,
    sleep: function() {
        console.log("Sleeping....");
    }
};


// Child object inheriting from 'animal'
let dog = {
    barks: true
};

// Setting prototype
dog.__proto__ = animal;

console.log(dog.eats); // true (inherited)
dog.sleep(); // sleeping.... (inherited)
console.log(dog.barks); // true (own property)