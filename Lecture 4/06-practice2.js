/*
    Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

    a. Remove the first company from the array
    b. Remove Uber & Add Ola in its place
    c. Add Amazon at the end
*/

// Define an array with company names
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// a. Remove the first company from the array
companies.shift();
console.log("After removing first company:", companies);

// b. Remove Uber & Add Ola in its place using splice
companies.splice(1, 1, "Ola");
console.log("After replacing Uber with Ola:", companies);

// c. Add Amazon at the end
companies.push("Amazon");
console.log("After adding Amazon at the end:", companies);

