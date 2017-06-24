/**
 * Interface IDrivable.
 * @Methodes: start, drive, getPosition.
 */
interface IDrivable {
    start(): void;
    drive(): void;
    getPosition(): void;
}

/**
 * Class car created.
 * @class Car.
 */
class Car implements IDrivable {
    // Constructor.
    constructor () {
        console.log("Car constructor");
        console.log("**********************");
    }
    // Methode start.
    start(): void {
        console.log("Car started");
    }

    // Methode drive.
    drive():void {
        console.log("Car Driving smoothly");
    }

    // Methode getposition.
    getPosition():void {
        console.log("Car is in Mumbai");
    }
}

let hondacity = new Car(); // Creating hondacity Object.
hondacity.start(); // "Car started".
hondacity.drive(); // "Car Driving Smoothly".
hondacity.getPosition(); // " Car is in Mumbai"
