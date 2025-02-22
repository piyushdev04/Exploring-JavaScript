/*
    Array Methods:

    * Push(): add to end
    * Pop(): delete from end & return
    * toString(): converts array to string
    * Concat(): joins multiple arrays & returns result
    * unshift(): add to start
    * shift(): delete from start & return
    * Slice(): returns a piece of the array
        - slice(startIdx, endIdx)
    * Splice(): change original array (add, remove, replace)
        - splice(startIdx, delCount, newEl1...)
*/

// Define a sample array with DC heroes
let heroes = ["Batman", "Superman", "Wonder Woman"];

// 1. Push: Add to end
heroes.push("Flash");
console.log("After push:", heroes);

// 2. Pop: Remove from end & return
let poppedHero = heroes.pop();
console.log("Popped hero:", poppedHero);
console.log("After pop:", heroes);

// 3. Convert array to string
let heroesString = heroes.toString();
console.log("Heroes as string:", heroesString);

// 4. Concat: Join multiple arrays
let newHeroes = heroes.concat(["Aquaman", "Cyborg"]);
console.log("Heroes as string:", heroesString);

// 5. Unshift: Add to start
heroes.unshift("Green Lantern");
console.log("After unshit:", heroes);

// 6. Shift: Remove from start & return
let shiftedHero = heroes.shift();
console.log("Shifted heroes:", shiftedHero);
console.log("After shift:", heroes);

// 7. Slice: Get a piece of the array
let slicedHeroes = heroes.slice(0,2);
console.log("Sliced heroes:", slicedHeroes);

// 8. Splice: Modify original array
heroes.splice(1,1, "Shazam", "Martian Manhunter");
console.log("After splice:", heroes);