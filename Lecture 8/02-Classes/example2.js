/*
    Constructor Method
    - The constructor() method is automatically called when an object is created using "new".
    - It initializes the object with properties.
*/

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    details() {
        console.log(`Car: ${this.brand} ${this.model}`);
    }
}

let myCar = new Car("Tesla", "Model S");
myCar.details(); // Output: Car: Tesla Model S