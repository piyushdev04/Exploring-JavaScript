/*
    Looping over an Array
    Print all elements of an array
*/


// Ex1.
let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

// Ex2.
let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];

for (let city of cities) {
    console.log(city.toUpperCase());
}