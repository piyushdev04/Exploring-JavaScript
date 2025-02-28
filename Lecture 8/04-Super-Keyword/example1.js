class Vehicle {
    start() {
        console.log("Starting the vehicle...");
    }
}

class Car extends Vehicle {
    start() {
        super.start(); // Calls the parent's start method
        console.log("Car engine started");
    }
}

let myCar = new Car();
myCar.start();