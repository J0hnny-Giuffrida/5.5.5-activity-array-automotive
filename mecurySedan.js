//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle(
  "Mecury",
  "Sedan",
  "1965",
  "color",
  "mileage"
);
console.log(v.make);

class Car extends Vehicle {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maximumPassengers = 5;
    this.passenger = 0;
    this.numberofWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }
  loadPassenger() {
    if (this.passenger < this.maximumPassengers) {
      console.log("This vehicle can fit your passengers");
    } else {
      console.log("Your passengers cannot fit");
    }
  }
  start() {
    if (this.fuel > 0) {
      return (this.started = true);
      console.log("engine started...!!!");
    } else {
      return (this.started = false);
      console.log("engine cannot start...");
    }
  }
  scheduleService() {
    if (mileage >= 30000) {
      this.scheduleService = true;
      return this.scheduleService;
    }
  }
}
