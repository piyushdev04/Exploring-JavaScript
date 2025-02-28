// "Object.create()" for Prototypes
// A better way to set prototypes is by using Object.create():

let car = {
    wheels: 4
};

let tesla = Object.create(car); // Creates an object with 'car' as prototype

console.log(tesla.wheels); // 4 (inherited)