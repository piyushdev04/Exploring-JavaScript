// creating class with bruteforce way:

// const dog = {
//     name: "doggie",
//     legCount: 4,
//     speaks: "bhow bhow",
// };

// const cat = {
//     name: "cat",
//     legCount: 4,
//     speaks: "meow meow",
// };

// function printStr(animal){
//     console.log("animal " + animal["name"] + " " + animal["speaks"]);
// }

// (printStr(dog));
// (printStr(cat));

// creating classes:[main class & objects]

class Animal {
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    speak() {
        console.log("hi there" + this.speaks);
    }
}

let dog = new Animal("dog", 4, " bhow bhow"); // create object
let cat = new Animal("cat", 4, " meow meow");
dog.speak(); // call function on object