/**
 * Class car created.
 * @class Car.
 */
var Car = (function () {
    // Constructor.
    function Car() {
        console.log("car constructor called");
        console.log("**********************");
    }
    // Methode start.
    Car.prototype.start = function () {
        console.log("Car started");
    };
    // Methode drive.
    Car.prototype.drive = function () {
        console.log("Car Driving smoothly");
    };
    // Methode getposition.
    Car.prototype.getPosition = function () {
        console.log("Car is in Mumbai");
    };
    return Car;
}());
var hondacity = new Car(); // Creating hondacity Object.
hondacity.start(); // "Car started".
hondacity.drive(); // "Car Driving Smoothly".
hondacity.getPosition(); // " Car is in Mumbai"
